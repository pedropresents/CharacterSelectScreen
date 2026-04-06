# Hero Faction Companion Doc
**AI 201 — Context & Framework**

---

## What Is a Hero/Faction Screen?
A hero screen (or faction screen, or character select screen) is the moment before the game begins **where the player chooses who they will be.** It is not a menu. It is a mood.

The screen's job is to make every option feel distinct, powerful, and worth choosing. When you hover over a character, the entire page shifts to reflect that character's identity — the colors change, the typography shifts, the atmosphere transforms.

The design principle: **the interface itself communicates meaning.** The screen does not just list options — it performs them.

---

## If You Are Not a Gamer
Think of it as an interactive poster for a movie, a band, or a fashion collection. The poster has 3–5 options. When a viewer hovers on one option, the entire poster shifts to reflect that choice — different color palette, different type treatment, different mood. The unselected options fade or recede. The selected option dominates the space.

---

## Examples Across Disciplines

| If You Come From… | Think of It As… |
|-------------------|----------------|
| Game Design | Character select screen. Faction picker. The moment before the match starts. |
| Graphic Design | An interactive poster where hovering changes the entire composition. Each option has its own visual identity system. |
| UX / Interaction | A single-page experience where the interface state changes dramatically based on user focus. Hover as a design tool, not just a cursor cue. |
| Film / Motion | A movie's cast page where hovering on an actor transforms the page into their character's world. Color, type, and mood all shift. |
| Fashion / Branding | A lookbook landing page where each collection has a distinct atmosphere, and hovering between them is the experience itself. |
| Photography | A portfolio series page where each project transforms the page's visual treatment when selected. |

---

## Your Role: Art Director and Orchestrator
In this project, you are the **Art Director**. AI is your engineering team. You do not write the CSS by hand — you direct the AI to write it, then evaluate whether the result matches your vision.

> "The Art Director never says 'make it look cool.' They say 'the palette is desaturated teal with warm amber accents, the type is condensed sans-serif at 72pt for headers, and when the user hovers, the background shifts from 15% to 85% opacity over 300ms.' That level of specificity is what makes the AI useful. Without it, you get generic."
> — Professor Lindsey

---

## ESF Practices Explained

### 1. Design Intent
**What it is:** A creative specification you write *before* AI touches your code. Defines color palette, typographic hierarchy, hover-state behavior, mood, and visual rules.

**What a good one includes:**
- Specific color values (not "dark and moody" — `#1a1a2e background with #d4a843 accent`)
- Type choices with sizes
- Hover behavior described in enough detail someone else could build it
- The mood in one sentence
- What you will not compromise on

### 2. AI Direction Log (3–5 Entries)
Each entry captures three things:
1. What you asked AI to do
2. What it produced
3. What you changed, rejected, or kept — and **why**

Can live in your README, as annotated Git commit messages, or in your physical sketchbook.

### 3. Records of Resistance (3 Moments)
Three documented moments where you rejected or significantly revised what AI gave you. Each answers:
- What did AI produce?
- Why did you reject or revise it?
- What did you do instead?

**Example:** "AI generated a symmetrical 3-column grid with equal spacing. I rejected it because my Design Intent calls for an asymmetric layout with the selected hero at 60% width. I revised the prompt to specify the ratio and added a CSS rule to suppress the default centering."

### 4. Five Questions Reflection
Answer before submitting:
1. **Can I defend this?** Can I explain every major decision?
2. **Is this mine?** Does this reflect my creative direction, or did I mostly follow AI's suggestions?
3. **Did I verify?** Did I check that things work the way I think they work?
4. **Would I teach this?** Do I understand it well enough to explain it to someone else?
5. **Is my documentation honest?** Does my AI Direction Log accurately describe what I asked and what I changed?

---

## Tips for Success
- **Start with the Design Intent, not the code.** The #1 mistake is opening AI and asking for "a cool hero screen." Write your spec first.
- **Sketch on paper first.** Draw the layout, label sections, indicate hover behavior.
- **Use the First Playable.** Session 4 (4/1) is your checkpoint — must be live on GitHub Pages, even if rough.
- **Scope down, not up.** 3–5 factions. One page. No routing. No backend.
- **Test in incognito.** Before submitting, open your GitHub Pages URL in an incognito window.

---

## Session → Deliverable Map

| Session | What You Learn | How It Feeds Your Project |
|---------|---------------|--------------------------|
| 2 — Wed 3/25 | Blueprinting the Vibe. Design Intent. | Design Intent written this session. |
| 3 — Mon 3/30 | Vibe Coding 101. AI translates spec to CSS Grid. | Spec → structure. |
| 4 — Wed 4/1 | The Cloud Save. Git → GitHub Pages. | First Playable checkpoint. |
| 5 — Mon 4/6 | The Director's Cut. Intentionally breaking/reverting. | Stress-test, polish hover states, fill AI Direction Log. |
| 6 — Wed 4/8 | Studio Crit. | Final deliverable due. Live desk demos. |
