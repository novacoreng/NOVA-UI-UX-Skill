# Nova UI/UX Skill

Nova UI/UX Skill is the repository source of truth for professional UI/UX design intelligence.

## Repository layout

- `src/nova-ui-ux-skill/` — canonical engine, data, templates, and scripts.
- `.claude/skills/nova-ui-ux-skill/` — Claude skill distribution.
- `cli/` — npm CLI installer and bundled assets.
- `stack/` — stack guidance and audit examples.
- `gallery/` — style gallery and visual exploration app.
- `projects/` — reference implementations.
- `.claude-plugin/` — Claude plugin/marketplace metadata.
- `docs/` — architecture, release, sync, and contributor documentation.

## Source-of-truth rule

Edit canonical data and scripts under `src/nova-ui-ux-skill/`. The CLI asset copy and Claude distribution must be synchronized before release.

## Validation

Run the repository's validation, catalog, relevance, and stack smoke checks before publishing. Never claim verification that was not run.

## Production UX gate

Implementation work must account for complete UI states, responsive behavior, accessibility, localization, performance, security/privacy UX, real backend behavior, and visual QA. See `docs/PRODUCTION-READINESS.md`.

## Branding

The project is branded only as **Nova UI/UX Skill**. Do not restore upstream/original branding, links, author attribution, promotional copy, or package names.
