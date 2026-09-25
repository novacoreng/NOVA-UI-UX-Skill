# Repository Structure

Nova UI/UX Skill is organized as a single source-of-truth project with generated/distributed copies.

```
.
├── src/nova-ui-ux-skill/        # Canonical engine + data + templates
├── .claude/skills/              # Claude skill distribution
├── .claude-plugin/              # Claude plugin metadata
├── cli/                         # npm installer + bundled assets
├── stack/                       # Stack guidance and audit examples
├── gallery/                     # UI style gallery
├── projects/                    # Reference implementations
├── scripts/                     # Repository-level maintenance utilities
├── docs/                        # Architecture and release documentation
└── skill.json                   # Package metadata
```

## Canonical flow

`src/ → sync-assets → cli/assets + .claude/skills → validation → release`

Do not hand-edit mirrored data or scripts when an equivalent canonical source exists.

## Included knowledge

The distribution contains searchable catalogs for UI styles, colors, typography, UX guidance, charts, icons, motion, product patterns, Google Fonts, React/web guidance, and stack-specific rules.

It also includes platform templates for multiple AI coding assistants, reference projects, gallery tooling, tests, fixtures, and visual assets.

## Distribution snapshot

The v2.14.0 build contains 682 files and approximately 21.7 MB of source/package content before Git metadata.
