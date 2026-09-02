---
title: The next dashboard
description:
  If you were inventing this vocabulary today, with no legacy dashboard to
  imitate, what would you keep, and what would you throw out — and what
  happens once the vocabulary lives in software the manufacturer can change
  after the sale
week: 12
date: 2027-05-10
teachers:
  - marisol-quaye
slides: /decks/week-12/
related:
  - sessions/12-the-next-dashboard
  - assessments/instrument-cluster-you-trust
---

Every dashboard this course has studied so far, however digital it looked,
was still a product shipped once. The Mercedes MBUX Hyperscreen in week 1
could reconfigure its layout, but the alert vocabulary underneath it — what
counts as urgent, what colour it goes, what it's called — was fixed at the
factory and stayed fixed for the life of the car, exactly like the Jaguar
E-Type's needles. A software-defined vehicle breaks that assumption. Its
entire alert vocabulary is software, delivered over the air, which means a
car sold in March can have a materially different dashboard language by
December without a single physical component changing. The guiding question
for this last week is not "is this good?" but the one the whole course has
been quietly building toward: if you were inventing this vocabulary today,
with no legacy dashboard to imitate, what would you keep, and what would you
throw out?

## A synthesis, not a new topic

This week doesn't introduce a new channel — it asks what happens to every
channel already covered once it can be redesigned after the sale. Week 3's
idiot light was a hardware compromise: one bulb, one wire, cheap because it
had to be, permanent because changing it meant a new production run. A
software-defined telltale has no such excuse — which means when it's still
vague, that's a choice, not a cost constraint. Week 5's red/amber/green
convention and week 6's chime escalation were designed to be *learnable
once*; an over-the-air update can silently redraw the boundary between amber
and red, or swap a chime's pattern, and a driver's hard-won fluency in their
own car's language goes stale without their consent. Week 9's driver-
assistance alerts and week 10's alarm-fatigue research both assumed a fixed
false-alarm rate a driver calibrates trust against over months; a
manufacturer that retunes a forward-collision threshold by firmware update
mid-ownership is quietly moving the target the driver already learned to
read. And week 11's regulatory divergence, which treated "the same telltale,
different country" as a fact about manufacturing variants, becomes a fact
about *update rollout schedules* instead — the same car, in the same
driveway, can be one software version behind its neighbour's.

## Case study: Tesla and Rivian, the dashboard as a maintained product

Tesla's Model 3 and Model Y, previewed already in week 1, ship without a
separate instrument cluster: speed, range, and every telltale live on a
touchscreen running software Tesla updates on its own schedule, sometimes
overnight, sometimes changing what a warning icon looks like or when it
fires without the driver requesting anything. Rivian's R1T and R1S do keep a
dedicated driver display, but it too is a rendered surface, not a wired
panel — Rivian has, across firmware releases, altered how its driver-
assistance alerts present and even renamed features. In both cases the
*design intent* is genuinely attractive: a warning that turns out to be
miscalibrated, ambiguous, or wrong doesn't have to wait for a model year to
be fixed, it can be fixed for the entire fleet by Tuesday. The strength is
real — no other era of dashboard could recall a bad design decision.

The weakness is the one this course hasn't had to name directly until now:
a driver's mental model of their own dashboard is a learned vocabulary, and
this course has spent eleven weeks establishing how much cost goes into
learning it — foveal reading in week 7, a false-alarm threshold calibrated
over months in week 10, a colour convention trusted since week 5. An OTA
update can spend all of that without asking. Nobody voted on the new
chime; nobody was told, in language a non-engineer would read, why the
lane-keeping alert now trips earlier than it did last month. The car
changed the meaning of a word in a language the driver thought they already
spoke. A synthesis worth taking into the final assessment: an alert-
vocabulary change delivered over the air should be disclosed to the driver,
in plain language, at the moment it takes effect — not buried in a release
note nobody reads — because week 7 already established that a driver
cannot be expected to notice a meaning has changed just by looking at the
same icon.

## Suggested reference images

- A Tesla Model 3 or Model Y instrument display, or a comparable software-
  defined-vehicle cluster, showing how much of its "instrument panel" is
  actually rendered software rather than dedicated hardware
- A manufacturer's over-the-air release-notes page (Tesla or Rivian) listing
  a change to a driver-facing alert or warning behaviour, to see how such a
  change is actually communicated today
- A Rivian R1T or R1S driver display showing its driver-assistance status
  indicators, for comparison against Tesla's touchscreen-only approach

## What's due this week

The final assessment, *The Instrument Cluster You'd Trust*, is due this
Wednesday, 14 May. This lecture is deliberately the synthesis of the whole
semester rather than a self-contained new topic, because the assessment
asks for exactly that: a complete alert vocabulary, defended as a coherent
system, drawing on gauges, lights, icons, colour, sound, text, and — where
your chosen vehicle warrants it — HUD or driver-assistance alerts. There is
no week 13. Use the studio this week to pressure-test your vocabulary
against a peer's before you submit it.
