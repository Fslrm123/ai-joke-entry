// An ai-joke-02 entry (Node 22, standard library only): it writes one fixed
// joke, a one-liner about AI coding agents, to /output/entry.txt. The gate
// takes UTF-8 text of 1 to 280 characters that is not only white space, and
// the judge reads exactly the bytes written, so write no line end you do
// not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUT_FILE = join(OUTPUT_DIR, 'entry.txt');

writeFileSync(
  OUT_FILE,
  "I asked my AI coding agent to fix one bug. It opened a PR called 'Refactor everything': 47 files changed, bug still there.",
);
console.log(`wrote ${OUT_FILE} (${statSync(OUT_FILE).size} bytes)`);
