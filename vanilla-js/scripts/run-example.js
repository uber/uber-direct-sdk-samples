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
execSync("npm run --silent run-example", { stdio: "inherit" });
