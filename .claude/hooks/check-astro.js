// Hook PostToolUse: cuando Claude Code edita un archivo .astro, corre `astro check`
// para detectar errores de tipos/plantilla al instante, sin esperar al build.
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

let input;
try {
  input = JSON.parse(readFileSync(0, "utf-8"));
} catch {
  process.exit(0);
}

const filePath = input?.tool_input?.file_path || "";
if (!filePath.endsWith(".astro")) {
  process.exit(0);
}

console.log(`[hook] ${filePath} cambió — corriendo "astro check"...`);
try {
  execSync("npx astro check", {
    stdio: ["ignore", "inherit", "inherit"],
    cwd: input.cwd || process.cwd(),
    shell: process.env.ComSpec || true,
  });
  console.log("[hook] astro check: sin errores.");
} catch (err) {
  console.log(`[hook] astro check encontró problemas (código ${err.status ?? "?"}).`);
}
