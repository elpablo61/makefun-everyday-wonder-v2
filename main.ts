import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Copy entry.txt byte-for-byte: the gate counts 1-200 characters, so the
// file must reach /output exactly as written, with no added content.
const entry = readFileSync(join(dir, "entry.txt"), "utf8");
writeFileSync(join(outDir, "entry.txt"), entry);
