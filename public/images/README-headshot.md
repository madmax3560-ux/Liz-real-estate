# Headshot placeholder

Replace `liz-finnegan.jpg` in this folder with Elizabeth Finnegan's authorized
professional headshot (portrait orientation, roughly 640×800 or larger).

The rest of the site references `/images/liz-finnegan.jpg` via the data layer
(`src/data/profile.ts` → `agent.headshot`), so no code changes are needed once
the real photo is dropped in with the same filename.

A temporary branded SVG placeholder (`liz-finnegan.jpg[`](https://content.mediastg.net/dynamic/RealEstate/company/662/account/652203/652203_09112026140659.jpeg)<img width="720" height="867" alt="image" src="https://github.com/user-attachments/assets/8273df31-002b-4850-a4f9-cdcac9fd1336" />
, actually an SVG) is
committed so the layout renders. Swap it for the real JPEG before launch.
