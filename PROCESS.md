# Process overview

## What I built

I built **SLOP3030 — Dashboard Language: How Cars Talk to Drivers**, a fictional university course about how vehicles communicate through gauges, warning lights, sounds, HUDs and driver-assistance systems.

The course treats a dashboard as a communication system operating under time pressure rather than simply a collection of instruments. Across the weekly content, lecture decks, exercises and case studies, students repeatedly analyse automotive interfaces through urgency, visibility, meaning, modality, timing and required driver action.

Rather than generating twelve independent weeks, I used one strong teaching week and a reusable visual/content system to establish the standard for the rest of the course.

## The moments that mattered

### 1. Turning longer slide decks into actual teaching material

The first slide revision increased the amount of content, but slide count alone did not make the lectures stronger. A twenty-slide deck could still become twenty variations of headings and bullet points.

I redirected the agent to treat twenty slides as a minimum amount of teaching rather than a formatting target. Slides needed real vehicle examples, image explanation, processes, comparisons, exercises and worked responses.

> For the slide decks, do not treat "20 slides" as a formatting target. Treat it as a minimum amount of teaching material.

The first expanded slide pass landed in [`50c5ceb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/50c5ceb).

I then added reusable teaching patterns in [`54fed62`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/54fed62), so lectures could repeatedly move through concept, example, process, comparison, application, exercise and reflection rather than being independently generated collections of slides.

### 2. Using Week 3 as a quality standard instead of generating all twelve weeks at once

The size of the course made breadth-first generation tempting: twelve weeks, lecture decks, exercises, imagery and interactive material could all be produced quickly, but the depth was uneven.

Week 3 was already the strongest teaching week, so I used it as a flagship rather than asking the agent to regenerate everything at once.

> Use a depth-first flagship approach. Use Week 3 as the reference implementation for all other weeks.

The first substantial Week 3 pass is in [`327d45a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/327d45a).

After reviewing it, I returned to the same week instead of immediately scaling the structure. The later revision in [`c3d18ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/c3d18ee) tightened the connection between concepts, vehicle examples, exercises and the recurring analytical framework.

The before/after progression is visible in [`327d45a...c3d18ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/compare/327d45a...c3d18ee).

### 3. Replacing the stock university theme with an automotive information language

The course content had developed its own identity, but the site still looked close to the starter theme. My first instinct could have been to imitate a digital instrument cluster directly, but that risked making the course site look like a novelty dashboard rather than a usable university site.

I instead directed the visual treatment toward automotive information design: strong hierarchy, precise labels, restrained alert states, structured information zones and consistent panels.

> Do not turn the website into a literal fake car dashboard. Borrow appropriate visual characteristics such as instrument hierarchy, restrained status colours, precise labels and structured information zones.

The first major theme change is in [`7af4d90`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7af4d90).

I continued refining the hierarchy and component treatment in [`5f7dc0c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5f7dc0c), then introduced the final dark-theme direction in [`e9e0210`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/e9e0210).

The visual progression can be compared directly in [`7af4d90...e9e0210`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/compare/7af4d90...e9e0210).

### 4. Directing the agent around complexity rather than just completeness

A lesson from Assignment 1 was that a technically correct interaction can still explain a concept that is too simple. For SLOP3030, I therefore made complexity itself part of the requirement.

Instead of treating warning lights as isolated icons, I directed the course around competing variables: urgency, visibility, meaning, modality, timing and required driver action. Exercises and interactive ideas had to expose trade-offs rather than simply ask students to identify the correct answer.

> Every major interactive component should help students understand something that is difficult to explain with static text alone.

This changed how I used the agent. Rather than asking for finished output immediately, I increasingly asked it to identify the problem, consider alternatives, implement one direction, review the result and refine it. I documented this shift in [`5b60b28`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5b60b28).

The important change was not producing more material, but establishing constraints that made later material more coherent.

## Before shipping

I ran the repository checks and used browser-based functional testing against the development server. I checked navigation, weekly content, lecture decks and responsive behaviour rather than relying only on static code inspection.

I also reviewed Week 3 against the teaching checklist, checked that the visual system remained readable after the dark-theme changes, and verified that the commit and compare links in this file resolve to the actual repository evidence.
