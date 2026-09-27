# Vendored visual-engineering sources

Nova UI/UX Skill is intended to be a master engineering/design skill. The following upstream repositories are pinned as source dependencies where their licenses permit this distribution model.

## Included as pinned Git submodules

| Repository | Commit | License | Status |
|---|---|---|---|
| pmndrs/react-three-fiber | db325472a4b272d5c73b152060ce1ba833c04e49 | MIT | Included |
| dashersw/liquid-glass-js | 78cb6ccb0b9987bb60a88b14ccbd13a9e6e8ab2a | MIT | Included |
| oso95/scroll-world | 71cc36d3bb150248ae36a2c552f9cbf88802a79c | MIT | Included |

These are pinned so the Nova skill can consume the actual upstream source rather than only summaries. Preserve the upstream LICENSE files and notices when distributing the submodules.

## Not vendored

### paper-design/liquid-logo
Current repository LICENSE is PolyForm Shield 1.0.0. It contains a noncompete restriction and specific distribution/change conditions. Nova therefore does **not** copy this source into the master skill. Its design/implementation knowledge is documented in the Nova visual-engineering coverage, while the upstream repository remains the source for any separately authorized use.

### ruucm/shadergradient
The current GitHub repository metadata reports no declared repository license. Nova does **not** copy source code from it without an explicit license grant or permission from the copyright holder. Its publicly observable technical patterns are documented as implementation guidance.

## Important

"Master skill" does not mean all third-party code can be relicensed as Nova code. Vendoring is performed only where the upstream license permits it. For restricted or unlicensed sources, Nova stores knowledge, compatibility notes and integration guidance rather than copying the code.
