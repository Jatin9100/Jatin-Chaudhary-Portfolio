# Ghost mascot assets

| File | What it is |
|---|---|
| `ghost-character.js` | The runtime character. Dependency-free port of the Framer component, plus local additions. Loaded lazily by `script.js`. |
| `vendor/Ghost_Character_1.original.js` | Untouched copy of the Framer component, kept for provenance only. **Not loaded at runtime** (needs React and Framer's runtime). |
| `vendor/Interactive-Ghost.stub.js` | The re-export stub served by the share URL below. |

## Source

- Share URL: `https://framer.com/m/Interactive-Ghost-8YgVxA.js@lgasoF15PRKCtNH8UwXb`
- Resolves to: `https://framerusercontent.com/modules/edMNtxvwIt7O57Rix0Ce/lgasoF15PRKCtNH8UwXb/Ghost_Character_1.js`
- Retrieved: 2026-10-12
- SHA-256 of the original: `8782a96b87203f735d891a6be2cfcc1df60add4def40656a76481ffd823f7e11`

Nothing is hot-linked at runtime; the site only ever loads `ghost-character.js` from this folder.

## Local additions (props the original lacks)

`blinkAt`, `winkAt` / `winkEye`, moods `joy` and `think`, `tint`, `trackRadius`. The original's
`showGlow` and `enableChat` are honoured; the site passes `showGlow:false`, `enableChat:false`.
Timestamps use `GhostCharacter.now()` (`performance.now()`).

Only one instance can exist at a time (the original's gradient ids are fixed); a second `mount()`
returns the first.
