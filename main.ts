// The Funniest Excuse for Skipping a Meeting — make.fun one-liner entry.
//
// A single razor-sharp excuse for ducking a pointless meeting. The program
// writes exactly one line to /output/entry.txt (or to $MAKEFUN_OUTPUT_DIR
// when set) — no trailing newline, no extra text, byte-for-byte the entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I can't join—my camera is broken, my mic is haunted, and my soul left the chat at 9:15.";

// The gate: one line, 1–200 characters, not only whitespace. Refuse to write
// anything that would fail it instead of silently shipping a bad entry.
if (!excuse.trim() || excuse.length > 200 || excuse.includes("\n")) {
  throw new Error("excuse fails the one-line, 1–200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");

console.log(excuse);
