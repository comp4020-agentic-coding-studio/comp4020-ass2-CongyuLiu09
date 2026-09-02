# Your harness

The platform under you is fixed and documented in `README.md`: the Slop
identity, the four content collections, the build pipeline and the generated
API. The [course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or
build; what follows is the working habits and process rules carried forward
from earlier prototypes, not platform documentation.

## Agent workflow

Carried forward from Assignment 1 — these are working habits, not tied to any
one project's topic or stack.

Before making a meaningful change:

1. inspect the existing implementation;
2. explain the problem being addressed;
3. identify which files need to change;
4. preserve accurate existing work where possible.

After making a meaningful change:

1. show the changed files;
2. summarise what changed;
3. explain how it improves the response to the brief;
4. run the relevant checks;
5. verify the output directly (open it in a browser) before treating it as
   done — do not accept a claim of correctness that wasn't checked;
6. report any remaining uncertainty.

Do not commit when checks are failing.

Do not commit automatically unless explicitly instructed.

Use small, meaningful commits that represent real stages of development.

### Required checks

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

Diagnose a failed check before changing anything — read what it names (the
file, the line, the contract) rather than guessing. Do not bypass, skip, or
weaken a check to make it pass.

### Platform-specific gotchas

- `pnpm check:evidence` also tracks every `STARTER_CONTENT` fragment and the
  placeholder key imagery shipped with the template. It will not pass while
  either remains — remove a fragment's marker as soon as that content is
  replaced with the real course's own, rather than leaving it for a final
  sweep.
- This repo carries **no reflection file**: `reflections/README.md` says
  assignment repos carry none, and the week 7 retro crit presents from
  `PROCESS.md` instead. Don't create a `reflections/assignment-2.md`.

### Process evidence

Keep `PROCESS.md` as a reading guide to the repository history, not a general
essay.

Each important claim in `PROCESS.md` must link to a real commit or compare
range.

Process evidence must reflect real decisions, not retries: cite the moments
where a correction changed the harness or the approach (a rule added here, a
check wired up, an attempt thrown away), not just attempts that eventually
passed.

### Repository safety

- Do not commit `.idea/`.
- Do not commit credentials, API keys, tokens or passwords.
- Do not commit temporary screenshots.
- Do not remove course checks or weaken tests just to make them pass.
- Do not deploy or make the repository public until explicitly instructed.
