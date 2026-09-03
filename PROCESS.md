# Process overview

## What I built

I built **SLOP3030 — Dashboard Language: How Cars Talk to Drivers**, a fictional university course about how vehicles communicate through gauges, warning lights, sound, HUDs and driver-assistance systems.

The course treats the dashboard as a communication system operating under time pressure rather than simply a collection of instruments. Across lectures, exercises, case studies and interactive material, students repeatedly analyse automotive interfaces through six questions: urgency, visibility, meaning, modality, timing and required driver action.

The final site combines a twelve-week curriculum, substantial lecture decks, real automotive examples, image-based explanation, process diagrams and an interactive Warning Priority Lab.

## The moments that mattered

### 1. Building a teaching structure instead of generating content-shaped slides

An early problem was that requesting more lecture content did not necessarily create better teaching. A deck could contain twenty slides and still be little more than twenty variations of headings and bullet points.

I redirected the agent to treat slide count as a minimum amount of teaching rather than a formatting target.

> For the slide decks, do not treat "20 slides" as a formatting target. Treat it as a minimum amount of teaching material. I want real lecture content, with images, diagrams, process explanations, comparisons, exercises and case studies.

This led to reusable teaching patterns rather than independently generated weekly decks. The structure became concept → example → process → comparison → application → exercise → reflection.

That pattern gave the rest of the course a consistent teaching rhythm and made it easier to judge whether a week was actually explaining something rather than simply containing enough material.

### 2. Using Week 3 as a reference, then scaling the standard across the course

The course had a large scope: twelve weeks, lecture decks, exercises, real-world examples and interactive material. A breadth-first pass produced uneven depth, so I initially used Week 3 as a reference implementation.

> Use a depth-first flagship approach. Use Week 3 as the reference implementation for all other weeks.

The Week 3 revisions in [`327d45a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/327d45a) and [`c3d18ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/c3d18ee) established the recurring analytical framework of urgency, visibility, meaning, modality, timing and required driver action.

The important next step was not leaving Week 3 as the only strong week. I redirected the agent to audit and improve the rest of the course using the same standard.

> Do not focus only on Week 3 anymore. Perform a full Week 1–12 audit and revision. Every week must include substantive teaching, real automotive examples, image-based explanation, a process or flow, an applied exercise and a clear connection to the rest of the semester.

The first scaling pass landed in [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237), where Weeks 1–2 gained real image embeds, the shared analytical framework, process diagrams and corrected lecture decks.

I then continued revising the MDX teaching material in [`7b3d8a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7b3d8a9), focusing on making the written pages support the same teaching depth as the decks.

This changed the role of Week 3: it stopped being the finished exception and became a quality benchmark for the rest of the semester.

### 3. Making images part of the explanation rather than decoration

The course topic depends heavily on visual interpretation, but simply adding car or dashboard photographs would not improve the teaching.

I therefore required every important image to have a specific teaching purpose.

> For every image, explicitly state the teaching purpose. If an image could be removed without reducing understanding, it is probably decorative and should be replaced with a more useful visual.

This meant real automotive imagery needed to show something students could inspect: icon hierarchy, warning placement, information density, HUD layering, alert escalation or differences between interface approaches.

The Week 1–2 revision in [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237) was the first deliberate pass at embedding real examples directly into the teaching sequence rather than treating visuals as page decoration.

The aim was that students should be able to answer not just “what car is this?” but “what is this interface trying to communicate, what should I notice, and why was it designed this way?”

### 4. Giving the course an automotive visual language without making a fake dashboard

The content became specific to SLOP3030 before the visual design did. The site initially remained close to the stock university theme.

A literal digital cockpit was one possible direction, but I rejected it because it risked becoming a novelty interface and reducing readability.

> Do not turn the website into a literal fake car dashboard. Borrow appropriate visual characteristics such as instrument hierarchy, restrained status colours, precise labels, structured information zones and diagnostic-style diagrams.

The first visual-system revision landed in [`7af4d90`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7af4d90), followed by further refinement in [`5f7dc0c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5f7dc0c).

The dark-theme direction in [`e9e0210`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/e9e0210) completed the stronger visual identity.

The useful part of the theme was not simply the dark background. It was the consistent use of hierarchy, status emphasis, panels, spacing and restrained alert colours to make the course feel automotive while still behaving like a course website.

### 5. Replacing a simple interaction model with a problem about competing priorities

One of the clearest lessons from Assignment 1 was that a technically correct interaction can still explain a concept that is too simple.

For this course, I required interaction to reveal relationships that would be harder to understand through static text alone.

> Every major interactive component should help students understand something that is difficult to explain with static text alone.

This led to the **Warning Priority Lab**, where students reason about simultaneous vehicle warnings rather than identifying isolated icons. The problem involves competing urgency, limited attention, visual priority, sound, persistence and required driver action.

Several warnings may all be legitimate, but they should not all demand the same amount of attention. That trade-off is the content of the interaction.

After the simulator existed, I also noticed that an interaction students could not naturally discover through the course navigation was not really part of the course experience. I connected the Warning Priority Lab into the site's own navigation in [`8c79c98`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/8c79c98).

This was a small implementation change but an important course-design change: the simulator became part of the teaching path rather than an isolated feature.

### 6. Removing the last traces of the starter

Late in the process, `pnpm check:evidence` showed that several starter images and a `STARTER_CONTENT` marker still remained even though the course itself was already functional.

I treated that as a polish problem rather than just a failing check. The remaining placeholder artwork weakened the course identity and made the submission visibly dependent on the template.

I replaced the remaining starter imagery in [`29668b6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/29668b6).

This reinforced an important distinction I kept returning to during the assignment: functional completeness was not the same as finished work.

## Before shipping

Before shipping, I used the repository checks and browser-based functional testing rather than relying only on static code inspection.

I checked the navigation, weekly teaching pages, slide decks, Warning Priority Lab and responsive layouts. I also used the evidence check to identify starter content that still needed replacement.

The later course passes in [`5c3e237`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5c3e237) and [`7b3d8a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7b3d8a9) were particularly important because they moved the project beyond a strong flagship week and toward a consistently taught course.

The main change in my workflow was therefore from asking the agent for finished output to directing a repeated cycle of **inspect → identify weakness → constrain → revise → test → scale**. That made the final course more coherent than a single broad generation pass would have been.
