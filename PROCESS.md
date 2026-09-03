# Process overview

## What I built

I built **SLOP3030 — Dashboard Language: How Cars Talk to Drivers**, a fictional university course about how cars communicate through gauges, warning lights, sound, HUDs and driver-assistance systems.

The course treats the dashboard as a communication system operating under time pressure rather than simply a collection of instruments. Across the weekly material, lecture decks, exercises and case studies, students repeatedly analyse interfaces through six ideas: urgency, visibility, meaning, modality, timing and required driver action.

Rather than generating twelve unrelated weeks, I developed reusable teaching patterns, refined one week as a reference implementation, and then used those decisions to establish a consistent course and visual language.

## The moments that mattered

### 1. Turning lecture content into a reusable teaching structure

One early problem was that asking for more lecture content did not necessarily create better teaching. A long deck could still become a sequence of headings and bullet points without explaining how a system actually works.

I redirected the agent away from slide count as the goal and toward a repeatable teaching sequence: concept, real example, process, comparison, application, exercise and reflection.

> For the slide decks, do not treat "20 slides" as a formatting target. Treat it as a minimum amount of teaching material. I want real lecture content, with images, diagrams, process explanations, comparisons, exercises and case studies.

I encoded these reusable patterns in [`54fed62`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/54fed62). This gave later content a shared structure instead of allowing each week to become an independently generated block of material.

### 2. Using Week 3 as a reference instead of regenerating the whole semester

The course had a large scope: twelve weeks, lecture decks, real automotive examples, exercises and interactive material. Generating everything in one breadth-first pass produced uneven depth.

Instead, I chose Week 3 as the reference implementation.

> Use a depth-first flagship approach. Use Week 3 as the reference implementation for all other weeks. The goal is to establish a polished reference standard that the rest of the 12-week course can follow.

The first major Week 3 revision landed in [`327d45a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/327d45a).

I then reviewed the result rather than immediately scaling it. The second pass in [`c3d18ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/c3d18ee) strengthened the connection between the concepts, real vehicle examples, exercises and the recurring framework of urgency, visibility, meaning, modality, timing and driver action.

The change between those two stages is visible in [`327d45a...c3d18ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/compare/327d45a...c3d18ee).

This was an important change in how I used the agent: instead of measuring progress by how many pages existed, I first established what a strong page should contain.

### 3. Giving the course its own visual language

The teaching content had become specific to SLOP3030, but the site still felt too close to the stock university theme. A literal imitation of a digital cockpit was one possible direction, but it risked becoming decorative and reducing readability.

I instead asked the agent to borrow the information-design principles of automotive interfaces without turning the site into a fake dashboard.

> Do not turn the website into a literal fake car dashboard. Borrow appropriate visual characteristics such as instrument hierarchy, restrained status colours, precise labels, structured information zones and diagnostic-style diagrams.

The first visual change landed in [`7af4d90`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7af4d90).

I reviewed that treatment and refined the hierarchy and component styling again in [`5f7dc0c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5f7dc0c). The final dark-theme direction was added in [`e9e0210`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/e9e0210).

The progression is visible in [`7af4d90...e9e0210`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/compare/7af4d90...e9e0210).

The important decision was not simply choosing dark colours. It was using hierarchy, alert emphasis, panels and status treatments consistently enough that the course gained an automotive identity while remaining a usable course website.

### 4. Designing around complexity rather than adding interaction for its own sake

A lesson from Assignment 1 was that an interaction can work correctly while still explaining a concept that is too simple. I therefore made complexity a requirement for SLOP3030.

Instead of presenting warning lights as isolated icons with fixed answers, I directed the teaching around competing factors such as urgency, timing, modality and driver action.

> Every major interactive component should help students understand something that is difficult to explain with static text alone.

This meant exercises and simulator ideas needed to expose trade-offs. For example, several valid warnings can occur simultaneously, but they should not all receive the same colour, visual priority, sound or persistence.

I also changed the way I prompted the agent: important work increasingly followed **problem → alternatives → decision → implementation → review**, rather than a single request for finished output. I recorded that shift in [`5b60b28`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/5b60b28).

The main improvement was therefore not producing more content. It was defining constraints that made the content, exercises and visual decisions fit the same central idea.

## Before shipping

Before shipping, I used the repository checks to find material that still came directly from the starter. `pnpm check:evidence` identified the remaining placeholder hero, social artwork and people imagery.

Rather than ignoring the warning because the site already functioned, I replaced the remaining starter imagery with course-specific material in [`29668b6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/29668b6).

I also used browser-based functional testing against the development server to check navigation, lecture material and responsive behaviour rather than relying only on static code inspection.

Finally, I reviewed the visual system after the dark-theme changes and checked that the process citations resolve to the actual repository history. The final account was committed in [`7aad04f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-CongyuLiu09/commit/7aad04f).
