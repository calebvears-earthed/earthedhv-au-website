#!/usr/bin/env python3
"""Extract / repack the page template inside the bundled index.html.

index.html is a self-contained bundle. At load, the bundler runtime swaps the
whole <html> element for the JSON-encoded template in
<script type="__bundler/template">, so anything added to the outer <head>
(meta tags, CSS) disappears once the page renders. Page markup, CSS and
scripts must live in the template.

  python3 tools/template.py extract   # index.html -> tools/template.html
  python3 tools/template.py pack      # tools/template.html -> index.html
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"
TEMPLATE = ROOT / "tools" / "template.html"
PATTERN = re.compile(r'(<script type="__bundler/template">\s*)(.*?)(\s*</script>)', re.S)


def extract():
    html = INDEX.read_text(encoding="utf-8")
    m = PATTERN.search(html)
    TEMPLATE.write_text(json.loads(m.group(2)), encoding="utf-8")
    print(f"wrote {TEMPLATE.relative_to(ROOT)}")


def pack():
    html = INDEX.read_text(encoding="utf-8")
    m = PATTERN.search(html)
    # Same escaping the bundler uses so the payload cannot close the <script>.
    payload = json.dumps(TEMPLATE.read_text(encoding="utf-8"), ensure_ascii=False)
    payload = payload.replace("</", "<\\u002F")
    html = html[: m.start(2)] + payload + html[m.end(2):]
    INDEX.write_text(html, encoding="utf-8")
    print(f"packed {TEMPLATE.relative_to(ROOT)} into index.html")


if __name__ == "__main__":
    {"extract": extract, "pack": pack}[sys.argv[1]]()
