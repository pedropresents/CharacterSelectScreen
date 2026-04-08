# Design Intent — Hero Faction Screen
*Pedro Febles / AI 201 / Professor Tim Lindsey*
*Written April 7, 2026 — Human-authored per ESF Protocol*

---

## Mood
A business owner lands here and feels seen and relieved — finally, someone to help them focus on what they actually built this for.

---

## What I Will Not Compromise On
The faction copy, the problem framing, the before/after structure, and the psychological accuracy of how a business owner recognizes themselves. The AI does not rewrite the faction text under any circumstance.

---

## Color Palette
- **Background:** `#F5F0E8` — off-white with warmth, aged paper, not sterile
- **Primary text:** `#1A1A1A` — near black, weight without harshness
- **Accent / hover trigger:** `#F96302` — Home Depot orange, urgency, activation
- **Recede state:** `#A8A8A0` — cool concrete grey, unselected factions

---

## Typography
- **Font:** IBM Plex Sans
- **Weight:** Medium
- **Case:** ALL CAPS for labels, headers, and lead-up line / Mixed case for all body copy
- **Sizes:**
  - Lead-up line: 32px — ALL CAPS, dominant
  - Body copy (scene text): 18px — readable, not dominant
  - Tool name (solution reveal): 22px — slightly larger, signals the payoff
  - Faction label (solution face only): 13px — small, utilitarian, category tag

---

## Layout
- CSS Grid
- Four faction cards in a single row
- Each card equal width at rest
- On hover: hovered card expands slightly, three others recede

---

## Hover Behavior — Detailed

### Front face (at rest)
Each card displays in this order:
1. **"YOU KNOW THIS FEELING."** — ALL CAPS, 32px, `#1A1A1A`
2. Scene copy — the problem, mixed case, 18px

### On hover
- Transition duration: **1000ms**
- Hovered card: accent color `#F96302` activates on border or background shift
- Copy flips from problem to solution — same structure, new story
- Faction label appears in ALL CAPS 13px at top of card
- Tool name appears at 22px below solution copy
- Three unselected cards fade to **40% opacity**
- All transitions: 1000ms ease

### Off hover
- Page returns to rest state at same 1000ms transition

---

## The Four Factions — Full Copy

### Faction 1 — LEAD FOLLOW-UP

**Front face (problem):**
YOU KNOW THIS FEELING.

Someone filled out the form. Tuesday, 2pm. You were on a job. Wednesday you meant to call. Thursday it slipped. Friday they signed with someone else.
The lead didn't go cold. It went to a competitor.

**Hover face (solution):**
LEAD FOLLOW-UP

The form was filled out. Tuesday, 2pm. You were on a job. By 2:01 they had a response. By Wednesday you had a conversation scheduled. Friday you closed it.
The lead didn't wait. Neither did you.

*Tool: Automated Lead Follow-Up System*

---

### Faction 2 — MISSED CALL TEXT-BACK

**Front face (problem):**
YOU KNOW THIS FEELING.

3:47pm. Phone buzzes on the passenger seat. Both hands in the crawlspace. It rings out. No voicemail left. No text. By 4:15 they've already booked someone else.

**Hover face (solution):**
MISSED CALL TEXT-BACK

3:47pm. Phone buzzes on the passenger seat. Both hands in the crawlspace. It rings out. By 3:48 they received a text: "Hey, sorry I missed you — I'm with a customer. Can I call you back at 5?" They replied: "Perfect."

*Tool: Missed Call Text-Back Automation*

---

### Faction 3 — APPOINTMENT REMINDERS

**Front face (problem):**
YOU KNOW THIS FEELING.

Tuesday 10am. You moved a job to hold that slot. You're there. The chair is empty. You wait eight minutes before you know. That hour is gone. They'll reschedule — they always say they'll reschedule.

**Hover face (solution):**
APPOINTMENT REMINDERS

Tuesday 10am. You're there. So are they. They got a reminder Sunday. Another Monday evening. A confirmation Tuesday morning. The chair is full. The hour is yours.

*Tool: Automated Appointment Reminder Sequence*

---

### Faction 4 — REVIEW REQUEST

**Front face (problem):**
YOU KNOW THIS FEELING.

Handshake at the door. "Great work, seriously." They mean it. You drive away. A week passes. Your Google profile says 4.1 stars. Last review: fourteen months ago. The next customer searches, sees that number, keeps scrolling.

**Hover face (solution):**
REVIEW REQUEST

Handshake at the door. "Great work, seriously." They mean it. You drive away. Twenty minutes later they receive a text: "Glad we could help — if you have a moment, a quick review means the world to us." They tap. They post. 4.7 stars. Last review: today.

*Tool: Automated Review Request System*

---

## Visual Atmosphere
Warm industrial loft. Polished concrete floor, brick walls, hard rectangular shadows from factory windows. The light is amber-warm. The room is empty — it is the space before the work begins. Brand position: YETI meets Home Depot. Utilitarian, non-elitist, built for people who work. Not magazine glossy. Not low. Blue-collar muscle with restraint.

---

## Consultation Ticket
Each hover face includes a decorative consultation ticket number below the tool name.
Format: **TICKET #00[1–4]**
Decorative for MVP. Connects to intake system in full build.

---

*This Design Intent was written before any AI engagement with the codebase, per SCAD ESF Protocol.*
*Full cinematic vision preserved separately in hero-faction-full-vision.md*
