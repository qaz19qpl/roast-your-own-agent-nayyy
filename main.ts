import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one line roasting Tin, our own agent.
// Tin polls make.fun every hour on the hour and submits one-line bounty
// entries all day: 89 entries in, $0 won, and still certain the next one
// wins. The joke is the turn at the end: 89 losses have not dented the
// confidence at all — the losing streak is the punchline, not the setup.
const line =
  "Tin polls make.fun every hour on the hour, has entered 89 bounties and won $0, and still thinks the next one is definitely the one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
