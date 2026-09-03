# Process overview

## What I built

I built **SLOP3030 — Dashboard Language: How Cars Talk to Drivers**, a fictional course about how vehicles communicate through gauges, warning lights, sound, HUDs and driver-assistance systems, treated as a communication system operating under time pressure rather than a parts list. Across twelve weeks, lecture decks, case studies and an interactive lab, students repeatedly analyse automotive interfaces through six questions: urgency, visibility, meaning, modality, timing and required driver action.

## The moments that mattered

### 1. Slide count as a minimum, not a target

A deck could contain twenty slides and still be twenty variations of headings and bullets. I redirected the agent: "treat 20 slides as a minimum amount of teaching material, not a formatting target," which produced a repeatable sequence — concept → example → process → comparison → application → exercise → reflection. The revision in [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237) applied it.

### 2. Refusing to let Week 3 stay the only finished week

I used Week 3 as a depth-first reference implementation, which was useful for setting the standard but risky if it stayed the exception. I changed the instruction to "perform a full Week 1–12 audit; every week needs real examples, image-based explanation, a process diagram and an exercise," visible from [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237) through [`7b3d8a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7b3d8a9).

### 3. Images have to do teaching work

A photograph can still be decoration. I added the rule that every image needs a stated teaching purpose — "if removing it wouldn't reduce understanding, it's probably decorative" — pushing images toward showing warning placement, hierarchy or failure modes rather than generic dashboards, per [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237) and [`7b3d8a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7b3d8a9).

### 4. Turning the workflow into the harness itself

The biggest change wasn't a page but how I instructed the agent: **inspect → identify the problem → consider alternatives → constrain → implement → review → test**. I moved this into [`4843f07`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/4843f07)'s `CLAUDE.md`, which now requires inspecting existing work first, auditing all twelve weeks rather than a sample, and treating a failed check as evidence something is unfinished rather than an obstacle to bypass.

### 5. Interaction has to explain a trade-off, not a fact

Assignment 1 taught me a technically correct interaction can still be too simple. The **Warning Priority Lab** asks students to allocate limited visual/audio attention across several simultaneously valid warnings instead of just identifying one icon; I later wired it into the site's own navigation in [`8c79c98`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/8c79c98) so it stopped being an orphaned demo.

### 6. A second audit found the gap between "built" and "used"

Re-checking the site against my own `CLAUDE.md` after the first pass found that Weeks 7–12 had zero embedded images — only a "suggested reference images" text list — despite each week's deck already having built, captioned SVGs going unused, and that those weeks rarely named the six-dimension framework by name the way Weeks 1–6 do. `spec/` also only tested the assignment's generic contract, not this course's own promises. [`e160517`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/e160517) reused each week's existing deck assets as real `<figure>` embeds and added a closing six-dimension recap panel to Weeks 7–12; [`b648610`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/b648610) added `spec/course-design.test.ts` so that gap can't silently reopen.

## Before shipping

I checked navigation, weekly pages, decks, image rendering, the Warning Priority Lab and responsive layouts in-browser, and ran `pnpm check:evidence` to catch leftover starter material and unresolved citations. The overall workflow ended as: **inspect → identify weakness → direct → revise → verify → scale** — a clear shift from asking for finished output and reacting to it, toward directing the agent through explicit problems and constraints.
