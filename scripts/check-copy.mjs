import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const textExtensions = new Set([".ts", ".tsx", ".css", ".md", ".json", ".html", ".txt", ".mjs"]);
const skipDirs = new Set(["node_modules", ".next", ".git", "public", "img", "out"]);

const rules = [
  { name: "em dash", re: /\u2014|&mdash;|&#8212;|&#x2014;/i },
  { name: "SAPN accreditation claim", re: /SAPN[\s-]*accredited/i },
  { name: "ElectraNet claim", re: /electranet/i },
  { name: "Troy named as a person", re: /\bTroy\b/ },
  { name: "Joshua named as a person", re: /\bJoshua\b/ },
];

function scan(text) {
  return rules.filter((rule) => rule.re.test(text)).map((rule) => rule.name);
}

const selfTest = scan("Sample \u2014 SAPN Accredited ElectraNet Troy Joshua");
if (selfTest.length !== rules.length) {
  console.error("Copy check self-test failed. Expected every rule to match.");
  console.error(selfTest);
  process.exit(1);
}

function walk(dir, hits) {
  for (const entry of readdirSync(dir)) {
    if (skipDirs.has(entry)) continue;
    const path = join(dir, entry);
    const info = statSync(path);
    if (info.isDirectory()) {
      walk(path, hits);
      continue;
    }
    if (path.endsWith("scripts/check-copy.mjs")) continue;
    if (!textExtensions.has(extname(path))) continue;
    const text = readFileSync(path, "utf8");
    const found = scan(text);
    if (found.length) hits.push({ path: path.slice(root.length), found });
  }
}

const hits = [];
walk(root, hits);

if (hits.length) {
  console.error("Copy check failed.");
  for (const hit of hits) {
    console.error(`- ${hit.path}: ${hit.found.join(", ")}`);
  }
  process.exit(1);
}

console.log("Copy check passed.");
