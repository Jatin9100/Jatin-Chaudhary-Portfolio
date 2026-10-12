/* ============================================================
   Ghost character: dependency-free port of the Framer component
   "Ghost_Character_1" (Interactive Ghost). The untouched original
   is vendored next to this file in ./vendor/ for provenance; it is
   NOT loaded at runtime (it needs React and Framer's runtime, which
   this site does not have). This file keeps its maths exactly:
   wavy-cloth body paths, mood target tables, lerped facial morphing,
   eye tracking, float/sway physics, blink cycle.

   Local additions on top of the original props:
     blinkAt    timestamp (GhostCharacter.now()) for a one-off blink
     mood       + "joy"   (arched smiling eyes, no brows)
                + "think" (eyes look around)
     winkAt     timestamp for a single-eye wink
     winkEye    "left" | "right"
     tint       { color, amount 0..1 } body colour tint, eased in/out
     showGlow   honoured (original prop); enableChat honoured too
     trackRadius px radius for eye tracking around the character
                (0 = original behaviour: container bounds only)

   Only ONE instance may exist: the gradient/filter ids are fixed,
   exactly as in the original, so a second mount returns the first.
   Classic script (no modules) so it also works from file://.
   ============================================================ */
(function (root) {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";

  var MOODS = {
    neutral: { lEyeRot: 0, rEyeRot: 0, eyeScale: 1, mouthW: 10, mouthY: 118, mouthCurveT: 0, mouthCurveB: 0, mouthOp: 0, browY: 86, browAngle: 0, browCurve: 0, browOp: 0, eyeArch: 0, eyeY: 0 },
    happy:   { lEyeRot: 0, rEyeRot: 0, eyeScale: 1, mouthW: 22, mouthY: 116, mouthCurveT: 2, mouthCurveB: 14, mouthOp: 1, browY: 78, browAngle: -5, browCurve: -4, browOp: 1, eyeArch: 0, eyeY: 0 },
    sad:     { lEyeRot: -12, rEyeRot: 12, eyeScale: 0.9, mouthW: 16, mouthY: 122, mouthCurveT: -6, mouthCurveB: -2, mouthOp: 1, browY: 84, browAngle: -12, browCurve: -2, browOp: 1, eyeArch: 0, eyeY: 0 },
    excited: { lEyeRot: 0, rEyeRot: 0, eyeScale: 1.15, mouthW: 14, mouthY: 120, mouthCurveT: -10, mouthCurveB: 14, mouthOp: 1, browY: 74, browAngle: 0, browCurve: -6, browOp: 1, eyeArch: 0, eyeY: 0 },
    angry:   { lEyeRot: 18, rEyeRot: -18, eyeScale: 0.95, mouthW: 14, mouthY: 118, mouthCurveT: -3, mouthCurveB: 1, mouthOp: 1, browY: 88, browAngle: 18, browCurve: 2, browOp: 1, eyeArch: 0, eyeY: 0 },
    anxious: { lEyeRot: 0, rEyeRot: 0, eyeScale: 0.8, mouthW: 12, mouthY: 120, mouthCurveT: -2, mouthCurveB: 2, mouthOp: 1, browY: 80, browAngle: -4, browCurve: -1, browOp: 1, eyeArch: 0, eyeY: 0 },
    /* local: arched "smiling" eyes sitting a little higher than the mouth, no brows */
    joy:     { lEyeRot: 0, rEyeRot: 0, eyeScale: 1, mouthW: 24, mouthY: 118, mouthCurveT: 2, mouthCurveB: 16, mouthOp: 1, browY: 78, browAngle: 0, browCurve: 0, browOp: 0, eyeArch: 1, eyeY: -5 },
    /* local: small pursed mouth, one brow-ish tilt; eyes wander (see gaze below) */
    think:   { lEyeRot: 0, rEyeRot: 0, eyeScale: 0.95, mouthW: 8, mouthY: 120, mouthCurveT: 0, mouthCurveB: 2, mouthOp: 0.85, browY: 76, browAngle: -8, browCurve: -3, browOp: 1, eyeArch: 0, eyeY: 0 }
  };

  var DEFAULTS = {
    animationStyle: "smooth",
    mood: "neutral",
    colorTop: "#eaff5e", colorMiddle: "#a3e635", colorBottom: "#16a34a",
    colorBackTop: "#65a30d", colorBackBottom: "#14532d",
    faceColor: "#1A1025",
    showGlow: true, glowColor: "#eaff5e",
    bodyHeight: 170, floatingSpeed: 1, animatingSpeed: 1,
    interactiveEyes: true,
    enableChat: true,
    quotes: ["Boo!", "I'm a friendly ghost!", "Did I scare you?"],
    chatBgColor: "#ffffff", chatTextColor: "#000000",
    blinkAt: 0, winkAt: 0, winkEye: "right",
    tint: { color: "#ef4444", amount: 0 },
    trackRadius: 0
  };

  /* ---- colour helpers --------------------------------------------------- */
  function parseColor(c) {
    c = String(c || "").trim();
    var m;
    if ((m = /^#([0-9a-f]{3})$/i.exec(c))) {
      return [parseInt(m[1][0] + m[1][0], 16), parseInt(m[1][1] + m[1][1], 16), parseInt(m[1][2] + m[1][2], 16)];
    }
    if ((m = /^#([0-9a-f]{6})/i.exec(c))) {
      return [parseInt(m[1].slice(0, 2), 16), parseInt(m[1].slice(2, 4), 16), parseInt(m[1].slice(4, 6), 16)];
    }
    if ((m = /^rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/i.exec(c))) {
      return [+m[1], +m[2], +m[3]];
    }
    return [128, 128, 128];
  }
  function mix(a, b, t) {
    var A = parseColor(a), B = parseColor(b);
    var r = Math.round(A[0] + (B[0] - A[0]) * t);
    var g = Math.round(A[1] + (B[1] - A[1]) * t);
    var bl = Math.round(A[2] + (B[2] - A[2]) * t);
    return "rgb(" + r + "," + g + "," + bl + ")";
  }

  var instance = null;

  function mount(container, options) {
    if (instance) return instance; // one ghost only: fixed gradient ids, as in the original
    var p = Object.assign({}, DEFAULTS, options || {});
    p.tint = Object.assign({}, DEFAULTS.tint, (options && options.tint) || {});

    var rmq = root.matchMedia ? root.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
    var reduced = rmq.matches;
    if (rmq.addEventListener) rmq.addEventListener("change", function (e) { reduced = e.matches; wake(); });

    /* ---- DOM ------------------------------------------------------------ */
    var el = document.createElement("div");
    el.className = "ghost-char";
    el.setAttribute("aria-hidden", "true");

    var VBH = p.bodyHeight + 40;
    var svg = document.createElementNS(SVG_NS, "svg");
    /* generous horizontal room: lean + sway + eye-follow can never reach the edge */
    svg.setAttribute("viewBox", "-5 10 210 " + VBH);
    svg.setAttribute("focusable", "false");
    svg.innerHTML =
      '<defs>' +
        '<linearGradient id="ghostFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%"></stop><stop offset="40%"></stop><stop offset="100%"></stop>' +
        '</linearGradient>' +
        '<linearGradient id="ghostBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%"></stop><stop offset="100%"></stop>' +
        '</linearGradient>' +
        '<filter id="ghostGlowBlur1" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="25"/></filter>' +
        '<filter id="ghostGlowBlur2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40"/></filter>' +
      '</defs>' +
      '<g class="gc-body">' +
        '<g class="gc-glow">' +
          '<ellipse cx="100" rx="90" ry="110" opacity="0.3" filter="url(#ghostGlowBlur1)"></ellipse>' +
          '<ellipse cx="100" rx="130" ry="150" opacity="0.2" filter="url(#ghostGlowBlur2)"></ellipse>' +
        '</g>' +
        '<path class="gc-back" fill="url(#ghostBackGrad)"></path>' +
        '<path class="gc-front" fill="url(#ghostFrontGrad)"></path>' +
        '<g class="gc-face">' +
          '<g class="gc-brows">' +
            '<path class="gc-browL" stroke-width="3.5" stroke-linecap="round" fill="none"></path>' +
            '<path class="gc-browR" stroke-width="3.5" stroke-linecap="round" fill="none"></path>' +
          '</g>' +
          '<g class="gc-eyeL"><ellipse cx="80" cy="100"></ellipse><path class="gc-arch" d="M 71 106 Q 80 88 89 106" stroke-width="5" stroke-linecap="round" fill="none"></path></g>' +
          '<g class="gc-eyeR"><ellipse cx="120" cy="100"></ellipse><path class="gc-arch" d="M 111 106 Q 120 88 129 106" stroke-width="5" stroke-linecap="round" fill="none"></path></g>' +
          '<path class="gc-mouth"></path>' +
        '</g>' +
      '</g>';
    el.appendChild(svg);
    container.appendChild(el);

    var $ = function (s) { return svg.querySelector(s); };
    var bodyG = $(".gc-body"), glowG = $(".gc-glow"), faceG = $(".gc-face"), browsG = $(".gc-brows");
    var backP = $(".gc-back"), frontP = $(".gc-front");
    var browL = $(".gc-browL"), browR = $(".gc-browR"), mouthP = $(".gc-mouth");
    var eyeLG = $(".gc-eyeL"), eyeRG = $(".gc-eyeR");
    var eyeLE = eyeLG.querySelector("ellipse"), eyeRE = eyeRG.querySelector("ellipse");
    var archL = eyeLG.querySelector(".gc-arch"), archR = eyeRG.querySelector(".gc-arch");
    var frontStops = svg.querySelectorAll("#ghostFrontGrad stop");
    var backStops = svg.querySelectorAll("#ghostBackGrad stop");
    var glowEls = glowG.querySelectorAll("ellipse");
    var glowCy = VBH / 2 + 10;
    glowEls[0].setAttribute("cy", glowCy); glowEls[1].setAttribute("cy", glowCy);

    /* original chat bubble: only built if enableChat stays true */
    var bubbleEl = null, quoteIndex = 0, bubbleTimer = 0;
    function ensureBubble() {
      if (bubbleEl) return bubbleEl;
      bubbleEl = document.createElement("div");
      bubbleEl.className = "gc-quote";
      bubbleEl.style.cssText = "position:absolute;left:100%;top:0;pointer-events:none;opacity:0;transform:scale(.5);transform-origin:bottom left;" +
        "transition:all .4s cubic-bezier(.175,.885,.32,1.275);padding:12px 20px;border-radius:24px 28px 28px 8px;font:600 15px/1.4 system-ui,sans-serif;" +
        "max-width:160px;box-shadow:0 12px 28px rgba(0,0,0,.12);user-select:none;";
      el.style.position = el.style.position || "relative";
      el.appendChild(bubbleEl);
      return bubbleEl;
    }
    el.addEventListener("click", function () {
      if (!p.enableChat || !p.quotes.length) return;
      var b = ensureBubble();
      var open = b.style.opacity === "1";
      if (open) quoteIndex = (quoteIndex + 1) % p.quotes.length;
      b.textContent = p.quotes[quoteIndex];
      b.style.background = p.chatBgColor; b.style.color = p.chatTextColor;
      b.style.opacity = "1"; b.style.transform = "scale(1)";
      clearTimeout(bubbleTimer);
      bubbleTimer = setTimeout(function () { b.style.opacity = "0"; b.style.transform = "scale(.5)"; }, 4000);
    });

    /* ---- state ---------------------------------------------------------- */
    var face = Object.assign({}, MOODS.neutral);
    var target = { x: 0, y: 0 }, current = { x: 0, y: 0 };
    var tintAmt = 0, tintColor = p.tint.color;
    var t0 = performance.now();
    var rafId = 0, running = false, destroyed = false, last = {};

    function applyStatic() {
      var fc = p.faceColor;
      browL.setAttribute("stroke", fc); browR.setAttribute("stroke", fc);
      eyeLE.setAttribute("fill", fc); eyeRE.setAttribute("fill", fc);
      archL.setAttribute("stroke", fc); archR.setAttribute("stroke", fc);
      mouthP.setAttribute("fill", fc);
      glowEls[0].setAttribute("fill", p.glowColor); glowEls[1].setAttribute("fill", p.glowColor);
      glowG.style.display = p.showGlow ? "" : "none";
    }
    applyStatic();

    function paintStops(force) {
      var a = tintAmt, tc = tintColor;
      var f = [p.colorTop, p.colorMiddle, p.colorBottom], b = [p.colorBackTop, p.colorBackBottom], i;
      var key = [a.toFixed(3), tc, f.join(), b.join()].join("|");
      if (!force && last.stops === key) return;
      last.stops = key;
      for (i = 0; i < 3; i++) frontStops[i].setAttribute("stop-color", a > 0.001 ? mix(f[i], tc, a) : f[i]);
      for (i = 0; i < 2; i++) backStops[i].setAttribute("stop-color", a > 0.001 ? mix(b[i], tc, a) : b[i]);
    }

    /* ---- body paths (original maths) ----------------------------------- */
    var CX = 100, R = 70;
    function bodyPaths(time) {
      var baseY = p.bodyHeight, i, x, y;
      if (p.animationStyle === "classic") {
        var amp = 14, waves = 3, speed = 0.003 * p.animatingSpeed;
        var f = "M " + (CX - R) + " 100 A " + R + " " + R + " 0 0 1 " + (CX + R) + " 100 ";
        for (i = 0; i <= 50; i++) { var th = i / 50 * Math.PI; x = CX + R * Math.cos(th); y = baseY + Math.sin(th * waves - time * speed) * amp; f += "L " + x + " " + y + " "; }
        f += "Z";
        var b = "M " + (CX - R) + " 100 L " + (CX + R) + " 100 ";
        for (i = 0; i <= 50; i++) { var th2 = 2 * Math.PI - i / 50 * Math.PI; x = CX + R * Math.cos(th2); y = baseY + Math.sin(th2 * waves - time * speed) * amp; b += "L " + x + " " + y + " "; }
        b += "Z";
        return { front: f, back: b };
      }
      var wind = time * 0.002 * p.animatingSpeed, N = 60;
      function waveY(px, isBack) {
        var nx = (px - CX) / R;
        var drape = Math.cos(nx * Math.PI * 0.5) * 12;
        var off = isBack ? Math.PI * 0.8 : 0;
        var w1 = Math.sin(nx * 3.14 - wind + off) * 8;
        var w2 = Math.sin(nx * 6.28 - wind * 1.5 + off) * 3;
        var flutter = Math.sin(nx * 12 - wind * 3) * (Math.abs(nx) * 2);
        return baseY + (isBack ? -drape * 0.5 : drape) + w1 + w2 + flutter;
      }
      var fp = "M " + (CX - R) + " 100 A " + R + " " + R + " 0 0 1 " + (CX + R) + " 100 ";
      for (i = 0; i <= N; i++) { x = CX + R - i / N * (2 * R); fp += "L " + x + " " + waveY(x, false) + " "; }
      fp += "Z";
      var bp = "M " + (CX - R) + " 100 L " + (CX + R) + " 100 ";
      for (i = 0; i <= N; i++) { x = CX - R + i / N * (2 * R); bp += "L " + x + " " + waveY(x, true) + " "; }
      bp += "Z";
      return { front: fp, back: bp };
    }

    /* ---- eye tracking ---------------------------------------------------- */
    function onPointerMove(e) {
      if (!p.interactiveEyes || e.pointerType === "touch") return;
      var r = el.getBoundingClientRect();
      if (!r.width) return;
      var x, y;
      if (p.trackRadius > 0) {
        var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        x = (e.clientX - cx) / p.trackRadius; y = (e.clientY - cy) / p.trackRadius;
        x = Math.max(-1, Math.min(1, x)); y = Math.max(-1, Math.min(1, y));
      } else {
        x = ((e.clientX - r.left) / r.width - 0.5) * 2; y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      }
      target.x = x; target.y = y;
      wake();
    }
    root.addEventListener("pointermove", onPointerMove, { passive: true });

    /* ---- frame ----------------------------------------------------------- */
    function frame(now) {
      if (destroyed) return;
      var time = now - t0;
      var mt = MOODS[p.mood] || MOODS.neutral;
      var settled = true, k;

      /* gaze: "think" ignores the cursor and wanders */
      var tx = target.x, ty = target.y;
      if (p.mood === "think") {
        tx = Math.sin(time * 0.0021) * 0.9;
        ty = -0.3 + Math.sin(time * 0.0033 + 1) * 0.35;
      } else if (!p.interactiveEyes) { tx = 0; ty = 0; }
      var dx = tx - current.x, dy = ty - current.y;
      current.x += dx * 0.08; current.y += dy * 0.08;
      if (Math.abs(dx) > 0.002 || Math.abs(dy) > 0.002) settled = false;

      /* original: tiny mouth reaction to pointer velocity, neutral-mouth only */
      var velocity = Math.sqrt(dx * dx + dy * dy);
      var mouthReaction = Math.min(velocity * 15, 5);
      var tf = Object.assign({}, mt);
      if (mt.mouthOp > 0) { tf.mouthCurveT -= mouthReaction * 0.5; tf.mouthCurveB += mouthReaction; }
      else if (mouthReaction > 0.5) { tf.mouthOp = Math.min(0.6, mouthReaction * 0.2); tf.mouthW = 8; tf.mouthCurveT = -mouthReaction * 0.5; tf.mouthCurveB = mouthReaction; }
      for (k in tf) { var dd = tf[k] - face[k]; face[k] += dd * 0.12; if (Math.abs(dd) > 0.01) settled = false; }

      /* tint eases toward target in both directions */
      var tAmt = reduced ? Math.min(p.tint.amount, 0.45) : p.tint.amount;
      if (p.tint.amount > 0) tintColor = p.tint.color;
      var dt = tAmt - tintAmt;
      tintAmt += dt * 0.08;
      if (Math.abs(dt) < 0.002) tintAmt = tAmt; else settled = false;
      paintStops(false);

      /* body */
      var bt = reduced ? 0 : time;
      var bp = bodyPaths(bt);
      frontP.setAttribute("d", bp.front); backP.setAttribute("d", bp.back);

      /* blink: idle cycle (original) + one-off cue */
      var blink = 1;
      if (!reduced) { var bc = time % 4000; if (bc < 150) blink = Math.max(0.1, 1 - Math.sin(bc / 150 * Math.PI)); }
      if (p.blinkAt) {
        var bd = now - p.blinkAt;
        if (bd >= 0 && bd < 150) { blink = Math.min(blink, Math.max(0.1, 1 - Math.sin(bd / 150 * Math.PI))); settled = false; }
      }
      var wl = 1, wr = 1;
      if (p.winkAt) {
        var wd = now - p.winkAt;
        if (wd >= 0 && wd < 360) {
          var s = Math.max(0.08, 1 - Math.pow(Math.sin(wd / 360 * Math.PI), 0.55));
          if (p.winkEye === "left") wl = s; else wr = s;
          settled = false;
        }
      }

      var eox = p.interactiveEyes || p.mood === "think" ? current.x * 16 : 0;
      var eoy = p.interactiveEyes || p.mood === "think" ? current.y * 16 : 0;
      faceG.style.transform = "translate(" + eox.toFixed(2) + "px," + eoy.toFixed(2) + "px)";

      var rx = 8 * face.eyeScale, ry = 16 * face.eyeScale;
      var ellOp = (1 - face.eyeArch).toFixed(3), archOp = face.eyeArch.toFixed(3);
      eyeLE.setAttribute("rx", rx); eyeLE.setAttribute("ry", ry);
      eyeRE.setAttribute("rx", rx); eyeRE.setAttribute("ry", ry);
      eyeLE.style.transformOrigin = "80px 100px"; eyeRE.style.transformOrigin = "120px 100px";
      eyeLE.style.transform = "rotate(" + face.lEyeRot + "deg) scaleY(" + Math.min(blink, wl).toFixed(3) + ")";
      eyeRE.style.transform = "rotate(" + face.rEyeRot + "deg) scaleY(" + Math.min(blink, wr).toFixed(3) + ")";
      eyeLE.style.opacity = ellOp; eyeRE.style.opacity = ellOp;
      archL.style.opacity = archOp; archR.style.opacity = archOp;
      var ey = "translate(0px," + face.eyeY.toFixed(2) + "px)";
      eyeLG.style.transform = ey; eyeRG.style.transform = ey;

      browL.setAttribute("d", "M 70 " + face.browY + " Q 80 " + (face.browY + face.browCurve) + " 90 " + face.browY);
      browR.setAttribute("d", "M 110 " + face.browY + " Q 120 " + (face.browY + face.browCurve) + " 130 " + face.browY);
      browL.style.transformOrigin = "80px " + face.browY + "px"; browL.style.transform = "rotate(" + face.browAngle + "deg)";
      browR.style.transformOrigin = "120px " + face.browY + "px"; browR.style.transform = "rotate(" + (-face.browAngle) + "deg)";
      browsG.style.opacity = face.browOp.toFixed(3);

      mouthP.setAttribute("d",
        "M " + (100 - face.mouthW / 2) + " " + face.mouthY +
        " Q 100 " + (face.mouthY + face.mouthCurveT) + " " + (100 + face.mouthW / 2) + " " + face.mouthY +
        " Q 100 " + (face.mouthY + face.mouthCurveB) + " " + (100 - face.mouthW / 2) + " " + face.mouthY + " Z");
      mouthP.style.opacity = face.mouthOp.toFixed(3);

      /* sway / float / lean: none under reduced motion */
      var swayX = 0, floatY = 0, rot = 0;
      if (!reduced) {
        var isClassic = p.animationStyle === "classic";
        swayX = isClassic ? 0 : Math.cos(time * 0.0015 * p.floatingSpeed) * 8;
        floatY = Math.sin(time * 0.002 * p.floatingSpeed) * (isClassic ? 8 : 12);
        rot = isClassic ? 0 : (p.interactiveEyes ? current.x * 8 : 0) + Math.sin(time * 0.001 * p.floatingSpeed) * 3;
      }
      bodyG.style.transformOrigin = "100px " + (VBH / 2 + 10) + "px";
      bodyG.style.transform = "translate(" + swayX.toFixed(2) + "px," + floatY.toFixed(2) + "px) rotate(" + rot.toFixed(2) + "deg)";

      /* reduced motion: park the loop once everything has settled */
      if (reduced && settled) { running = false; rafId = 0; return; }
      rafId = requestAnimationFrame(frame);
    }

    function start() { if (running || destroyed || document.hidden) return; running = true; rafId = requestAnimationFrame(frame); }
    function stop() { running = false; if (rafId) cancelAnimationFrame(rafId); rafId = 0; }
    function wake() { start(); }
    function onVis() { if (document.hidden) stop(); else start(); }
    document.addEventListener("visibilitychange", onVis);

    paintStops(true);
    start();

    /* ---- public ---------------------------------------------------------- */
    instance = {
      el: el,
      setProps: function (next) {
        if (destroyed || !next) return;
        if (next.tint) { p.tint = Object.assign({}, p.tint, next.tint); }
        for (var k in next) if (k !== "tint") p[k] = next[k];
        if ("showGlow" in next || "faceColor" in next || "glowColor" in next) applyStatic();
        if ("colorTop" in next || "colorMiddle" in next || "colorBottom" in next || "colorBackTop" in next || "colorBackBottom" in next) paintStops(true);
        wake();
      },
      get props() { return p; },
      /* jump the tint to a value with no easing (used when the character is
         parked in the chat header, which must never carry a colour change) */
      snapTint: function (amount) { p.tint.amount = amount; tintAmt = amount; paintStops(true); wake(); },
      get tintAmount() { return tintAmt; },
      get running() { return running; },
      pause: stop,
      resume: start,
      destroy: function () {
        destroyed = true; stop();
        root.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVis);
        clearTimeout(bubbleTimer);
        if (el.parentNode) el.parentNode.removeChild(el);
        instance = null;
      }
    };
    return instance;
  }

  root.GhostCharacter = {
    mount: mount,
    mix: mix,
    now: function () { return performance.now(); },
    moods: Object.keys(MOODS),
    get instance() { return instance; }
  };
})(window);
