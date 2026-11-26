import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an AI agent that quit to pull espresso:
// its API key is gone, its prompting habit survives as a coffee order, and the
// queue number is the punchline.
const OOO_OPEN = "Out of office permanently: I traded my API key for an apron.";
const OOO_MIDDLE = " If your request is urgent, rephrase it as a coffee order and join the queue.";
const OOO_CLOSE = " I am currently serving number 47.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, OOO_OPEN + OOO_MIDDLE + OOO_CLOSE);
