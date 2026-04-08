# Hero Faction Screen — Full Cinematic Vision
*Pedro Febles / Febles Digital / Pedro Presents*
*Preserved from ideation session — April 7, 2026*
*For future development via Claude Code / Google Gemini vibe coding*

---

## The Experience Arc

### Act 1 — The Intro Screen
- Page loads to a single centered screen: **PEDRO PRESENTS** or **FEBLES DIGITAL**
- No interaction required — after a few seconds the title fades out automatically
- What replaces it is the faction carousel

### Act 2 — The Carousel Reveal
- Three faction cards visible simultaneously in a carousel
- The center card is closer, larger, more prominent than the two flanking cards
- The fourth faction exists off-screen — invisible until the carousel rotates
- The carousel has depth — it is not flat, it has a sense of 3D perspective

### Act 3 — The Split-Flap Mechanism
- Inspired by airport departure boards — the 1960s/70s Solari split-flap boards used in terminals and train stations
- A single word appears on each faction card — not the full copy, just one word (e.g. PICTURE, IMAGINE, MISSED, EMPTY)
- The word emerges from the bottom of the card on a disc mechanism — invisible disc, centered, rising from below
- The word locks into place center-frame for a moment
- Then it pushes back up and disappears
- The animation is mechanical and precise — not soft, not bouncy
- Timing: approximately 0.05 seconds for the flip mechanism, word holds for ~1.5 seconds, then retracts

### Act 4 — Carousel Navigation
- User hovers left or right to rotate the carousel
- The trifecta rotates — cards slide left or right
- As the new center card locks in, the split-flap mechanism triggers on the new card
- A new single word emerges from the bottom
- The transition between carousel positions: smooth but mechanical

### Act 5 — The Faction Flip
- User hovers directly on the center card
- The card flips — a full 3D card rotation (like flipping a physical card)
- On the reverse: the full scene copy (problem → solution), the tool named, the before/after story
- The faction label appears in ALL CAPS on the flipped face
- The two flanking cards dim to ~40% opacity
- A gentle darkness falls between the flipped card and the background — a shadow gap
- The background does not disappear — the three cards remain visible

### Act 6 — The Consultation Ticket
- On the flipped face, below the solution copy: a consultation ticket number
- Format: utilitarian, stamped-feeling — like a deli counter ticket or a work order number
- e.g. **TICKET #0047** or **REF: FD-2026-047**
- This is decorative in MVP but in full version connects to a CRM or intake system

---

## Visual Language

### The Room
Warm industrial loft. Brick walls, polished concrete floor, arched factory windows. Hard rectangular shadows from window geometry. Exposed ceiling trusses. The light is amber-warm. The floor is cool grey. The contrast between warm walls and cool floor is intentional.

### Color Palette
- Background: `#F5F0E8` — off-white with warmth, aged paper
- Text: `#1A1A1A` — near black, weight without harshness
- Accent: `#F96302` — Home Depot orange, urgency, the hover trigger
- Recede: `#A8A8A0` — cool concrete grey, unselected state

### Typography
- **IBM Plex Sans** — medium weight
- ALL CAPS: faction labels, single-word mechanism words, headers
- Mixed case: all body copy (the scene-setting text)
- Sizes: Label 13px / Body 18px / Tool name 22px / Single mechanism word: large, dominant — 80–120px

### The Split-Flap Word — Per Faction
- Lead Follow-Up → **FRIDAY**
- Missed Call Text-Back → **4:15**
- Appointment Reminders → **EMPTY**
- Review Request → **4.1**
*(Each word is the most specific, painful detail from that faction's copy)*

### Brand Position
YETI meets Home Depot. Not glossy. Not low. Blue-collar muscle with restraint. The executive can respect it but it doesn't court him. Caterpillar energy. Boots, not loafers. Apron, not Armani.

---

## The Four Factions — Full Copy

### Faction 1 — Lead Follow-Up
**Problem face:**
Someone filled out the form. Tuesday, 2pm. You were on a job. Wednesday you meant to call. Thursday it slipped. Friday they signed with someone else.
The lead didn't go cold. It went to a competitor.

**Solution face (on flip):**
The form was filled out. Tuesday, 2pm. You were on a job. By 2:01 they had a response. By Wednesday you had a conversation scheduled. Friday you closed it.
The lead didn't wait. Neither did you.
*Tool: Automated Lead Follow-Up System*

---

### Faction 2 — Missed Call Text-Back
**Problem face:**
3:47pm. Phone buzzes on the passenger seat. Both hands in the crawlspace. It rings out. No voicemail left. No text. By 4:15 they've already booked someone else.

**Solution face (on flip):**
3:47pm. Phone buzzes on the passenger seat. Both hands in the crawlspace. It rings out. By 3:48 they received a text: "Hey, sorry I missed you — I'm with a customer. Can I call you back at 5?" They replied: "Perfect."
*Tool: Missed Call Text-Back Automation*

---

### Faction 3 — Appointment Reminders
**Problem face:**
Tuesday 10am. You moved a job to hold that slot. You're there. The chair is empty. You wait eight minutes before you know. That hour is gone. They'll reschedule — they always say they'll reschedule.

**Solution face (on flip):**
Tuesday 10am. You're there. So are they. They got a reminder Sunday. Another Monday evening. A confirmation Tuesday morning. The chair is full. The hour is yours.
*Tool: Automated Appointment Reminder Sequence*

---

### Faction 4 — Review Request
**Problem face:**
Handshake at the door. "Great work, seriously." They mean it. You drive away. A week passes. Your Google profile says 4.1 stars. Last review: fourteen months ago. The next customer searches, sees that number, keeps scrolling.

**Solution face (on flip):**
Handshake at the door. "Great work, seriously." They mean it. You drive away. Twenty minutes later they receive a text: "Glad we could help — if you have a moment, a quick review means the world to us." They tap. They post. 4.7 stars. Last review: today.
*Tool: Automated Review Request System*

---

## Technical Stack for Full Build
- **JavaScript animation library:** GSAP (GreenSock) for the split-flap and carousel
- **3D card flip:** CSS `transform: rotateY(180deg)` with `perspective` and `transform-style: preserve-3d`
- **Carousel:** Either CSS scroll-snap or a lightweight JS carousel (Swiper.js or custom)
- **Split-flap text:** Custom JS — characters on a rotating disc, triggered on carousel lock
- **Intro fade:** CSS animation, `opacity: 0` to `opacity: 1` then reverse on timer
- **Background shadow gap:** CSS `box-shadow` with spread and offset on the active card
- **Hosting:** GitHub Pages (same as MVP)

---

## Mood
*A business owner lands here and feels seen and relieved — finally, someone to help them focus on what they actually built this for.*

## What Will Not Be Compromised
The faction copy, the problem framing, the before/after structure, and the psychological accuracy of how a business owner recognizes themselves. The AI does not rewrite this.

---

*This document preserved from ideation session with Claude, April 7, 2026.*
*Ready for vibe coding when scope permits.*
