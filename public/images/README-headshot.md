# Headshot placeholder

Replace `liz-finnegan.jpg` in this folder with Elizabeth Finnegan's authorized
professional headshot (portrait orientation, roughly 640×800 or larger).

The rest of the site references `/images/liz-finnegan.jpg` via the data layer
(`src/data/profile.ts` → `agent.headshot`), so no code changes are needed once
the real photo is dropped in with the same filename.

A temporary branded SVG placeholder (`liz-finnegan.jpg`, actually an SVG) is
committed so the layout renders. Swap it for the real JPEG before launch.
