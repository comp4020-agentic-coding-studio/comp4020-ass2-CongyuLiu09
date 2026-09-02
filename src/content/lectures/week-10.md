---
title: "Cry wolf: trust and alarm fatigue"
description:
  What happens to a warning system's credibility the tenth time it's wrong,
  and why the driver-assistance features most likely to matter are also the
  ones most likely to get switched off
week: 10
date: 2027-04-26
teachers:
  - marisol-quaye
slides: /decks/week-10/
related:
  - sessions/10-cry-wolf
---

A warning that never fires isn't being watched — nobody knows whether it
works. A warning that fires constantly isn't watched either — the driver has
learned it doesn't need to be. The only zone where a warning does its job
sits narrowly between those two failures, and a real driver-assistance
system drifts out of it easily. The guiding question: what happens to a
warning system's credibility the tenth time it's wrong?

## Trust is a resource, and every false alarm spends it

Earlier weeks treated an alert as a message with a fixed meaning — this
colour means this urgency, this icon means this fault. What they didn't
model is that a driver's response isn't fixed; it's a running average of
every previous time this exact alert fired and what happened next. If a
lane-departure warning has chimed nine times on a familiar commute for nine
faded lane markings and zero actual departures, the driver reaches the
tenth chime already having decided, unconsciously, that this alert is
noise. The system hasn't changed. The driver's model of it has.

## Two things this isn't

It's tempting to treat a false alarm as a bug to be fixed, and the driver
who disables the alert as careless. Neither holds up. Forward-collision and
lane-departure systems trade false positives against missed detections as a
matter of tuning: a threshold set to catch every genuine lane departure
will also catch faded paint and unsignalled lane changes, because the
sensor can't always tell those apart from the outside. Loosen it and missed
detections rise instead — the false-alarm rate a driver experiences is a
chosen output of where a manufacturer set that threshold, and manufacturers
have made visibly different choices. And reduced response to an unreliable
signal is a well-documented perceptual response to any alert that fires
more often than it's informative, holding whether the operator is a driver,
a nurse, or a pilot — attention is finite, and a signal proven uninformative
is, correctly, no longer worth spending it on.

## Case study: from the cockpit to the dashboard

Alarm fatigue was studied first, and most rigorously, in aviation. Cockpit
alarm research through the 1970s–80s, prompted by accidents in which pilots
had silenced or ignored a correct warning after a string of false ones,
established the basic finding: as an alarm's positive predictive value
drops, trained operators reliably slow their response to it, and eventually
stop responding at all.

That same research lineage now studies ADAS directly. Lane-departure and
forward-collision warnings show meaningful false-positive rates under
specific conditions — faded lane markings, tight urban curves, a stopped
vehicle on an overpass read as a collision hazard — and survey data
consistently finds a share of owners disabling these features over alerts
they judged unnecessary. The mechanism is identical to the cockpit case:
the alert that fires wrongly the tenth time is the one already distrusted
by the time it might, on the eleventh, be right. A synthesis worth taking
from both literatures is graded, confidence-scored alerting — a soft cue
for an ambiguous case, a hard cue reserved for high-confidence ones —
rather than one binary alarm for every confidence level.

## Suggested reference images

- A lane-departure warning triggering on a road with faded or unusual lane
  markings, a common source of false positives
- An aviation cockpit alarm panel from a 1970s–80s airliner, for the direct
  historical parallel to automotive ADAS alerting
- An owner-forum or survey screenshot of drivers discussing disabling a
  lane-keeping or forward-collision feature

No assessment is due this week. Next week: what happens when the same
alert crosses a border, tuned to a different threshold of "urgent enough"
under Euro NCAP, NHTSA and Japanese regulation.
