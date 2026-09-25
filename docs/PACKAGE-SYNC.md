# Package Sync

The supplied Nova UI/UX Skill distribution is the reference package for this repository.

## Sync contract

1. Keep canonical source under `src/nova-ui-ux-skill/`.
2. Keep Claude distribution under `.claude/skills/nova-ui-ux-skill/`.
3. Keep CLI assets synchronized with canonical source.
4. Keep platform metadata under `.claude-plugin/`.
5. Run validation and smoke checks before release.
6. Update package version consistently across `skill.json`, plugin metadata, CLI package metadata, and release files.
7. Never reintroduce original upstream branding.

## Current reference build

- Name: Nova UI/UX Skill
- Version: 2.14.0
- Reference archive: `nova-ui-ux-skill-v2.14.0`
- Reference file count: 682
- Reference content size: ~21.7 MB

Because GitHub's connected write interface cannot directly stream a local archive as a git push, binary/data-heavy package synchronization may require a local git push or GitHub release upload. The repository structure is intentionally ready for that complete sync.
