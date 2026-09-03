import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const lectures = api.nodes.filter((node) => node.type === "lectures");

// This course's own promises, from CLAUDE.md's "Image-based teaching" and
// "Curriculum coherence" sections — not the assignment's generic contract.

const FRAMEWORK_DIMENSIONS = ["urgency", "visibility", "meaning", "modality", "timing", "required"];

function readLectureMain(week: number): string {
  const slug = `week-${String(week).padStart(2, "0")}`;
  const path = resolve("dist", "lectures", slug, "index.html");
  expect(existsSync(path), `lecture page for ${slug} did not build at ${path}`).toBe(true);
  const html = readFileSync(path, "utf8");
  const mainStart = html.indexOf("<main");
  const mainEnd = html.indexOf("</main>");
  expect(mainStart, `${slug} has no <main> content region`).toBeGreaterThan(-1);
  return html.slice(mainStart, mainEnd);
}

describe("SLOP3030 course-design promises", () => {
  it("gives every teaching week at least one real embedded image", () => {
    for (const lecture of lectures) {
      const week = Number(lecture.meta?.week);
      const main = readLectureMain(week);
      expect(main.includes("<img"), `week ${week} (${lecture.id}) has no <img> in its teaching content`).toBe(
        true,
      );
    }
  });

  it("has every teaching week name at least two of the six analytical dimensions", () => {
    for (const lecture of lectures) {
      const week = Number(lecture.meta?.week);
      const main = readLectureMain(week).toLowerCase();
      const named = FRAMEWORK_DIMENSIONS.filter((term) => main.includes(term));
      expect(
        named.length,
        `week ${week} (${lecture.id}) only names [${named.join(", ")}] of the six-dimension framework`,
      ).toBeGreaterThanOrEqual(2);
    }
  });

  it("links the Warning Priority Lab from the interactives index", () => {
    const path = resolve("dist", "interactives", "index.html");
    expect(existsSync(path), "interactives index did not build").toBe(true);
    const html = readFileSync(path, "utf8");
    expect(
      /href="[^"]*\/interactives\/warning-priority-lab\/"/.test(html),
      "interactives index has no link to /interactives/warning-priority-lab/",
    ).toBe(true);
  });
});
