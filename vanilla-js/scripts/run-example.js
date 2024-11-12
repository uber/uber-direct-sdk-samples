import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ES module equivalent of __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = yaml.load(
  fs.readFileSync(path.join(__dirname, "../config.yaml"), "utf8")
);

const exampleName = process.argv[2];

if (!config.examples[exampleName]) {
  console.error(`Example '${exampleName}' not found in config.yaml`);
  process.exit(1);
}

const example = config.examples[exampleName];

process.env.TITLE = example.title;
process.env.DESCRIPTION = example.description;
process.env.FILENAME = example.filename;

// Run the example
try {
  execSync("echo \"=== $TITLE ===\" && node ./scripts/typewriter.js \"$DESCRIPTION\" && bat --language=js --theme=\"OneHalfDark\" $FILENAME && node $FILENAME", { stdio: "inherit", timeout: 20000 }); // 20-second timeout
} catch (error) {
  console.error("Error running example script:", error);
  process.exit(1);
}
