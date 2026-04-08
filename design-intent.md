# Hero Faction Screen
**Pedro Febles / AI 201 / Professor Tim Lindsey**
**SCAD Atlanta — Spring 2026**

---

🔗 **[Live Demo →](https://pedropresents.github.io/CharacterSelectScreen/)**

---

## What This Is

A single-page interactive experience built for small business owners who are losing work to bad systems. Four factions. Each one names a problem they live with every day. Hover, and it flips to the solution.

The design language: warm industrial loft. Aged paper and Home Depot orange. IBM Plex Sans. Built for people who work with their hands, not for people who read design blogs.

Brand position: **YETI meets Home Depot.** Utilitarian. Non-elitist. Blue-collar muscle with restraint.

---

## The Four Factions

| Faction | The Problem | The Tool |
|---|---|---|
| Lead Follow-Up | Friday, they signed with someone else | Automated Lead Follow-Up System |
| Missed Call Text-Back | By 4:15 they've already booked someone else | Missed Call Text-Back Automation |
| Appointment Reminders | The chair is empty. That hour is gone. | Automated Appointment Reminder Sequence |
| Review Request | Last review: fourteen months ago | Automated Review Request System |

---

## Design Intent

Full spec: [`design-intent.md`](./design-intent.md)

**Color**
- Background `#F7F6F2` — wallpaper white, warmth without beige
- Text `#1A1A1A` — near black, weight without harshness
- Accent `#F96302` — Home Depot orange, urgency, hover trigger
- Recede `#A8A8A0` — cool concrete grey, unselected state

**Typography**
- IBM Plex Sans, medium weight
- ALL CAPS: labels, headers
- Mixed case: all body copy
- Body: 17px / Tool name: 21px / Brand mark: 0.72rem

**Layout**
- 3D carousel — center card active, two flanking cards at 40% opacity
- Hover-to-flip: 800ms dwell required before card flips
- Carousel transition: 1.5s cubic-bezier

**Mood**
A business owner lands here and feels seen and relieved — finally, someone to help them focus on what they actually built this for.

**What I will not compromise on:** The faction copy, the problem framing, the before/after structure, and the psychological accuracy of how a business owner recognizes themselves. The AI does not rewrite the faction text.

---

## AI Direction Log

*Per SCAD ESF Protocol — documents my use of AI as a production tool, not a decision-maker.*

**Entry 1 — From Tools to Human Scenes**
I brought five automation tools as my five faction options. The AI pushed back: these were tools, not factions — a services menu, not an identity. It offered a reframe: the faction is not the tool, it is the human experience of the problem the tool solves, with the tool revealed on hover as the solution. I kept the reframe entirely. It was correct. I then wrote the problem copy for each faction myself — the Tuesday 2pm scene, the crawlspace moment, the empty chair, the handshake at the door. The AI gave me the structure. I filled it. I also cut the lead capture chatbot after ranking the five by universality, landing on four.

**Entry 2 — Pushing the Copy to Scene Level**
I submitted my first draft copy for feedback. The AI gave two critiques: I was writing questions when the stronger factions were declarative statements, and "qualifying candidates" was HR vocabulary that would lose the exact person I was writing for. I rewrote. The follow-up faction became the Tuesday/Friday story. The AI confirmed that was the standard and asked me to bring the other three up to match it. I did.

**Entry 3 — Rejecting the Loft Palette, Choosing Brand Direction**
The AI asked me to assign four colors from the loft image to page roles. I rejected all four. I redirected: I asked the AI to analyze the color languages of IKEA, Home Depot, and Caterpillar and return derived color directions. It returned three options. I chose Home Depot Muscle — orange connected to urgency, which maps directly to the pain-point copy. Final hex values: `#F5F0E8` / `#1A1A1A` / `#F96302` / `#A8A8A0`.

**Entry 4 — Preserving the Full Vision While Committing to MVP**
I described the full cinematic vision — split-flap airport mechanism, 3D carousel, intro sequence, card flip. The AI named the contradiction: the vision was weeks of work and the deadline was the next day. I chose the MVP path but refused to lose the vision. I directed the AI to preserve every element of the cinematic concept in a separate document — `full-vision.md` — including the mechanism, the carousel architecture, the single words per faction (FRIDAY, 4:15, EMPTY, 4.1), and the recommended technical stack.

**Entry 5 — Locking the Lead-Up Line**
I asked the AI to recommend options for the ALL CAPS hook line on the front face of each card. It returned four options. I chose "YOU KNOW THIS FEELING." — declarative, not a question. It assumes recognition rather than requesting it. That assumption positions the page as a place that already understands the business owner before they've said a word.

**Entry 6 — Reversing the MVP Decision When Time Permitted**
After completing the working MVP and confirming it was live on GitHub Pages, I reassessed. The AI's scope warning had been based on building from scratch. With Gemini Pro available for vibe coding, that constraint had collapsed. I directed Gemini to build the cinematic version — intro screen, 3D carousel with depth, hover-to-flip, ticket system — and it produced a working first pass the same session. The AI's advice was correct for the original constraint. I updated the constraint and made the right call for the actual situation.

**Entry 7 — Iterative HTML Refinement Across Multiple Rounds**
Working with Claude (separate session from ideation), I directed a precise sequence of adjustments to the Gemini-generated HTML: intro duration reduced from 8s to 5s; flanking card opacity fixed at 0.4 permanently; hover-to-flip set to 800ms dwell rather than instant trigger; staggered text reveal sequence (center card → brand mark → flanking cards, each offset by 500ms); brand mark white-to-dark color transition timed to the overlay fade; ticket positioning on back face refined through iterative percentage adjustments; opacity bug fixed by moving opacity off the `preserve-3d` container element and onto the face elements directly; "Click Here" component added to back faces in a proportional bottom row. Every adjustment was a directive — I specified what was wrong and what I wanted instead.

**Entry 8 — Scoping the Next Build Cycle**
I described a comprehensive next-phase interaction flow: click-here scan animation, ticket flight to solutions checklist, fourth-faction checkout trigger, reverse card exit sequence, animated solutions panel with staggered ticket reveals, circuit trace on contact button. Claude flagged directly that this was out of scope for today's crit and that the current prototype was already well beyond the assignment requirements. I agreed, preserved the full spec as a separate document, and redirected to submission prep. That call — stopping when the work is crit-ready — is the same discipline I exercised in Record 3.

---

## Records of Resistance

*Four moments where I caught the AI pulling in the wrong direction and redirected it.*

**Record 1 — Rejected: Industry-Based Factions**
The AI pushed me toward organizing factions by business industry — retail, HVAC, healthcare, logistics. I rejected it because I cannot confidently claim expertise in any specific industry. A business owner in that industry would immediately feel the gap. I redirected to the automation tools I actually know. The AI then helped me flip those tools into human pain-point scenarios — not "here is a product" but "here is the moment this costs you." That became the real faction structure.

**Record 2 — Rejected: Business Interior Photography as Faction Backgrounds**
After locking the warm industrial loft, I proposed using real business interior photography — a restaurant, a warehouse, a factory floor — as the background for each faction card. The AI pushed back directly: this contradicted a decision I had already made. I had moved away from industry-based factions because they would exclude people. A plumber seeing a restaurant interior would think "that's not me." Once the AI named the contradiction, I saw it clearly. I returned to the empty loft — it belongs to no industry and no owner.

**Record 3 — Rejected: Full Cinematic Build for MVP Deadline**
I described the full cinematic vision and asked what the AI could offer me. It pushed back on scope — named directly that what I described was weeks of JavaScript animation work, none of which could be built before a deadline. I made the call to build the MVP and submit something complete. I did not abandon the cinematic vision — I directed the AI to preserve it in full as a separate document.

**Record 4 — Rejected: Stopping at MVP When Conditions Changed**
The AI's scope warning in Record 3 was based on a specific constraint: building from scratch, limited time. After the MVP was complete and live, I reassessed both variables. Time was still available. AI-assisted vibe coding with Gemini Pro compressed the build timeline significantly. The AI had told me the cinematic version was out of reach — that advice was correct for the original constraint. I rejected it when the constraint changed. The cinematic version is what I submitted.

---

## Five Questions Reflection

**1. Can I defend this?**
Yes. Every major decision — the faction structure, the color palette, the timing, the copy — traces back to the Design Intent I wrote before touching the code. The HTML iteration added new decisions, all of which I can explain and attribute to specific creative rationale.

**2. Is this mine?**
The copy, the spec, the creative direction, and every adjustment directive — all mine. Gemini built the initial cinematic HTML. Claude refined it per my instructions. I specified every change. The AI executed. The difference is documented.

**3. Did I verify?**
Live on GitHub Pages. Tested in incognito. Carousel navigation, hover-to-flip dwell, intro sequence, opacity behavior, brand mark transition — all confirmed working.

**4. Would I teach this?**
I could explain every CSS rule, why opacity had to move off the `preserve-3d` container, why the hover dwell is 800ms and not instant, and why the brand mark transitions from white to dark as the overlay fades.

**5. Is my documentation honest?**
Yes. The Direction Log reflects what actually happened across both sessions. Entry 6 documents the reversal of Entry 4's decision and explains why. Honest disclosure of a changed position is more valuable than a log that only shows clean linear progress.

---

## Full Vision

The cinematic MVP is the submission. The next build cycle — solutions checklist panel, ticket flight animation, fourth-faction checkout trigger, reverse exit sequence, contact button circuit trace — is fully documented and ready for the next Claude Code / Gemini session. See [`full-vision.md`](./full-vision.md).

---

## File Structure

```
CharacterSelectScreen/
├── README.md           ← you are here
├── index.html          ← cinematic prototype (live)
├── design-intent.md    ← full creative spec
└── full-vision.md      ← cinematic roadmap + next build cycle
```

---

*Human-authored documentation per SCAD ESF Protocol.*
*Prototype built Spring 2026 — AI 201, SCAD Atlanta.*
