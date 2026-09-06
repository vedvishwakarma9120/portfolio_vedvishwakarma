/* ============================================================
       EDIT YOUR INFO HERE — single source of truth
       ============================================================ */
    const CONFIG = {
      name: "Ved",
      fullName: "Ved Vishwakarma",
      initials: "VV",
      role: "Software Engineer & Full Stack Web Developer",
      email: "vedsharma870748@gmail.com",
      socials: { 
        linkedin: "https://linkedin.com/in/ved-vishwakarma", 
        github: "https://github.com/vedvishwakarma9120", 
        leetcode: "https://leetcode.com/u/vedvishwakarma/", 
        instagram: "#" 
      },
      resumeLink: "https://drive.google.com/file/d/1i_jP_VszegML71Z2WiWHiUIwYhRsw5vE/preview",
      resumeDownload: "https://drive.google.com/uc?export=download&id=1i_jP_VszegML71Z2WiWHiUIwYhRsw5vE",
      intro: "Passionate Computer Science Engineer and Full Stack Developer with hands-on experience in building real-world web applications using the MERN stack. Proficient in C++, Python, and JavaScript with a strong command of Data Structures & Algorithms. Skilled at designing scalable, user-focused products — from AI-integrated platforms to automation tools. Currently in the final year of B.Tech (CSE), driven by a passion for software engineering, problem-solving, and building impactful products.",
      story: "My journey is fueled by a passion for software engineering, problem-solving, and building impactful products. As a B.Tech Final Year Student at Kanpur Institute of Technology, I've focused on mastering full-stack web applications, competitive programming, and regular practice of Data Structures & Algorithms in C++ to solve complex challenges.",
      goals: "I'm dedicated to building scalable, user-focused products. I continuously learn new technologies by building real-world projects, diving deep into documentation, and acquiring industry-recognized certifications."
    };

    const SKILLS = {
      "Programming Languages": { color: "var(--amber)", items: [["C++", 90], ["Python", 82], ["JavaScript", 88]] },
      "Web Development": { color: "var(--lavender)", items: [["React.js", 86], ["Node.js", 80], ["Express.js", 78], ["MongoDB", 78], ["HTML & CSS", 95]] },
      "Computer Science": { color: "var(--mint)", items: [["DSA (in C++)", 85], ["OOP Concepts", 88], ["System Design", 70], ["Machine Learning", 65]] },
      "Tools & Technologies": { color: "var(--sky)", items: [["Git & GitHub", 92], ["VS Code", 95], ["Jupyter Notebook", 80]] }
    };

    const HOBBIES = [
      { icon: "💻", title: "Tinkering with Tech", desc: "Setting up weird dev environments, breaking my own machine, and fixing it again — for fun." },
      { icon: "🎮", title: "Gaming", desc: "Strategy games and the occasional late-night ranked match to unwind." },
      { icon: "🎵", title: "Music", desc: "Always coding with something playing in the background, depending on the bug." },
      { icon: "📚", title: "Reading", desc: "Tech blogs, sci-fi, and the odd book that has nothing to do with computers." },
      { icon: "📷", title: "Photography", desc: "Capturing little everyday moments that are easy to scroll past." },
      { icon: "✈️", title: "Exploring", desc: "New places, new street food, new perspective — even the next town over." }
    ];

    const PROJECTS = [
      { name: "ZuxterX", image: "zuxter-x.jpg", desc: "A sleek web platform built to showcase cutting-edge design and premium interactivity.", tech: ["React", "Tailwind CSS", "Vite"], github: "https://github.com/vedvishwakarma9120/ZuxterX.git", demo: "https://zuxter-x.vercel.app/" }
    ];

    const RINGING_PHONE_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path><path d="M2 8a5 5 0 0 0 0 8"></path><path d="M22 8a5 5 0 0 1 0 8"></path></svg>';
    const RESUME_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>';
    const BOT_SVG = '<svg class="bot-icon-svg" viewBox="0 0 100 100" fill="currentColor" style="width:16px;height:16px;vertical-align:middle;"><line x1="50" y1="35" x2="50" y2="21" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="18" r="5" fill="currentColor"/><path d="M37 35 V26 H22 V18" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="22" cy="16" r="5" fill="currentColor"/><path d="M63 35 V26 H78 V18" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="78" cy="16" r="5" fill="currentColor"/><rect x="14" y="46" width="6.5" height="17" rx="3.25" fill="currentColor"/><rect x="79.5" y="46" width="6.5" height="17" rx="3.25" fill="currentColor"/><path d="M28 35 H72 C77.5 35 82 39.5 82 45 V63 C82 68.5 77.5 73 72 73 H36 L24 83 V73 H28 C22.5 73 18 68.5 18 63 V45 C18 39.5 22.5 35 28 35 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="38.5" cy="52.5" r="4.5" fill="currentColor"/><circle cx="61.5" cy="52.5" r="4.5" fill="currentColor"/><line x1="42" y1="63.5" x2="58" y2="63.5" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>';

    const ICONS = [
      { id: "ai_bot", label: "Ask Ved AI", glyph: BOT_SVG, color: "var(--sky)" },
      { id: "about", label: "About Me", glyph: "AB", color: "var(--amber)" },
      { id: "education", label: "Education", glyph: "ED", color: "var(--mint)" },
      { id: "experience", label: "Experience", glyph: "XP", color: "var(--sky)" },
      { id: "skills", label: "My Skills", glyph: "<>", color: "var(--lavender)" },
      { id: "projects", label: "My Projects", glyph: "▣", color: "var(--sky)" },
      { id: "cp", label: "Comp Programming", glyph: "CP", color: "var(--amber)" },
      { id: "certifications", label: "Certificates", glyph: "CR", color: "var(--amber)" },
      { id: "resume", label: "Resume", glyph: RESUME_SVG, color: "var(--lavender)" },
      { id: "contact", label: "Contact Me", glyph: RINGING_PHONE_SVG, color: "var(--coral)" }
    ];

    /* ============================================================
       AUDIO (Disabled by default to eliminate beeping sounds)
       ============================================================ */
    let audioCtx = null;
    let soundOn = false;
    function ensureAudio() {
      if (!soundOn) return null;
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === "suspended") audioCtx.resume();
        return audioCtx;
      } catch (e) { return null; }
    }
    function tone(freq, dur, type, vol, delay) {
      const ctx = ensureAudio();
      if (!ctx) return;
      const t0 = ctx.currentTime + (delay || 0);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type || "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(vol || 0.04, t0 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t0); osc.stop(t0 + dur + 0.02);
    }
    const sfx = {
      boot: () => { tone(440, .15, "sine", .05, 0); tone(660, .15, "sine", .05, .12); tone(880, .25, "sine", .06, .24); },
      open: () => { tone(700, .08, "triangle", .05, 0); tone(1000, .06, "triangle", .04, .05); },
      close: () => { tone(500, .08, "triangle", .04, 0); tone(280, .1, "triangle", .04, .06); },
      click: () => { tone(900, .04, "square", .025, 0); },
      shutdown: () => { tone(600, .2, "sawtooth", .05, 0); tone(300, .25, "sawtooth", .05, .15); tone(120, .4, "sawtooth", .06, .35); }
    };

    /* ============================================================
       BOOT SEQUENCE
       ============================================================ */
    const BOOT_LINES = [
      "[ OK ] Initializing kernel modules",
      "[ OK ] Mounting /dev/creativity",
      "[ OK ] Loading skills.dll",
      "[ OK ] Compiling ambition --release",
      "[ OK ] Starting render engine",
      "[ OK ] Calibrating curiosity sensors",
      "[ OK ] Welcome, " + CONFIG.name
    ];

    function runBootSequence() {
      document.getElementById("boot-name").textContent = CONFIG.name.toUpperCase();
      document.title = CONFIG.name + " — Portfolio OS";
      const logEl = document.getElementById("boot-log");
      const barEl = document.getElementById("boot-bar");
      const pctEl = document.getElementById("boot-pct");
      logEl.innerHTML = "";
      barEl.style.width = "0%";
      pctEl.textContent = "0%";

      const totalDuration = 2600;
      const stepDelay = totalDuration / BOOT_LINES.length;

      BOOT_LINES.forEach((line, i) => {
        setTimeout(() => {
          const div = document.createElement("div");
          div.innerHTML = '<span class="ok">[ OK ]</span>' + line.replace("[ OK ] ", "");
          logEl.appendChild(div);
          while (logEl.children.length > 5) logEl.removeChild(logEl.firstChild);
          const pct = Math.round(((i + 1) / BOOT_LINES.length) * 100);
          barEl.style.width = pct + "%";
          pctEl.textContent = pct + "%";
        }, i * stepDelay);
      });

      setTimeout(() => { try { sfx.boot(); } catch (e) { } }, 80);

      setTimeout(() => {
        const boot = document.getElementById("boot-screen");
        boot.classList.add("fade-out");
        setTimeout(() => {
          boot.style.display = "none";
          const desktop = document.getElementById("desktop");
          desktop.classList.add("visible");
          buildIcons();
          restartClock();
        }, 620);
      }, totalDuration + 350);
    }

    /* ============================================================
       DESKTOP ICONS
       ============================================================ */
    function buildIcons() {
      const wrap = document.getElementById("icons");
      wrap.innerHTML = "";
      ICONS.forEach((ic, i) => {
        const btn = document.createElement("button");
        btn.className = "icon-btn";
        btn.style.animationDelay = (i * 0.08) + "s";
        btn.setAttribute("aria-label", "Open " + ic.label);

        let iconContent = '';
        if (ic.img) {
          iconContent = '<img src="' + ic.img + '" alt="" class="desktop-icon-img" />';
        } else {
          iconContent =
            '<span class="folder-shape" style="--c:' + ic.color + '">' +
            '<span class="folder-glyph">' + ic.glyph + '</span>' +
            '</span>';
        }

        btn.innerHTML = iconContent + '<span class="icon-label">' + ic.label + '</span>';
        btn.addEventListener("click", () => { try { sfx.click(); } catch (e) { } openWindow(ic.id); });
        wrap.appendChild(btn);
      });
    }

    /* ============================================================
       WINDOW MANAGER
       ============================================================ */
    const openWindows = {}; // id -> {el, trayEl, maximized, prevRect}
    let zCounter = 20;
    let cascadeIndex = 0;

    const WINDOW_DEFS = {
      ai_bot: { title: "Ved AI Assistant", glyph: BOT_SVG, color: "var(--sky)", w: 520, h: 580, render: renderAiChat },
      about: { title: "About Me", glyph: "AB", color: "var(--amber)", w: 680, h: 420, render: renderAbout },
      education: { title: "Education", glyph: "ED", color: "var(--mint)", w: 640, h: 380, render: renderEducation },
      experience: { title: "Experience", glyph: "XP", color: "var(--sky)", w: 720, h: 480, render: renderExperience },
      skills: { title: "My Skills", glyph: "<>", color: "var(--lavender)", w: 680, h: 480, render: renderSkills },
      projects: { title: "My Projects", glyph: "▣", color: "var(--sky)", w: 760, h: 520, render: renderProjects },
      cp: { title: "Comp Programming", glyph: "CP", color: "var(--amber)", w: 440, h: 280, render: renderCP },
      certifications: { title: "Certifications", glyph: "CR", color: "var(--amber)", w: 640, h: 380, render: renderCertifications },
      resume: { title: "My Resume", glyph: RESUME_SVG, color: "var(--lavender)", w: 740, h: 620, render: renderResume },
      contact: { title: "Contact Me", glyph: RINGING_PHONE_SVG, color: "var(--coral)", w: 680, h: 460, render: renderContact }
    };

    function updateAiBotFloatVisibility() {
      const floatEl = document.getElementById("ai-bot-float");
      if (!floatEl) return;
      const botWin = openWindows["ai_bot"];
      if (botWin && !botWin.el.classList.contains("minimized")) {
        floatEl.classList.add("bot-hidden");
      } else {
        floatEl.classList.remove("bot-hidden");
      }
    }

    function calculateAnchorPosition(anchorEl, w, h) {
      if (!anchorEl) return null;
      const rect = anchorEl.getBoundingClientRect();
      let targetLeft = rect.right - w;
      let targetTop = rect.bottom - h;
      
      // If the bot is near left edge, align left
      if (rect.left < w * 0.45) {
        targetLeft = rect.left;
      }
      // If the bot is near top edge, align top
      if (rect.top < h * 0.45) {
        targetTop = rect.top;
      }

      const maxLeft = Math.max(12, window.innerWidth - w - 12);
      const maxTop = Math.max(12, window.innerHeight - h - 68); // above taskbar

      targetLeft = Math.max(12, Math.min(targetLeft, maxLeft));
      targetTop = Math.max(12, Math.min(targetTop, maxTop));
      return { left: targetLeft, top: targetTop };
    }

    function openWindow(id, anchorEl) {
      if (openWindows[id]) {
        const w = openWindows[id];
        if (w.el.classList.contains("minimized")) restoreWindow(id, anchorEl);
        focusWindow(id);
        if (id === "ai_bot") updateAiBotFloatVisibility();
        return;
      }
      const def = WINDOW_DEFS[id];
      const el = document.createElement("section");
      el.className = "window opening";
      el.setAttribute("role", "dialog");
      el.setAttribute("aria-label", def.title);

      const isMobile = window.innerWidth <= 760;
      const w = Math.min(def.w, window.innerWidth - 24);
      const h = Math.min(def.h, window.innerHeight - 140);
      if (!isMobile) {
        let pos = null;
        if (id === "ai_bot") {
          const floatEl = anchorEl || document.getElementById("ai-bot-float");
          pos = calculateAnchorPosition(floatEl, w, h);
        }
        if (pos) {
          el.style.width = w + "px";
          el.style.height = h + "px";
          el.style.left = pos.left + "px";
          el.style.top = pos.top + "px";
        } else {
          const offset = (cascadeIndex % 5) * 28;
          el.style.width = w + "px";
          el.style.height = h + "px";
          el.style.left = (60 + offset) + "px";
          el.style.top = (40 + offset) + "px";
        }
      }
      cascadeIndex++;

      el.innerHTML =
        '<div class="win-titlebar" data-handle>' +
        '<span class="win-icon-chip" style="background:color-mix(in srgb, ' + def.color + ' 22%, transparent);color:' + def.color + '">' + def.glyph + '</span>' +
        '<span class="win-title">' + def.title + '</span>' +
        '<div class="win-controls">' +
        '<button class="win-btn min-btn" aria-label="Minimize">–</button>' +
        '<button class="win-btn max-btn" aria-label="Maximize">▢</button>' +
        '<button class="win-btn close-btn" aria-label="Close">×</button>' +
        '</div>' +
        '</div>' +
        '<div class="win-body" style="' + (id === 'ai_bot' ? 'padding:0;' : '') + '">' + def.render() + '</div>';

      document.getElementById("windows-layer").appendChild(el);
      openWindows[id] = { el, maximized: false, prevRect: null };

      el.querySelector(".min-btn").addEventListener("click", () => minimizeWindow(id));
      el.querySelector(".max-btn").addEventListener("click", () => toggleMaximize(id));
      el.querySelector(".close-btn").addEventListener("click", () => closeWindow(id));
      el.addEventListener("pointerdown", () => focusWindow(id));
      makeDraggable(el, el.querySelector("[data-handle]"), id);

      addTrayItem(id, def);
      focusWindow(id);
      try { sfx.open(); } catch (e) { }

      if (id === "skills") setTimeout(() => animateSkillBars(el), 80);
      if (id === "contact") wireContactForm(el);
      if (id === "resume") setTimeout(() => toggleMaximize(id), 50);
      if (id === "ai_bot") {
        setTimeout(() => wireAiChat(el), 40);
        updateAiBotFloatVisibility();
      }

      setTimeout(() => el.classList.remove("opening"), 320);
    }

    function focusWindow(id) {
      Object.keys(openWindows).forEach(k => {
        openWindows[k].el.classList.toggle("active", k === id);
        const tray = document.getElementById("tray-" + k);
        if (tray) tray.classList.toggle("active", k === id);
      });
      const w = openWindows[id];
      if (w) { zCounter++; w.el.style.zIndex = zCounter; }
    }

    function minimizeWindow(id) {
      const w = openWindows[id];
      if (!w) return;
      w.el.classList.add("minimized");
      const tray = document.getElementById("tray-" + id);
      if (tray) tray.classList.remove("active");
      if (id === "ai_bot") updateAiBotFloatVisibility();
    }

    function restoreWindow(id, anchorEl) {
      const w = openWindows[id];
      if (!w) return;
      w.el.classList.remove("minimized");
      if (id === "ai_bot" && !w.maximized && window.innerWidth > 760) {
        const floatEl = anchorEl || document.getElementById("ai-bot-float");
        const winW = parseInt(w.el.style.width) || 520;
        const winH = parseInt(w.el.style.height) || 580;
        const pos = calculateAnchorPosition(floatEl, winW, winH);
        if (pos) {
          w.el.style.left = pos.left + "px";
          w.el.style.top = pos.top + "px";
        }
      }
      focusWindow(id);
      if (id === "ai_bot") updateAiBotFloatVisibility();
    }

    function toggleMaximize(id) {
      const w = openWindows[id];
      if (!w) return;
      if (!w.maximized) {
        w.prevRect = { left: w.el.style.left, top: w.el.style.top, width: w.el.style.width, height: w.el.style.height };
        w.el.classList.add("maximized");
        w.maximized = true;
      } else {
        w.el.classList.remove("maximized");
        if (w.prevRect) {
          w.el.style.left = w.prevRect.left;
          w.el.style.top = w.prevRect.top;
          w.el.style.width = w.prevRect.width;
          w.el.style.height = w.prevRect.height;
        }
        w.maximized = false;
      }
      focusWindow(id);
    }

    function closeWindow(id) {
      const w = openWindows[id];
      if (!w) return;
      w.el.classList.add("closing");
      try { sfx.close(); } catch (e) { }
      setTimeout(() => {
        w.el.remove();
        const tray = document.getElementById("tray-" + id);
        if (tray) tray.remove();
        delete openWindows[id];
        if (id === "ai_bot") updateAiBotFloatVisibility();
      }, 190);
    }

    function addTrayItem(id, def) {
      const tray = document.getElementById("tray");
      const item = document.createElement("button");
      item.className = "tray-item";
      item.id = "tray-" + id;
      item.innerHTML = '<span style="color:' + def.color + '">' + def.glyph + '</span><span class="label">' + def.title + '</span><span class="tray-close" aria-label="Close">×</span>';

      item.addEventListener("click", () => {
        const w = openWindows[id];
        if (!w) return;
        if (w.el.classList.contains("minimized")) { restoreWindow(id); return; }
        focusWindow(id);
      });

      const closeBtn = item.querySelector(".tray-close");
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        try { sfx.click(); } catch (err) { }
        closeWindow(id);
      });

      tray.appendChild(item);
    }

    /* ----- Dragging (Pointer Events: mouse + touch) ----- */
    function makeDraggable(el, handle, id) {
      let dragging = false, startX, startY, startLeft, startTop;
      handle.addEventListener("pointerdown", (e) => {
        if (e.target.closest(".win-btn")) return;
        if (window.innerWidth <= 760) return;
        if (el.classList.contains("maximized")) return;
        dragging = true;
        startX = e.clientX; startY = e.clientY;
        const rect = el.getBoundingClientRect();
        startLeft = rect.left; startTop = rect.top;
        focusWindow(id);
        try { handle.setPointerCapture(e.pointerId); } catch (err) { }
      });
      handle.addEventListener("pointermove", (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX, dy = e.clientY - startY;
        let newTop = startTop + dy;
        if (newTop < 0) newTop = 0;
        el.style.left = (startLeft + dx) + "px";
        el.style.top = newTop + "px";
      });
      ["pointerup", "pointercancel"].forEach(evt => handle.addEventListener(evt, () => { dragging = false; }));
    }

    /* ============================================================
       WINDOW CONTENT RENDERERS
       ============================================================ */
    function renderAbout() {
      return (
        '<div class="win-section about-grid">' +
        '<div class="avatar-wrap">' +
        '<div class="avatar-ring"><div class="avatar"><img src="pfp.jpg" alt="' + CONFIG.name + '" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="this.style.display=\'none\'; this.parentElement.innerHTML=\'' + CONFIG.initials + '\'" /></div></div>' +
        '<div class="avatar-caption">' + CONFIG.role + '</div>' +
        '</div>' +
        '<div class="about-text">' +
        '<h3>Hey, I\'m ' + CONFIG.fullName + ' <span class="wave">👋</span></h3>' +
        '<p>' + CONFIG.intro + '</p>' +
        '<h4>My Story</h4><p>' + CONFIG.story + '</p>' +
        '<h4>Where I\'m Headed</h4><p>' + CONFIG.goals + '</p>' +
        '</div>' +
        '</div>'
      );
    }

    function renderEducation() {
      return (
        '<div class="win-section">' +
        '<h3>Education</h3>' +
        '<div style="border-left:2px solid var(--amber);padding-left:16px;margin:16px 0;">' +
        '<h4 style="margin:0 0 4px;font-size:1rem;color:var(--text);">B.Tech Computer Science Engineering (CSE)</h4>' +
        '<div style="font-size:.85rem;color:var(--amber);font-family:var(--font-display);margin-bottom:6px;">2023 – 2027</div>' +
        '<p style="margin:0;font-size:.9rem;color:var(--text-dim);">Kanpur Institute of Technology, Kanpur, Uttar Pradesh</p>' +
        '</div>' +
        '</div>'
      );
    }

    function renderCP() {
      return (
        '<div class="win-section" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px;padding:10px 0;">' +
        '<div style="width:100px;height:100px;border-radius:16px;background:rgba(255,255,255,0.03);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;transition:transform .2s ease;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">' +
        '<img src="leetcode-logo.png" alt="LeetCode" style="max-width:80%;max-height:80%;object-fit:contain;" />' +
        '</div>' +
        '<a href="https://leetcode.com/u/vedvishwakarma/" target="_blank" rel="noopener" class="project-link demo" style="width:180px;text-align:center;padding:10px 0;font-weight:700;text-decoration:none;">LeetCode Profile</a>' +
        '</div>'
      );
    }

    function renderExperience() {
      return (
        '<div class="win-section">' +
        '<h3>Professional Experience</h3>' +
        '<div style="margin:16px 0;">' +
        '<div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;">' +
        '<h4 style="margin:0;font-size:1rem;color:var(--text);">Full Stack Developer (Self-Initiated Projects)</h4>' +
        '<span style="font-size:.78rem;color:var(--sky);font-family:var(--font-display);">2025 – Present</span>' +
        '</div>' +
        '<div style="font-size:.84rem;color:var(--text-dim);margin:4px 0 12px;">B.Tech Final Year Student, Kanpur Institute of Technology</div>' +
        '<ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:.88rem;color:var(--text-dim);line-height:1.5;">' +
        '<li>Built and deployed multiple full-stack web applications independently, applying MERN stack and Flask/Python backends.</li>' +
        '<li>Practiced Data Structures & Algorithms regularly in C++ on competitive programming platforms to strengthen problem-solving.</li>' +
        '<li>Maintained all projects using Git and GitHub, following structured version control practices including branching and commit documentation.</li>' +
        '<li>Continuously learning new technologies by building real projects, reading documentation, and completing industry certifications.</li>' +
        '</ul>' +
        '</div>' +
        '</div>'
      );
    }

    function renderCertifications() {
      return (
        '<div class="win-section">' +
        '<h3>Awards & Certifications</h3>' +
        '<ul style="list-style-type:none;padding:0;margin:16px 0;display:flex;flex-direction:column;gap:14px;">' +
        '<li style="display:flex;align-items:start;gap:10px;">' +
        '<span style="color:var(--lavender);font-size:1.1rem;">🏆</span>' +
        '<div>' +
        '<div style="font-weight:600;font-size:.92rem;">MERN Stack Web Development</div>' +
        '<div style="font-size:.78rem;color:var(--text-dim);">Udemy (2025)</div>' +
        '</div>' +
        '</li>' +
        '<li style="display:flex;align-items:start;gap:10px;">' +
        '<span style="color:var(--lavender);font-size:1.1rem;">🏆</span>' +
        '<div>' +
        '<div style="font-weight:600;font-size:.92rem;">EA Sports Game Development Program</div>' +
        '<div style="font-size:.78rem;color:var(--text-dim);">Electronic Arts / Forage (2026)</div>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>'
      );
    }

    function renderSkills() {
      let html = '<div class="win-section"><div class="skill-cats">';
      Object.keys(SKILLS).forEach(cat => {
        const data = SKILLS[cat];
        html += '<div class="skill-cat">' +
          '<div class="skill-cat-title"><span class="skill-cat-dot" style="background:' + data.color + '"></span>' + cat + '</div>';
        data.items.forEach(([name, pct]) => {
          html += '<div class="skill-row">' +
            '<div class="skill-row-top"><span>' + name + '</span><span>' + pct + '%</span></div>' +
            '<div class="skill-bar-track"><div class="skill-bar-fill" data-target="' + pct + '" style="background:' + data.color + '"></div></div>' +
            '</div>';
        });
        html += '</div>';
      });
      html += '</div></div>';
      return html;
    }
    function animateSkillBars(windowEl) {
      const bars = windowEl.querySelectorAll(".skill-bar-fill");
      bars.forEach(bar => { requestAnimationFrame(() => { bar.style.width = bar.dataset.target + "%"; }); });
    }

    function renderHobbies() {
      let html = '<div class="win-section"><h3>What I do for fun</h3><p>A few things outside the code editor.</p><div class="hobby-grid">';
      HOBBIES.forEach(h => {
        html += '<div class="hobby-card"><span class="hobby-icon">' + h.icon + '</span><h5>' + h.title + '</h5><p>' + h.desc + '</p></div>';
      });
      html += '</div></div>';
      return html;
    }

    function renderProjects() {
      let html = '<div class="win-section"><h3>Things I\'ve built</h3><p>A few projects worth a closer look.</p><div class="project-grid">';
      PROJECTS.forEach(p => {
        let thumbHtml = '';
        if (p.image) {
          thumbHtml = '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;" />';
        } else {
          thumbHtml = p.icon;
        }
        html += '<div class="project-card">' +
          '<div class="project-thumb" style="--p1:' + (p.p1 || '#14131f') + ';--p2:' + (p.p2 || '#1d1b2a') + '">' + thumbHtml + '</div>' +
          '<div class="project-info">' +
          '<h5>' + p.name + '</h5>' +
          '<p>' + p.desc + '</p>' +
          '<div class="tech-tags">' + p.tech.map(t => '<span class="tech-tag">' + t + '</span>').join("") + '</div>' +
          '<div class="project-links">' +
          '<a class="project-link" href="' + p.github + '" target="_blank" rel="noopener">GitHub</a>' +
          '<a class="project-link demo" href="' + p.demo + '" target="_blank" rel="noopener">Live Demo</a>' +
          '</div>' +
          '</div>' +
          '</div>';
      });
      html += '</div></div>';
      return html;
    }

    function renderResume() {
      const GDRIVE_FILE_ID = '1i_jP_VszegML71Z2WiWHiUIwYhRsw5vE';
      const previewUrl = 'https://drive.google.com/file/d/' + GDRIVE_FILE_ID + '/preview';
      const downloadUrl = 'https://drive.google.com/uc?export=download&id=' + GDRIVE_FILE_ID;

      return (
        '<div class="win-section" style="display:flex; flex-direction:column; height:100%;">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px; flex:0 0 auto;">' +
        '<div>' +
        '<h3 style="margin:0;">My Resume</h3>' +
        '<p style="margin:4px 0 0; font-size:.84rem; color:var(--text-dim);">View or download my latest resume below.</p>' +
        '</div>' +
        '<a href="' + downloadUrl + '" target="_blank" rel="noopener" class="project-link demo" style="width:auto; padding:10px 24px; font-weight:700; display:inline-flex; align-items:center; gap:8px; text-decoration:none;">' +
        '<span>📥</span> Download PDF' +
        '</a>' +
        '</div>' +
        '<iframe src="' + previewUrl + '" style="width:100%; flex:1 1 auto; min-height:300px; border:none; border-radius:10px; background:white;" allow="autoplay"></iframe>' +
        '</div>'
      );
    }

    function renderContact() {
      return (
        '<div class="win-section"><div class="contact-wrap">' +
        '<form class="contact-form" data-contact-form>' +
        '<div class="field"><label for="cf-name">Name</label><input id="cf-name" type="text" required placeholder="Your name" /></div>' +
        '<div class="field"><label for="cf-email">Email</label><input id="cf-email" type="email" required placeholder="you@example.com" /></div>' +
        '<div class="field"><label for="cf-msg">Message</label><textarea id="cf-msg" rows="4" required placeholder="Say hello..."></textarea></div>' +
        '<button type="submit" class="submit-btn">Send Message</button>' +
        '</form>' +
        '<div class="contact-side">' +
        '<div><h4 style="margin:0 0 8px;color:var(--coral);font-size:.78rem;text-transform:uppercase;letter-spacing:.07em;">Reach me</h4>' +
        '<div class="contact-email">' + CONFIG.email + '</div></div>' +
        '<div><h4 style="margin:0 0 8px;color:var(--coral);font-size:.78rem;text-transform:uppercase;letter-spacing:.07em;">Elsewhere</h4>' +
        '<div class="social-row">' +
        '<a class="social-btn" href="' + CONFIG.socials.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="linkedin-icon.png" alt="LinkedIn" style="width:100%;height:100%;object-fit:cover;border-radius:9px;" /></a>' +
        '<a class="social-btn" href="' + CONFIG.socials.github + '" target="_blank" rel="noopener" aria-label="GitHub"><img src="github-icon.png" alt="GitHub" style="width:100%;height:100%;object-fit:cover;border-radius:9px;" /></a>' +
        '<a class="social-btn" href="mailto:' + CONFIG.email + '" aria-label="Email"><img src="gmail-icon.png" alt="Gmail" style="width:100%;height:100%;object-fit:cover;border-radius:9px;" /></a>' +
        '</div></div>' +
        '</div>' +
        '</div></div>'
      );
    }

    function wireContactForm(windowEl) {
      const form = windowEl.querySelector("[data-contact-form]");
      if (!form) return;
      const submitBtn = form.querySelector(".submit-btn");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        const nameVal = form.querySelector("#cf-name").value;
        const emailVal = form.querySelector("#cf-email").value;
        const msgVal = form.querySelector("#cf-msg").value;

        fetch("https://formsubmit.co/ajax/aa5fa2ffec7929c41222b00fd31b3b72", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: "New Message from Portfolio: " + nameVal,
            _template: "table",
            name: nameVal,
            email: emailVal,
            message: msgVal
          })
        })
          .then(response => response.json())
          .then(data => {
            const wrap = form.parentElement;
            form.style.display = "none";
            const success = document.createElement("div");
            success.className = "success-panel";
            success.innerHTML = '<div class="success-check">✓</div><h5 style="margin:0;">Message sent!</h5><p style="color:var(--text-dim);font-size:.82rem;margin:0;">Thanks for reaching out — I\'ll get back to you soon.</p>';
            wrap.insertBefore(success, form);
          })
          .catch(err => {
            console.error(err);
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            alert("Oops! Something went wrong. Please try again or email me directly at " + CONFIG.email);
          });
      });
    }

    function renderAiChat() {
      return (
        '<div class="ai-chat-window-body">' +
        '<div class="ai-chat-header-bar">' +
        '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div class="ai-msg-avatar bot-av">' + BOT_SVG + '</div>' +
        '<div>' +
        '<div style="font-weight:700;font-size:.88rem;color:var(--text);">Ved AI Assistant</div>' +
        '<div style="font-size:.74rem;color:var(--text-dim);">Trained on Ved\'s verified resume & portfolio</div>' +
        '</div>' +
        '</div>' +
        '<div class="ai-chat-status-badge"><span>●</span> Online</div>' +
        '</div>' +
        '<div class="ai-chat-messages-container" id="ai-messages-list">' +
        '<div class="ai-msg-row bot">' +
        '<div class="ai-msg-avatar bot-av">' + BOT_SVG + '</div>' +
        '<div class="ai-msg-bubble">' +
        '<p>👋 Hello! I am <strong>Ved\'s AI Assistant</strong>.</p>' +
        '<p>Ask me anything about Ved\'s skills, projects, educational background, or why you should hire him!</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ai-chat-chips-wrap">' +
        '<button class="ai-chip-btn" data-query="What are Ved\'s core technical skills?">⚡ Core Skills</button>' +
        '<button class="ai-chip-btn" data-query="Tell me about Ved\'s featured projects.">🚀 Projects</button>' +
        '<button class="ai-chip-btn" data-query="What is Ved\'s education and college?">🎓 Education</button>' +
        '<button class="ai-chip-btn" data-query="Why should I hire Ved for full-stack engineering?">💼 Why hire Ved?</button>' +
        '</div>' +
        '<form class="ai-chat-input-area" id="ai-chat-form">' +
        '<input type="text" class="ai-chat-input" id="ai-chat-input" placeholder="Ask anything about Ved..." autocomplete="off" />' +
        '<button type="submit" class="ai-chat-send-btn" id="ai-chat-send-btn" aria-label="Send">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>' +
        '</button>' +
        '</form>' +
        '</div>'
      );
    }

    function wireAiChat(winEl) {
      const form = winEl.querySelector("#ai-chat-form");
      const input = winEl.querySelector("#ai-chat-input");
      const list = winEl.querySelector("#ai-messages-list");
      const sendBtn = winEl.querySelector("#ai-chat-send-btn");
      if (!form || !input || !list) return;

      setTimeout(() => input.focus(), 150);

      // Suggestions chips click
      winEl.querySelectorAll(".ai-chip-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const q = btn.dataset.query;
          input.value = q;
          sendMessage(q);
        });
      });

      function formatMarkdown(text) {
        if (!text) return '';
        let escaped = text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");

        // Convert [Label](url) into clean clickable links
        escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+|mailto:[^\s\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="ai-chat-link">$1 ↗</a>');

        // Convert bare URLs that aren't inside tags
        escaped = escaped.replace(/(^|[\s(])(https?:\/\/[^\s\)<>]+)/g, '$1<a href="$2" target="_blank" rel="noopener" class="ai-chat-link">$2 ↗</a>');

        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        escaped = escaped.replace(/\*(.*?)\*/g, '<em>$1</em>');
        escaped = escaped.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.08);padding:2px 5px;border-radius:4px;font-family:var(--font-display);font-size:.82rem;">$1</code>');
        const lines = escaped.split("\n");
        let html = '';
        let inList = false;
        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
            if (!inList) { html += '<ul>'; inList = true; }
            html += '<li>' + trimmed.replace(/^[-*•]\s*/, '') + '</li>';
          } else if (trimmed.match(/^\d+\.\s/)) {
            if (!inList) { html += '<ul>'; inList = true; }
            html += '<li>' + trimmed.replace(/^\d+\.\s/, '') + '</li>';
          } else {
            if (inList) { html += '</ul>'; inList = false; }
            if (trimmed.length > 0) {
              html += '<p>' + trimmed + '</p>';
            }
          }
        });
        if (inList) html += '</ul>';
        return html;
      }

      function scrollBottom() {
        list.scrollTop = list.scrollHeight;
      }

      function appendUserMessage(text) {
        const row = document.createElement("div");
        row.className = "ai-msg-row user";
        row.innerHTML =
          '<div class="ai-msg-avatar user-av">YOU</div>' +
          '<div class="ai-msg-bubble"><p>' + text.replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</p></div>';
        list.appendChild(row);
        scrollBottom();
      }

      function appendBotMessage(text) {
        const row = document.createElement("div");
        row.className = "ai-msg-row bot";
        row.innerHTML =
          '<div class="ai-msg-avatar bot-av">' + BOT_SVG + '</div>' +
          '<div class="ai-msg-bubble">' + formatMarkdown(text) + '</div>';
        list.appendChild(row);
        scrollBottom();
      }

      function showTypingIndicator() {
        const row = document.createElement("div");
        row.className = "ai-msg-row bot typing-row";
        row.innerHTML =
          '<div class="ai-msg-avatar bot-av">' + BOT_SVG + '</div>' +
          '<div class="ai-msg-bubble">' +
          '<div class="ai-typing-indicator">' +
          '<div class="ai-typing-dot"></div>' +
          '<div class="ai-typing-dot"></div>' +
          '<div class="ai-typing-dot"></div>' +
          '</div>' +
          '</div>';
        list.appendChild(row);
        scrollBottom();
        return row;
      }

      function getLocalKnowledgeFallback(question) {
        return "Unable to reach the backend AI server. Please make sure the backend server is running to query Ved's verified resume details.";
      }

      async function sendMessage(questionText) {
        const text = (questionText || input.value).trim();
        if (!text) return;
        input.value = "";
        appendUserMessage(text);
        try { sfx.click(); } catch(e){}

        const typingEl = showTypingIndicator();
        const backendUrl = (window.location.protocol === "http:" || window.location.protocol === "https:") && !window.location.port.includes("5500")
          ? "/chat"
          : "http://localhost:8000/chat";
        try {
          const res = await fetch(backendUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: text })
          });
          if (!res.ok) throw new Error("Server status: " + res.status);

          // Remove typing indicator and create streaming message bubble
          if (typingEl && typingEl.parentNode) typingEl.remove();

          const botRow = document.createElement("div");
          botRow.className = "ai-msg-row bot";
          botRow.innerHTML =
            '<div class="ai-msg-avatar bot-av">' + BOT_SVG + '</div>' +
            '<div class="ai-msg-bubble"></div>';
          const bubbleEl = botRow.querySelector(".ai-msg-bubble");
          list.appendChild(botRow);
          scrollBottom();

          const reader = res.body.getReader();
          const decoder = new TextDecoder();
          let fullText = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            fullText += chunk;
            bubbleEl.innerHTML = formatMarkdown(fullText);
            scrollBottom();
          }

          if (!fullText.trim()) {
            bubbleEl.innerHTML = formatMarkdown("I don't have enough information to answer that.");
          }
        } catch (err) {
          console.warn("Backend unavailable, using fallback knowledge base:", err);
          if (typingEl && typingEl.parentNode) typingEl.remove();
          const fallback = getLocalKnowledgeFallback(text);
          appendBotMessage(fallback);
        } finally {
          sendBtn.disabled = false;
          input.focus();
        }
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendMessage();
      });
    }

    /* Floating Bot Launcher & Continuous Animated Prompts */
    const PROMPT_MESSAGES = [
      "Ask anything about Ved ✨",
      "Ask about Ved's skills & projects 🚀",
      "Ask about education & experience 🎓",
      "Why should you hire Ved? 💡"
    ];
    let promptMsgIdx = 0;
    const botBubbleText = document.getElementById("bot-bubble-text");
    if (botBubbleText) {
      setInterval(() => {
        promptMsgIdx = (promptMsgIdx + 1) % PROMPT_MESSAGES.length;
        botBubbleText.style.opacity = '0';
        setTimeout(() => {
          botBubbleText.textContent = PROMPT_MESSAGES[promptMsgIdx];
          botBubbleText.style.opacity = '1';
        }, 300);
      }, 4000);
    }

    /* Draggable Floating Bot Launcher (Drag anywhere on entire screen) */
    const aiBotFloat = document.getElementById("ai-bot-float");
    if (aiBotFloat) {
      let isDragging = false;
      let startX = 0, startY = 0;
      let initialLeft = 0, initialTop = 0;
      let hasMoved = false;

      aiBotFloat.addEventListener("pointerdown", (e) => {
        if (e.button !== 0 && e.pointerType === "mouse") return;
        
        const rect = aiBotFloat.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;
        
        aiBotFloat.style.right = "auto";
        aiBotFloat.style.bottom = "auto";
        aiBotFloat.style.left = initialLeft + "px";
        aiBotFloat.style.top = initialTop + "px";

        startX = e.clientX;
        startY = e.clientY;
        hasMoved = false;
        isDragging = true;

        aiBotFloat.classList.add("is-dragging");
        try {
          aiBotFloat.setPointerCapture(e.pointerId);
        } catch (err) {}
      });

      aiBotFloat.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
          hasMoved = true;
        }

        if (hasMoved) {
          const floatW = aiBotFloat.offsetWidth || 60;
          const floatH = aiBotFloat.offsetHeight || 60;
          const maxLeft = Math.max(8, window.innerWidth - floatW - 8);
          const maxTop = Math.max(8, window.innerHeight - floatH - 8);

          let newLeft = Math.min(Math.max(8, initialLeft + dx), maxLeft);
          let newTop = Math.min(Math.max(8, initialTop + dy), maxTop);

          aiBotFloat.style.left = newLeft + "px";
          aiBotFloat.style.top = newTop + "px";
        }
      });

      const handlePointerUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        aiBotFloat.classList.remove("is-dragging");
        try {
          aiBotFloat.releasePointerCapture(e.pointerId);
        } catch (err) {}

        // If it was just a tap/click without dragging, open window right where bot is
        if (!hasMoved) {
          try { sfx.click(); } catch (e) {}
          openWindow("ai_bot", aiBotFloat);
        }
      };

      aiBotFloat.addEventListener("pointerup", handlePointerUp);
      aiBotFloat.addEventListener("pointercancel", (e) => {
        isDragging = false;
        aiBotFloat.classList.remove("is-dragging");
      });

      aiBotFloat.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          try { sfx.click(); } catch (e) {}
          openWindow("ai_bot", aiBotFloat);
        }
      });
    }

    /* ============================================================
       TASKBAR: clock, theme, wallpaper, sound, power
       ============================================================ */
    let clockInterval = null;
    function restartClock() {
      if (clockInterval) clearInterval(clockInterval);
      function tick() {
        const now = new Date();
        document.getElementById("clock-time").textContent =
          now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        document.getElementById("clock-date").textContent =
          now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
      }
      tick();
      clockInterval = setInterval(tick, 1000 * 30);
    }

    document.getElementById("theme-toggle").addEventListener("click", (e) => {
      const html = document.documentElement;
      const isLight = html.getAttribute("data-theme") === "light";
      html.setAttribute("data-theme", isLight ? "dark" : "light");
      e.currentTarget.textContent = isLight ? "🌙" : "☀️";
      try { sfx.click(); } catch (err) { }
    });

    document.getElementById("sound-toggle").addEventListener("click", (e) => {
      soundOn = !soundOn;
      e.currentTarget.textContent = soundOn ? "🔊" : "🔇";
      if (soundOn) { try { sfx.click(); } catch (err) { } }
    });

    const wpPicker = document.getElementById("wallpaper-picker");
    document.getElementById("wallpaper-btn").addEventListener("click", () => {
      wpPicker.classList.toggle("hidden");
    });
    wpPicker.querySelectorAll(".wp-swatch").forEach(sw => {
      sw.addEventListener("click", () => {
        const target = sw.dataset.wp;
        const wallpaperEl = document.getElementById("wallpaper");
        wallpaperEl.className = target;
        wpPicker.querySelectorAll(".wp-swatch").forEach(s => s.classList.remove("selected"));
        sw.classList.add("selected");
        try { sfx.click(); } catch (err) { }
      });
    });
    document.addEventListener("click", (e) => {
      if (!wpPicker.contains(e.target) && e.target.id !== "wallpaper-btn") {
        wpPicker.classList.add("hidden");
      }
    });

    /* ----- Power / Shutdown flow ----- */
    const shutdownBackdrop = document.getElementById("shutdown-modal-backdrop");
    document.getElementById("power-btn").addEventListener("click", () => {
      shutdownBackdrop.classList.add("show");
    });
    document.getElementById("cancel-shutdown").addEventListener("click", () => {
      shutdownBackdrop.classList.remove("show");
    });
    document.getElementById("confirm-shutdown").addEventListener("click", () => {
      shutdownBackdrop.classList.remove("show");
      doShutdown();
    });
    shutdownBackdrop.addEventListener("click", (e) => {
      if (e.target === shutdownBackdrop) shutdownBackdrop.classList.remove("show");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && shutdownBackdrop.classList.contains("show")) {
        shutdownBackdrop.classList.remove("show");
      }
    });

    function doShutdown() {
      localStorage.setItem("portfolio_shutdown", "true");
      try { sfx.shutdown(); } catch (e) { }
      const desktop = document.getElementById("desktop");
      desktop.classList.add("shutting-down");
      if (clockInterval) clearInterval(clockInterval);
      setTimeout(() => {
        desktop.style.display = "none";
        const ty = document.getElementById("thankyou-screen");
        ty.classList.add("show");
      }, 560);
    }

    document.getElementById("restart-btn").addEventListener("click", () => {
      localStorage.removeItem("portfolio_shutdown");
      window.location.reload();
    });

    /* ============================================================
       BOOT
       ============================================================ */
    if (localStorage.getItem("portfolio_shutdown") === "true") {
      document.getElementById("boot-screen").style.display = "none";
      document.getElementById("desktop").style.display = "none";
      document.getElementById("thankyou-screen").classList.add("show");
    } else {
      runBootSequence();
    }
