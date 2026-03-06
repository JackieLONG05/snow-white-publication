/**
 * Snow White: The Dwarfs' Care
 * Interactive single-page publication — vanilla JS, no frameworks
 */

(function () {
  "use strict";

  const DWARF_IDS = ["doc", "grumpy", "happy", "sleepy", "bashful", "sneezy", "dopey"];
  /** Position % on dwarfs image: { left, top } for hotspot overlay — align to each dwarf's head/hat */
  const DWARF_POSITIONS = {
    doc: { left: 51, top: 87.9 },
    grumpy: { left: 8.2, top: 42.3 },
    happy: { left: 36.7, top: 89.1 },
    sleepy: { left: 39, top: 9.2 },
    bashful: { left: 67, top: 89.7 },
    sneezy: { left: 61.7, top: 13.1 },
    dopey: { left: 78.7, top: 14 },
  };
  const CREDITS_EGG_POS = { left: 85, top: 90 };
  const DWARF_NAMES = {
    doc: "Doc",
    grumpy: "Grumpy",
    happy: "Happy",
    sleepy: "Sleepy",
    bashful: "Bashful",
    sneezy: "Sneezy",
    dopey: "Dopey",
  };

  /**
   * Vignette texts — literary style, from the original Chinese narrative
   */
  const VIGNETTES = {
    doc: `Doc (the learned one / physician)

I first felt her brow, then bent close to hear her breath. She was not fevered; her breathing was faint, but still there. So I bade the others fetch hot water, towels, and clean blankets, and make the room warmer.

I brought out the old books — the pages yellowed, full of herbs and ailments. I turned them one by one, yet the words seemed to say only "what ought to be," while before me lay "what is." I thought much, but moved with care, afraid even to lift a corner of the blanket too quickly.

Then came a soft clink from the hearth. I looked up — Dopey had tried to help Grumpy stir the soup, but his spoon struck the rim; broth spilled onto the floor in a puff of steam. Grumpy's brow knotted at once, his mouth ready to snap. But he glanced at Snow White on the bed, and his voice dropped low.

I said, "Speak less. Let the fire be quiet too. She needs no more disturbance."
They listened, and grew more cautious. The room fell still again, save for the flicker of flame. I closed the book and prayed silently: if we can hold fast tonight, tomorrow may bring change.`,

    grumpy: `Grumpy (the gruff one: harsh words, soft heart)

I don't like this. Not that I dislike her — I dislike feeling so helpless. She lies there, and we can only watch.
I fed the fire stick by stick, willing it to burn high, yet fearing it would crackle too loud. I fed it and muttered, "Quiet. Don't make noise."

I thought: she should have something warm. So I made soup. The pot bubbled; I stirred and stirred, and my thoughts grew more tangled.
Dopey stood beside me, eyes fixed on the pot as if that broth could wake a soul from sleep. He reached to help — and his hand was clumsy. The ladle struck the rim with a clear clink. Anger shot through me; I nearly shouted.

Then I turned and saw Snow White, still and calm. The anger sank like snow. I kept my voice low, clenched my teeth: "Can't you stand farther away?"
He hung his head as if he had done something terrible. I thought: he meant to help. So I thrust an empty bowl into his hands and said, still harsh, "Here. Hold it steady. Drop it again, and you'll sweep the chimney."

Later Sneezy brought hot water. His nose itched; his face was red with holding back. I wanted to scold him for being useless — but I saw how he fought, tears nearly brimming. I took the basin and said quietly, "Enough. Step back. Don't sneeze here."

My tongue is sharp; my heart held only one wish: keep her warm, keep her undisturbed, let nothing worse befall her. When she wakes, I can scold her for being careless.`,

    happy: `Happy (the cheerful one: a comfort to all)

When a room is too silent, the mind fills with fear. So I hummed softly — not loud, only enough to soften the air.
I wiped her hands, patted the pillow, straightened the small things by the bed. With each little task, my heart grew a little brighter.

Then Dopey burst in, his arms full of flowers — stems and leaves and all, as if he had carried half the hillside indoors. I was startled at first, then could not help but smile; but I feared to laugh aloud, so I covered my mouth and let only my eyes laugh.

I gestured for him to be quiet, then knelt and helped him sort the blooms: larger ones behind, smaller in front, thorns set aside. Dopey learned earnestly; his hands were clumsy but careful. When a flower leaned, he frowned and righted it as if it mattered greatly.
We arranged them and set them by the bed. The room seemed to gain color, a breath of life.

I whispered to Dopey, "She will like them when she wakes."
He nodded hard, his eyes bright as flame. In that moment I thought: perhaps we cannot chase away the dark — but we can light a small lamp within it.`,

    sleepy: `Sleepy (the drowsy one: keeping watch)

I am so tired. My eyelids keep drooping. But I dare not sleep.
I am afraid she will wake and see no one. Afraid she will be frightened in her dreams with no one beside her to say, "Don't be afraid. I am here."

I sit by the bed, back straight. Each time my head nods, I bite my tongue to wake myself.
I listen to her breath — a thin thread. As long as the thread remains, my heart does not break.

Once there was a sound by the hearth. I started up. Grumpy's face was darker; Dopey hunched like one who had done wrong. I wanted to say "Quiet" — but feared my own voice would disturb more. I put my finger to my lips instead. They understood. The room grew still again.

I am dizzy with weariness, yet I repeat in my heart: as long as she breathes, as long as this night passes, we have hope.`,

    bashful: `Bashful (the shy one: gentle and careful)

I dare not come too close. When she smiled in ordinary days, I never knew where to put my hands and feet. Now she does not smile, and I am more lost.
I brought a bunch of simple wildflowers — nothing rare, but fresh. I placed them in a vase slowly, as if a sudden move might scatter her dreams.

I smoothed the edge of her blanket, pushed the chair by the bed into place. In these small acts my heart found a little steadiness: at least when she wakes, the room will be tidy, not the usual mess.

I wanted to speak to her, but feared my voice would tremble. At last I said only in my mind:
"Don't be afraid. You cooked and swept and sewed for us. Now we will keep watch for you."

I could not say it aloud, so I put those words into each motion: pull the blanket up a little more, set the vase a little straighter.
May she feel these small offerings.`,

    sneezy: `Sneezy (the one who sneezes: holding himself back)

I fear nothing more than sneezing now.
I carried the basin of hot water in. The steam rose; my nose itched as if a feather were tickling inside. The sneeze churned in my throat. I clenched my teeth, cupped my nose, and held back until tears nearly spilled.

I had meant to set the basin down quietly and slip away — but my hand trembled; the water sloshed and almost spilled. Grumpy came at once and took it. He frowned as if to scold me.
I hunched my shoulders. "I tried so hard," I whispered.
Then I was afraid even my whisper would annoy. I hurried to look down.

Grumpy's tongue stayed sharp. He muttered, "Don't let it loose here."
But he pushed me aside and added, "Get back. Don't make yourself ill too. Then we'd have you to care for."
I heard that, and my heart ached. My nose itched more — but not from the sneeze; something like grief and worry welled up.

I retreated to the wall and pressed the sneeze down with all my might.
I thought: as long as I do not sneeze, as long as I add no trouble, I am helping to keep this room quiet for her.`,

    dopey: `Dopey (the foolish one: no words, only deeds)

I cannot speak.
So I can only do things. Many things.

I saw Grumpy making soup and wanted to help stir. I thought I could do it — but my hand betrayed me. The ladle struck the rim with a clink. I nearly jumped out of my skin. Broth splashed onto the floor in a cloud of steam. Grumpy's brow was hard as stone.
I knew I had done wrong again.
I hung my head and wished to shrink to nothing.

But he did not shout. He only thrust an empty bowl into my hands, low and fierce: "Hold it."
I nodded quickly. My hands shook on the bowl, yet I gripped it harder than ever — as if it were a thing that could redeem me. I ran for a cleaner bowl, wiped the floor again and again until it gleamed no more.

Later I thought: she likes flowers.
So I ran out to pick them. I picked too many; I could not hold them all; petals scattered along the path. When I rushed in, Happy was startled, then his eyes smiled. He gestured for me to be quiet. We sorted and arranged the flowers together, put the finest by the bed.
I looked at that vase and felt a little warmth in my heart.

I cannot say "Wake soon."
I straightened the chair. I straightened the things. I straightened the flowers.
I thought: perhaps when everything is straight, she will wake.`,
  };

  /**
   * Ending text — detailed, following the original tale
   */
  const ENDING_TEXT = `A prince, riding through the forest, came upon the crystal coffin. He saw Snow White and could not look away. He begged the dwarfs to let him have her. At first they refused — she was dear to them. But the prince pleaded so earnestly that at last they relented.

As the prince's men carried the coffin, one stumbled. The jolt dislodged the piece of poisoned apple from Snow White's throat. Her eyes opened. She sat up, alive.

The prince rejoiced. He asked her to be his wife. Snow White consented, and they departed for his kingdom.

A great wedding was held. The Queen, Snow White's stepmother, was invited. When she learned who the bride was, jealousy and rage filled her. She came to the feast — and there she saw Snow White, radiant and alive. The Queen was given red-hot iron shoes and forced to dance until she fell dead.

Snow White and the prince ruled their kingdom in peace. The seven dwarfs were honoured guests whenever they visited. And so they all lived happily ever after.`;

  const STORAGE_KEY = "snowwhite-dwarfs-care";

  let state = { read: {} };
  let previousFocus = null;
  let focusableElements = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.read === "object") {
          state.read = { ...parsed.read };
          return;
        }
      }
    } catch (_) {}
    state.read = {};
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ read: state.read }));
    } catch (_) {}
  }

  function resetState() {
    state.read = {};
    saveState();
  }

  function showScreen(id) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach((s) => {
      const isActive = s.id === id;
      s.classList.toggle("active", isActive);
      s.setAttribute("aria-hidden", String(!isActive));
    });
  }

  function showHub() {
    showScreen("hub");
    renderHub();
  }

  function showEnding() {
    const el = document.getElementById("ending-text");
    if (el) el.innerHTML = "<p>" + ENDING_TEXT.split("\n\n").join("</p><p>") + "</p>";
    showScreen("ending");
  }

  function updateProgressUI() {
    const count = DWARF_IDS.filter((id) => state.read[id]).length;
    const el = document.getElementById("progress-text");
    const label = document.getElementById("progress-label");
    if (el) el.textContent = `${count}/7`;
    if (label) label.textContent = count === 1 ? " vignette read" : " vignettes read";
  }

  function updateEndingUnlock() {
    const count = DWARF_IDS.filter((id) => state.read[id]).length;
    const btn = document.getElementById("btn-ending");
    if (!btn) return;
    btn.disabled = count < 7;
    btn.textContent = count >= 7 ? "Go to Ending" : "Ending (7/7 required)";
  }

  function renderHub() {
    const list = document.getElementById("dwarf-list");
    if (!list) return;

    list.textContent = "";
    list.setAttribute("role", "list");

    DWARF_IDS.forEach((id) => {
      const pos = DWARF_POSITIONS[id] || { left: 50, top: 50 };
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dwarf-btn";
      btn.setAttribute("data-id", id);
      btn.setAttribute("data-read", String(!!state.read[id]));
      btn.setAttribute("aria-label", `${DWARF_NAMES[id]} — ${state.read[id] ? "Read" : "Unread"}. Click to read his story.`);
      btn.style.left = pos.left + "%";
      btn.style.top = pos.top + "%";
      btn.innerHTML = `<span class="dwarf-name">${DWARF_NAMES[id]}</span><span class="dwarf-status">${state.read[id] ? " ✓" : ""}</span>`;
      btn.addEventListener("click", (e) => { e.stopPropagation(); openVignette(id); });
      list.appendChild(btn);
    });

    const creditsBtn = document.createElement("button");
    creditsBtn.type = "button";
    creditsBtn.className = "dwarf-btn credits-btn";
    creditsBtn.setAttribute("aria-label", "Credits");
    creditsBtn.style.left = CREDITS_EGG_POS.left + "%";
    creditsBtn.style.top = CREDITS_EGG_POS.top + "%";
    creditsBtn.innerHTML = "<span class=\"dwarf-name\">✦</span>";
    creditsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const panel = document.getElementById("credits-panel");
      if (panel) panel.setAttribute("aria-hidden", "false");
    });
    list.appendChild(creditsBtn);

    updateProgressUI();
    updateEndingUnlock();
  }

  function openVignette(id) {
    const modal = document.getElementById("vignette-modal");
    const titleEl = document.getElementById("vignette-title");
    const textEl = document.getElementById("vignette-text");
    const markReadBtn = document.getElementById("btn-mark-read");

    if (!modal || !titleEl || !textEl || !markReadBtn) return;

    const text = VIGNETTES[id] || "";
    const name = DWARF_NAMES[id] || id;

    titleEl.textContent = name;
    textEl.textContent = text;
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("data-current-dwarf", id);

    previousFocus = document.activeElement;
    focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0];
    if (first) first.focus();

    document.body.style.overflow = "hidden";

    markReadBtn.onclick = () => {
      markRead(id);
      closeVignette();
    };
  }

  function markRead(id) {
    if (!DWARF_IDS.includes(id)) return;
    state.read[id] = true;
    saveState();
    renderHub();
  }

  function closeCredits() {
    const panel = document.getElementById("credits-panel");
    if (panel) panel.setAttribute("aria-hidden", "true");
  }

  function closeVignette() {
    const modal = document.getElementById("vignette-modal");
    if (!modal) return;

    modal.setAttribute("aria-hidden", "true");
    modal.removeAttribute("data-current-dwarf");
    document.body.style.overflow = "";

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
    previousFocus = null;
    focusableElements = null;
  }

  function trapFocus(e) {
    const modal = document.getElementById("vignette-modal");
    if (!modal || modal.getAttribute("aria-hidden") === "true") return;
    if (!focusableElements || focusableElements.length === 0) return;

    if (e.key !== "Tab") return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function init() {
    loadState();

    document.getElementById("btn-start")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      if (!btn) return;
      btn.classList.add("btn-clicking");
      setTimeout(() => {
        btn.classList.remove("btn-clicking");
        showHub();
        const hub = document.getElementById("hub");
        if (hub) hub.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    });

    document.getElementById("btn-ending")?.addEventListener("click", () => {
      if (DWARF_IDS.every((id) => state.read[id])) {
        showEnding();
      }
    });

    document.getElementById("btn-reset")?.addEventListener("click", () => {
      resetState();
      renderHub();
    });

    document.getElementById("btn-credits")?.addEventListener("click", () => {
      const panel = document.getElementById("credits-panel");
      if (panel) panel.setAttribute("aria-hidden", "false");
    });

    document.getElementById("btn-credits-close")?.addEventListener("click", () => closeCredits());

    document.getElementById("credits-panel")?.addEventListener("click", (e) => {
      if (e.target?.id === "credits-panel") closeCredits();
    });

    document.getElementById("btn-modal-close")?.addEventListener("click", closeVignette);

    document.querySelector(".modal-backdrop")?.addEventListener("click", (e) => {
      if (e.target?.getAttribute("data-close") === "true") closeVignette();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modal = document.getElementById("vignette-modal");
        const credits = document.getElementById("credits-panel");
        if (modal?.getAttribute("aria-hidden") === "false") {
          closeVignette();
        } else if (credits?.getAttribute("aria-hidden") === "false") {
          closeCredits();
        }
      }
    });

    document.addEventListener("keydown", trapFocus);

    document.getElementById("btn-back-hub")?.addEventListener("click", showHub);

    document.getElementById("btn-replay")?.addEventListener("click", () => {
      resetState();
      showHub();
    });

    if (document.getElementById("hub")?.classList.contains("active")) {
      renderHub();
    }

    initMusic();
  }

  function initMusic() {
    const audio = document.getElementById("bgm");
    const toggle = document.getElementById("music-toggle");
    if (!audio || !toggle) return;

    audio.volume = 0.35;
    /* No autoplay: browsers block it without user gesture. Click-to-play only. */

    toggle.addEventListener("click", () => {
      if (audio.paused) {
        audio.volume = 0.35;
        audio.play().catch(() => {});
        toggle.classList.remove("muted");
        toggle.setAttribute("aria-label", "Pause background music");
      } else {
        audio.pause();
        toggle.classList.add("muted");
        toggle.setAttribute("aria-label", "Play background music");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
