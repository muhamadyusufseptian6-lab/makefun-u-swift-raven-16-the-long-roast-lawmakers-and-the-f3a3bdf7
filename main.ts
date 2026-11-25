// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22+, stdlib only, deterministic: the same text every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry: one sentence, 1-320 characters. Setup: a lawmaker's authority
// (he wrote the AI Accountability Act). Turn: he cannot convert a file to
// PDF — he thinks "the PDF department" is a place you fax things to.
const ENTRY =
  "The congressman who wrote the 40-page AI Accountability Act printed it out, signed it in pen, and had his intern fax it to the PDF department.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir; // resolved from the script location, never from process.cwd()

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir; // this entry needs no input data; the dir is accepted and ignored

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
