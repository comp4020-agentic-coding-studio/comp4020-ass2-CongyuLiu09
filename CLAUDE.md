# Your harness

The platform under you is fixed and documented in `README.md`: the Slop
identity, the four content collections, the build pipeline and the generated
API. The course website publishes this deliverable's brief and spec. Read both
before planning or building.

This repository is for:

**SLOP3030 — Dashboard Language: How Cars Talk to Drivers**

The course studies how vehicles communicate with drivers through gauges,
warning lights, icons, sound, HUDs, text, digital instrument clusters and
driver-assistance systems.

This is **not** a vehicle-maintenance course and not a general automotive
history course. Its focus is HCI, information design and communication under
time pressure.

The central course idea is:

> A dashboard is a language used by a vehicle to communicate with a human under
> time pressure.

All content, interactions, visual decisions and assessments should reinforce
that idea.

## Agent workflow

Do not act primarily as a content generator.

For any meaningful design or implementation problem:

1. inspect the existing implementation;
2. identify the actual problem;
3. preserve accurate and strong existing work;
4. identify which files are relevant;
5. consider alternatives when the decision materially affects the course;
6. explain the trade-offs;
7. choose a direction for a clear reason;
8. implement it;
9. review the result against the brief and this harness;
10. test the result directly before treating it as complete.

For significant decisions, prefer:

**problem → alternatives → decision → implementation → review → refinement**

rather than immediately implementing the first plausible solution.

Do not regenerate strong work unnecessarily.

When revising existing material, identify what is already working before
changing it.

After a meaningful change:

1. list the changed files;
2. summarise what changed;
3. explain why it improves the course;
4. run the relevant checks;
5. inspect the output directly in the browser;
6. report remaining uncertainty or weaknesses.

Do not commit automatically unless explicitly instructed.

Do not commit while checks are failing.

Use small, meaningful commits that represent real stages of development.

## Curriculum coherence

The course must feel like one idea developed across a semester, not twelve
independently generated topics.

Across Weeks 1–12:

* each week must have one clear central question;
* each week must connect explicitly to previous teaching;
* each week must prepare students for later material;
* terminology must remain consistent;
* repeated concepts should deepen rather than restart from zero;
* assessments must build on skills introduced during the semester.

Use this analytical framework repeatedly throughout the course:

1. **Urgency**
2. **Visibility**
3. **Meaning**
4. **Modality**
5. **Timing**
6. **Required driver action**

Weekly examples, exercises, case studies and interactions should repeatedly use
these dimensions so students develop a cumulative method for analysing
automotive communication.

## Weekly content standard

Every Week 1–12 teaching page must contain substantive instructional material.

Each week should include:

* week title;
* central guiding question;
* connection to the previous week;
* explanation of why the topic matters;
* key concepts;
* substantive teaching sections;
* at least one named real-world automotive case study;
* effective design examples;
* problematic, ambiguous or failure examples where relevant;
* at least one process, sequence, system-state or decision-flow explanation;
* at least one applied exercise;
* reflection or discussion;
* explicit bridge to the next week;
* references or sources where relevant.

Do not accept pages that are mostly definitions, generic summaries or short
content-shaped chunks.

Prefer concrete explanation over broad claims.

Avoid generic AI prose such as:

* "In today's exciting lecture..."
* "Let's explore the fascinating world of..."
* "This technology has revolutionised..."
* "Students will gain a deeper understanding..."

Use specific statements about what a vehicle communicates, how the interface
works and what the driver is expected to understand or do.

## Real-world examples

Use specific real vehicles and systems rather than vague examples such as "a
modern car".

Examples may include manufacturers such as Mazda, Toyota, Honda, BMW,
Mercedes-Benz, Volvo, Volkswagen, Tesla, Audi or others where relevant.

For each important case study explain:

* what system is being shown;
* what triggers it;
* what the driver sees or hears;
* what the vehicle is attempting to communicate;
* what action is expected;
* strengths of the design;
* weaknesses or ambiguity;
* possible consequences of misunderstanding;
* design implications.

Real examples must serve teaching rather than decoration.

## Image-based teaching

Images are part of the instructional material.

Every week must use multiple meaningful visual examples where appropriate.

For every important image, establish:

* what the image shows;
* what students should look at;
* which detail matters;
* what concept the image demonstrates;
* useful annotations or labels where appropriate;
* a meaningful caption;
* useful alt text.

If removing an image would not reduce understanding, it is probably decorative
and should either be removed or replaced with a more useful visual.

Prefer:

* real dashboard photographs;
* instrument clusters;
* warning displays;
* HUDs;
* ADAS interfaces;
* annotated screenshots;
* side-by-side comparisons;
* diagrams;
* flows;
* timelines;
* state diagrams.

Do not use vague placeholders such as "image of modern dashboard".

## Process and flow explanations

Use visual process explanations whenever causal, temporal or system behaviour
would be difficult to understand from prose alone.

Typical pattern:

**sensor input → system interpretation → severity/confidence → alert priority →
visual/audio output → driver interpretation → driver action**

Where appropriate, explain:

* how information enters the system;
* how the system decides what matters;
* how priority changes;
* how warnings escalate;
* how driver behaviour changes the output;
* what failure states can occur.

Prefer diagrams, sequences or state models over a paragraph that merely states
that the process exists.

## Lecture deck standard

Every teaching week must have a complete lecture deck.

Each deck must contain **at least 20 substantive teaching slides**.

Twenty slides is not a formatting target. Do not create nearly empty slides to
meet the number.

A typical deck should contain approximately 20–28 meaningful slides.

Each deck should include:

* title and guiding question;
* learning objectives;
* opening real-world example;
* substantive teaching sections;
* multiple real automotive examples;
* image-based teaching;
* at least two process/flow/diagram slides where appropriate;
* at least one side-by-side comparison;
* at least one detailed case study;
* at least one problematic or failure example;
* at least one misconception;
* at least one applied exercise;
* an exercise discussion, worked response or model answer;
* a short knowledge check;
* key takeaways;
* bridge to the next week.

Use a teaching rhythm such as:

**concept → example → process → comparison → application → exercise →
reflection**

rather than repeating identical title-and-bullet layouts.

Each slide should have enough substance that a lecturer could genuinely teach
from it.

Where supported by the deck format, include useful speaker notes.

## Exercises

Every week must contain at least one applied exercise.

Exercises should require students to:

* analyse;
* compare;
* prioritise;
* diagnose;
* critique;
* redesign;
* justify;
* trace a process;

rather than simply recall definitions.

Prefer exercises involving ambiguity or trade-offs.

For example, multiple simultaneous vehicle alerts should force students to
decide:

* which receives visual priority;
* which requires audio;
* which colour is appropriate;
* which should persist;
* which can be suppressed;
* what immediate action should be communicated.

Where possible, include an exercise debrief or sample reasoning.

## Interactive teaching components

Do not add an interaction merely to make the site interactive.

Before implementing a major interactive component, answer:

> What complexity becomes easier to understand because this is interactive?

If there is no strong answer, redesign or remove it.

Prefer interactions involving:

* multiple variables;
* competing states;
* limited attention;
* changing severity;
* time;
* uncertainty;
* prioritisation;
* consequences of student choices.

For every major interaction define:

### Learning purpose

What should students understand?

### Inputs

What can students change?

### System behaviour

What responds to those inputs?

### Variables

What influences the result?

### Feedback

What does the student see or learn?

### Interpretation

What should the student notice?

### Reflection

What judgement should they make afterwards?

The **Warning Priority Lab** should remain integrated into the teaching
experience rather than existing as an isolated demo.

Its purpose is to demonstrate that several simultaneously valid warnings cannot
all demand identical attention.

## Visual system and polish

A site being functional is not sufficient.

The final site should feel intentionally designed and refined.

The automotive identity should come from information-design principles rather
than from making the site look literally like a fake car dashboard.

Use automotive characteristics selectively:

* strong information hierarchy;
* restrained alert colours;
* clear status states;
* precise labels;
* structured information zones;
* consistent panels;
* diagnostic-style diagrams;
* controlled dark surfaces where appropriate.

Review:

* typography hierarchy;
* spacing;
* alignment;
* image sizing and cropping;
* captions;
* navigation;
* card and panel consistency;
* hover/focus states;
* responsive layouts;
* deck consistency;
* accessibility;
* visual rhythm.

Do not leave default-looking components or starter imagery simply because they
function.

## Full-course audit

Week 3 may be used as a reference implementation, but it must not remain the
only deeply developed week.

When asked to review the course, inspect **all Weeks 1–12**.

For each week review:

* content depth;
* curriculum connection;
* real examples;
* image teaching;
* process explanation;
* exercise quality;
* deck depth;
* visual polish.

Preserve strong existing work and improve weak material.

Do not claim the course is complete after inspecting only a sample of weeks.

## Required checks

After each meaningful implementation stage, run:

```bash
pnpm check
```

Before shipping, run:

```bash
pnpm check:evidence
```

Treat a failed check as evidence that the implementation still needs
correction.

Do not ignore a failed check because the site appears correct locally.

Diagnose a failed check before changing anything: read what it names — file,
line and contract — rather than guessing.

Do not bypass, skip or weaken checks to make them pass.

## Browser verification

Static code inspection is not enough.

After meaningful visual or interaction changes, open the site in a browser and
verify the affected pages directly.

Where relevant check:

* navigation;
* interaction behaviour;
* lecture links;
* image loading;
* decks;
* overflow;
* mobile layouts;
* desktop layouts;
* focus states;
* content readability.

Use automated browser testing when useful, but visually inspect the result as
well.

## Platform-specific gotchas

* `pnpm check:evidence` tracks every `STARTER_CONTENT` fragment and unchanged
  key imagery shipped with the template.
* Replace starter imagery with course-specific work or deliberately remove it.
* Remove a `STARTER_CONTENT` marker as soon as the corresponding content has
  genuinely been replaced.
* Do not leave starter cleanup until the final submission pass.
* This Assignment 2 repository requires its written process account in
  `PROCESS.md`.
* Do not create `reflections/assignment-2.md`; it is not part of the marked
  submission.

## Process evidence

Treat `PROCESS.md` as a reading guide to the repository history rather than a
general essay.

Record important moments while working, including:

* an initial approach that was too shallow;
* a rejected design direction;
* an agent output that needed redirection;
* a new harness constraint;
* an interaction that was too simple;
* a content pattern that became reusable;
* a visual refinement;
* a failed check that revealed unfinished work;
* a significant before/after revision.

Useful process evidence should explain:

**Before**
What existed or what the agent proposed.

**Problem**
Why it was insufficient.

**Direction**
What instruction or constraint changed.

**After**
What changed in the implementation.

**Why it worked**
How it improved coherence, teaching, interaction or polish.

Each important claim in `PROCESS.md` should link to a real commit or compare
range.

Prefer evidence of meaningful decisions over routine retries.

Do not invent process history after the fact.

## Repository safety

* Do not commit `.idea/`.
* Do not commit credentials, API keys, tokens or passwords.
* Do not commit temporary screenshots unless intentionally used as documented
  process evidence.
* Do not remove course checks or weaken tests just to make them pass.
* Do not deploy or make the repository public until explicitly instructed.
* Do not delete potentially useful work or process evidence without inspecting
  it first.
