import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const src = join(process.cwd(), ".output/public/client/_shell.html");
const destinations = [
  join(process.cwd(), ".output/public/index.html"),
  join(process.cwd(), ".output/public/client/index.html"),
];

if (!existsSync(src)) {
  console.error("copy-shell: source _shell.html not found at", src);
  process.exit(1);
}

for (const dest of destinations) {
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  console.log("copy-shell: wrote", dest);
}
