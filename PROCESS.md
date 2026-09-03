# Process overview

## What I built

I built **SLOP3030 — Dashboard Language: How Cars Talk to Drivers**, a fictional university course about how vehicles communicate through gauges, warning lights, sound, HUDs and driver-assistance systems.

The course treats the dashboard as a communication system operating under time pressure rather than simply a collection of instruments. Across lectures, exercises, case studies and interactive material, students repeatedly analyse automotive interfaces through six questions: urgency, visibility, meaning, modality, timing and required driver action.

The final site combines a twelve-week curriculum, substantial lecture decks, real automotive examples, image-based explanation, process diagrams and an interactive Warning Priority Lab. The course became less about generating enough pages and more about establishing a repeatable teaching and design system that could hold those pages together.

## The moments that mattered

### 1. Turning slide quantity into a teaching structure

An early problem was that requesting more lecture content did not necessarily create better teaching. A deck could contain twenty slides and still be twenty variations of headings and bullet points.

I redirected the agent to treat slide count as a minimum amount of teaching rather than a formatting target.

> For the slide decks, do not treat "20 slides" as a formatting target. Treat it as a minimum amount of teaching material. I want real lecture content, with images, diagrams, process explanations, comparisons, exercises and case studies.

This led to a recurring teaching sequence: **concept → example → process → comparison → application → exercise → reflection**. That structure gave me a way to judge a deck by what students could learn from it rather than by how many slides existed.

The later lecture revisions in [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237) applied this more explicitly, adding real images, process diagrams and corrected decks to the early weeks.

### 2. Using Week 3 as a benchmark, then refusing to leave it as the exception

The course had a large scope: twelve weeks, decks, exercises, real-world examples and interactive material. A breadth-first generation pass risked producing a lot of superficially complete content with uneven depth.

I initially used Week 3 as the reference implementation.

> Use a depth-first flagship approach. Use Week 3 as the reference implementation for all other weeks.

That worked as a way to establish the standard, but it created a second problem: a strong Week 3 was not enough if the rest of the semester remained shallower.

I therefore changed the instruction:

> Do not focus only on Week 3 anymore. Perform a full Week 1–12 audit and revision. Every week must include substantive teaching, real automotive examples, image-based explanation, a process or flow, an applied exercise and a clear connection to the rest of the semester.

The first clear scaling pass is visible in [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237), where Weeks 1–2 gained real image embeds, the shared analytical framework, process diagrams and repaired lecture decks.

I continued revising the teaching MDX in [`7b3d8a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7b3d8a9).

The important change was that Week 3 stopped being the finished exception. It became a benchmark against which the other weeks could be inspected and improved.

### 3. Making images do teaching work

Dashboard communication is inherently visual, but adding photographs alone did not make the course easier to understand. A photograph of a car interior can still be decoration.

I added a stronger rule:

> For every image, explicitly state the teaching purpose. If an image could be removed without reducing understanding, it is probably decorative and should be replaced with a more useful visual.

This shifted the role of imagery. Students should be directed toward something specific: warning placement, hierarchy, information density, HUD layering, icon ambiguity or differences between two interface approaches.

The image and content work in [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237) and the later MDX revision in [`7b3d8a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7b3d8a9) pushed the weekly material toward this model.

The test I used became simple: students should be able to answer not only **what is shown?**, but also **what should I notice, what is the vehicle communicating, and why does that design decision matter?**

### 4. Giving the site an automotive identity without turning it into a fake cockpit

The teaching content developed its own identity before the interface did. The first versions still felt close to the stock university theme.

One obvious option was to imitate a digital dashboard literally, but I rejected that because it risked turning the course into a novelty interface and reducing readability.

> Do not turn the website into a literal fake car dashboard. Borrow appropriate visual characteristics such as instrument hierarchy, restrained status colours, precise labels, structured information zones and diagnostic-style diagrams.

The visual treatment changed in [`7af4d90`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7af4d90), was refined again in [`5f7dc0c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5f7dc0c), and developed into the dark-theme direction in [`e9e0210`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/e9e0210).

The useful part of the dark theme was not darkness itself. The improvement came from using hierarchy, structured panels, spacing and restrained alert emphasis consistently enough that the course looked related to automotive information design while still functioning as a university course site.

### 5. Making interaction explain competing priorities

One lesson I carried directly from Assignment 1 was that a technically correct interaction can still explain something too simple.

For SLOP3030 I added a stronger requirement:

> Every major interactive component should help students understand something that is difficult to explain with static text alone.

That led to the **Warning Priority Lab**. Rather than asking students to identify a warning icon, it asks them to reason about simultaneously valid warnings competing for limited driver attention.

The problem involves urgency, visual priority, sound, persistence, timing and required driver action. Several alerts may all be correct, but they should not all communicate with equal intensity. The trade-off itself becomes the subject of the interaction.

I later noticed another problem: an interactive tool that existed but could not be naturally discovered by students was still outside the real teaching flow. I connected the Warning Priority Lab into the site's navigation in [`8c79c98`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/8c79c98).

That turned the simulator from an isolated feature into part of the course structure.

### 6. Turning my agent workflow into an explicit harness

The biggest process change was not a page or component. It was changing how I instructed the agent.

Earlier in the project, I could still ask for broad finished outputs and then react to what came back. As the course grew, that produced uneven content and made it harder to distinguish a real design decision from another generation pass.

I changed the workflow toward:

**inspect → identify the problem → consider alternatives → constrain → implement → review → test → refine**

I then moved those lessons into the project's actual harness rather than leaving them only in this retrospective.

The revised `CLAUDE.md` in [`4843f07`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/4843f07) now explicitly requires the agent to inspect existing work before changing it, preserve strong material, consider alternatives for meaningful decisions, verify work in the browser, and audit all twelve weeks rather than declaring the course complete from a sample.

It also records course-specific quality constraints for:

* curriculum coherence;
* real-world examples;
* image-based teaching;
* process diagrams;
* twenty-plus-slide teaching decks;
* applied exercises;
* interaction complexity;
* visual polish.

This was important because the process improvements became instructions that could affect later agent behaviour, not just observations written after the work was done.

### 7. Treating failed checks as design evidence

Near the end of development, `pnpm check:evidence` found remaining starter artwork and a `STARTER_CONTENT` fragment even though the site was already functional.

I treated that as more than a technical submission error. Placeholder material weakened the course identity and showed that functional completeness was not the same thing as polish.

I replaced the remaining starter imagery in [`29668b6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/29668b6).

That experience also became part of the harness: failed checks are now treated as evidence that something still needs investigation rather than as obstacles to bypass.

## Before shipping

Before shipping, I used repository checks and browser-based functional testing rather than relying only on source-code inspection.

I checked navigation, weekly teaching pages, lecture decks, real-image rendering, the Warning Priority Lab and responsive layouts. I also used `pnpm check:evidence` to find content that still belonged to the starter rather than SLOP3030.

After the later curriculum and MDX revisions, I also revised this process account in [`2c38933`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/2c38933) so that it reflected the actual later workflow rather than freezing the story at the earlier Week 3 stage.

The final harness revision in [`4843f07`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/4843f07) captures the main lesson of the assignment: stronger results came from directing the agent through explicit problems, constraints, review and verification rather than asking it to generate complete artefacts in one pass.

The overall workflow became:

**inspect → identify weakness → direct → revise → verify → scale**

That is the main difference between how I began the project and how I finished it.
