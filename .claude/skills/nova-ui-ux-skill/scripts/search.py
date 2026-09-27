#!/usr/bin/env python3
"""Small dependency-free local search helper for Nova UI/UX Skill.

This is intentionally a fallback searcher. When the full Nova catalog package is
synchronized, a richer search engine may replace it. The fallback keeps the skill
functional instead of referencing a missing script.
"""
from __future__ import annotations
import argparse, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT_EXTS = {".md", ".txt", ".json", ".yaml", ".yml", ".py", ".js", ".ts", ".tsx", ".css"}


def files():
    for p in ROOT.rglob("*"):
        if p.is_file() and p.suffix.lower() in TEXT_EXTS and ".git" not in p.parts:
            yield p


def score(text: str, terms: list[str]) -> int:
    low = text.lower()
    return sum(len(re.findall(re.escape(t.lower()), low)) for t in terms)


def design_system(query: str) -> str:
    q = query.lower()
    if any(x in q for x in ("dashboard", "saas", "admin", "operations")):
        direction = "Clean Premium"
    elif any(x in q for x in ("luxury", "creative", "brand", "fashion")):
        direction = "Liquid Identity / Clean Premium"
    elif any(x in q for x in ("3d", "product configurator", "spatial", "immersive")):
        direction = "3D/WebGL"
    elif any(x in q for x in ("cinematic", "storytelling", "scroll")):
        direction = "Scroll World"
    elif any(x in q for x in ("glass", "frosted", "translucent")):
        direction = "Liquid Glass"
    elif any(x in q for x in ("gradient", "shader", "ambient", "ai", "developer")):
        direction = "Shader Gradient"
    else:
        direction = "Clean Premium"
    return (f"Nova Design System\nQuery: {query}\n"
            f"Suggested starting direction: {direction}\n"
            "Validate this against the PRD/TRD and ask the user before locking a visual direction.\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query", nargs="+", help="search terms")
    ap.add_argument("--domain", action="append")
    ap.add_argument("--design-system", action="store_true")
    args = ap.parse_args()
    query = " ".join(args.query)
    if args.design_system:
        print(design_system(query))
    terms = [x for x in re.split(r"\s+", query.strip()) if x]
    hits = []
    for p in files():
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        s = score(text, terms)
        if s:
            hits.append((s, p, text))
    for s, p, text in sorted(hits, key=lambda x: (-x[0], str(x[1])))[:10]:
        print(f"\n## {p.relative_to(ROOT)} (score {s})")
        lines = text.splitlines()
        shown = 0
        for i, line in enumerate(lines, 1):
            if any(t.lower() in line.lower() for t in terms):
                print(f"{i}: {line[:240]}")
                shown += 1
                if shown >= 5:
                    break

if __name__ == "__main__":
    main()
