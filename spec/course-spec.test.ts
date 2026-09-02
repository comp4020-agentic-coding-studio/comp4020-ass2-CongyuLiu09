import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

// This deliverable's spec: https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/assessments/assignment-2/

describe("assignment 2 spec", () => {
  it("keeps the three digits the repo was provisioned with", () => {
    // Assigned in the "course code: SLOP1030" commit; only the level (first) digit is yours to change.
    expect(api.course.code.slice(-3)).toBe("030");
  });

  it("runs across twelve dated teaching weeks", () => {
    const sessions = byType("sessions");
    const weeks = sessions.map((node) => node.meta?.week).sort((a, b) => Number(a) - Number(b));
    expect(weeks, "expected one session per teaching week, 1 through 12").toEqual(
      Array.from({ length: 12 }, (_, i) => i + 1),
    );
  });

  it("has at least one lecture whose deck actually built", () => {
    const decksLinked = byType("lectures").filter((node) =>
      /^\/decks\/[a-z0-9-]+\/$/.test(String(node.meta?.slides ?? "")),
    );
    expect(decksLinked.length, "no lecture links a deck via `slides:`").toBeGreaterThan(0);
    for (const lecture of decksLinked) {
      const deckPath = resolve("dist", String(lecture.meta?.slides).replace(/^\//, ""), "index.html");
      expect(existsSync(deckPath), `${lecture.id} links a deck that didn't build at ${deckPath}`).toBe(
        true,
      );
    }
  });

  it("has assessment weights that add up to 100%", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });
});
