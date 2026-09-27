#!/usr/bin/env python3
"""Validate Nova UI/UX Skill references and required files."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
required = [
    "README.md",
    "CLAUDE.md",
    "skill.json",
    ".claude-plugin/plugin.json",
    ".claude-plugin/marketplace.json",
    ".claude/skills/nova-ui-ux-skill/SKILL.md",
    ".claude/skills/nova-ui-ux-skill/references/production-readiness.md",
    ".claude/skills/nova-ui-ux-skill/references/quick-reference.md",
    ".claude/skills/nova-ui-ux-skill/references/pro-rules.md",
    ".claude/skills/nova-ui-ux-skill/scripts/search.py",
    "docs/PRD-TRD-DESIGN-SELECTION.md",
    "docs/EXTERNAL-REFERENCE-MATRIX.md",
    "docs/EXTERNAL-REFERENCE-COVERAGE.md",
]
missing = [p for p in required if not (ROOT / p).exists()]
if missing:
    print("MISSING:")
    for p in missing:
        print(f"- {p}")
    raise SystemExit(1)

skill = (ROOT / ".claude/skills/nova-ui-ux-skill/SKILL.md").read_text(encoding="utf-8")
refs = [line.strip("` ") for line in skill.splitlines() if "references/" in line and "`." in line]
for ref in refs:
    if ref.startswith("references/") and not (ROOT / ".claude/skills/nova-ui-ux-skill" / ref).exists():
        print(f"BROKEN SKILL REFERENCE: {ref}")
        raise SystemExit(1)

print(f"Nova UI/UX Skill validation passed: {len(required)} required files present.")
