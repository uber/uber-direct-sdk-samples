import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = yaml.load(
  fs.readFileSync(path.join(__dirname, "../config.yaml"), "utf8")
);

console.log("Usage: npm run example <example-name>\n");
console.log("Available examples:");

// List all examples with their titles
Object.keys(config.examples).forEach((key) => {
  console.log(`  - ${key}: ${config.examples[key].title}`);
});
