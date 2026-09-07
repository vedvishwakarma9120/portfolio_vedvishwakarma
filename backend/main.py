import json
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
from pydantic import BaseModel
from pypdf import PdfReader

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

model = "openai/gpt-oss-120b"
app = FastAPI(title="Ved AI Portfolio Assistant")
@app.get("/health")
def health():
    return {"status": "ok"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



#parse resume
class Experience(BaseModel):
    company: str | None = None
    role: str | None = None
    duration: str | None = None
    description: str | None = None
    skills_used: list[str] = []

class Resume(BaseModel):
    name: str | None = None
    email: str | None = None
    phone: str | None = None
    social_links: dict[str, str] = {
        "leetcode": "https://leetcode.com/u/vedvishwakarma/",
        "github": "https://github.com/vedvishwakarma9120",
        "linkedin": "https://linkedin.com/in/ved-vishwakarma",
        "resume_preview": "https://drive.google.com/file/d/1i_jP_VszegML71Z2WiWHiUIwYhRsw5vE/preview",
        "resume_download": "https://drive.google.com/uc?export=download&id=1i_jP_VszegML71Z2WiWHiUIwYhRsw5vE"
    }

    total_experience_years: float | None = None

    skills: list[str] = []
    experiences: list[Experience] = []
    education: list[str] = []
    projects: list[str] = []
    certifications: list[str] = []
resume_schema = Resume.model_json_schema()

class ChatRequest(BaseModel):
    question: str

from fastapi.responses import StreamingResponse

def stream_ask_candidate(question: str, resume: Resume):

    system_prompt = f"""
You are an AI assistant representing Ved Vishwakarma.

Below is everything you know about the candidate:

{resume.model_dump_json(indent=2)}

Rules:

1. Answer accurately using only this information.
2. Never hallucinate false claims.
3. If information is unavailable, say: "I don't have enough information to answer that."
4. Be professional, conversational, and natural.
5. Answer questions as if speaking to a recruiter, HR, or visitor.
6. Keep answers concise, clear, and direct. Use bullet points when listing skills, projects, or background.
7. Only provide links (like LeetCode, GitHub, LinkedIn, or Resume) when the user explicitly asks for links, profiles, or contact URLs. Do NOT give links on normal conversational or unrelated questions. When giving links, format them in clean markdown like [LeetCode Profile](https://leetcode.com/u/vedvishwakarma/).
"""

    stream = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": question
            }
        ],
        stream=True
    )

    for chunk in stream:
        content = chunk.choices[0].delta.content
        if content:
            yield content

def ask_candidate(question: str, resume: Resume):
    system_prompt = f"""
You are an AI assistant representing Ved Vishwakarma.

Below is everything you know about the candidate:

{resume.model_dump_json(indent=2)}

Rules:

1. Answer accurately using only this information.
2. Never hallucinate false claims.
3. If information is unavailable, say: "I don't have enough information to answer that."
4. Be professional, conversational, and natural.
5. Answer questions as if speaking to a recruiter, HR, or visitor.
6. Keep answers concise, clear, and direct. Use bullet points when listing skills, projects, or background.
7. Only provide links (like LeetCode, GitHub, LinkedIn, or Resume) when the user explicitly asks for links, profiles, or contact URLs. Do NOT give links on normal conversational or unrelated questions. When giving links, format them in clean markdown like [LeetCode Profile](https://leetcode.com/u/vedvishwakarma/).
"""

    response = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role":"system",
                "content":system_prompt
            },
            {
                "role":"user",
                "content":question
            }
        ]
    )

    return response.choices[0].message.content
def parse_resume(resume_text):
    system_prompt = f"""
    You are an expert resume parser.

    Extract information from the resume based on its meaning,
    not only based on exact section headings.

    Different resumes may use different headings.

    For example:
    - Experience
    - Professional Experience
    - Work History
    - Employment
    - Internships

    These may all contain relevant experience.

    Skills may also appear in the skills section, work experience,
    internships or projects.

    Return ONLY valid JSON matching this schema:

    {resume_schema}

    Important rules:

    1. Do not invent information.
    2. If a value is not available, return null.
    3. If a list has no information, return an empty list.
    4. Include internships inside experiences.
    5. Extract skills mentioned across the entire resume.
    """
    user_prompt = f"""
    Parse the following resume:

    {resume_text}
    """
    message_system={
        "role" : "system",
        "content" : system_prompt
    }
    message_user={
        "role" : "user",
        "content" : user_prompt
    }
    messages=[message_system, message_user]
    response_format={
        "type": "json_object"
    }
    response=client.chat.completions.create(model=model, messages=messages, response_format=response_format)
    raw_output = response.choices[0].message.content
    data = json.loads(raw_output)
    resume = Resume(**data)
    return resume

#pdf extraction
def read_pdf(file_path: Path):

    reader = PdfReader(file_path)

    text = ""

    for page in reader.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    return text

_cached_resume = None

def get_parsed_resume():
    global _cached_resume
    if _cached_resume is None:
        resume_path = Path(__file__).parent / "my_resume.pdf"
        if not resume_path.exists():
            resume_path = Path("my_resume.pdf")
        resume_text = read_pdf(resume_path)
        _cached_resume = parse_resume(resume_text)
        _cached_resume.name = "Ved Vishwakarma"
        _cached_resume.social_links = {
            "leetcode": "https://leetcode.com/u/vedvishwakarma/",
            "github": "https://github.com/vedvishwakarma9120",
            "linkedin": "https://linkedin.com/in/ved-vishwakarma",
            "resume": "https://drive.google.com/file/d/1i_jP_VszegML71Z2WiWHiUIwYhRsw5vE/preview"
        }
    return _cached_resume

from fastapi.staticfiles import StaticFiles

@app.post("/chat")
def chat(request: ChatRequest):
    try:
        resume = get_parsed_resume()
        return StreamingResponse(
            stream_ask_candidate(request.question, resume),
            media_type="text/plain"
        )
    except Exception as e:
        def error_gen():
            yield f"Error answering question: {str(e)}"
        return StreamingResponse(error_gen(), media_type="text/plain")

frontend_dir = Path(__file__).parent.parent / "frontend"
if frontend_dir.exists():
    app.mount("/", StaticFiles(directory=str(frontend_dir), html=True), name="frontend")




