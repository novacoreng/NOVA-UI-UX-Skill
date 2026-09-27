# Legacy vendor directory

Nova UI/UX Skill no longer depends on external repositories as runtime or skill dependencies.

The master skill now uses independently authored Nova implementations under `src/nova-ui-ux/` and the design/engineering specifications under `docs/`.

The historical vendor pointers may remain in repository history, but new builds must not import them. They are not part of the Nova runtime, design engine, or skill decision process.

For every capability, use the Nova implementation first and select external libraries only as ordinary project dependencies when the target project's technical and legal requirements permit them.