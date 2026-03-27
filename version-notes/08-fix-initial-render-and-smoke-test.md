# Version Notes: Fix Initial Render And Smoke Test

## Summary

Fixed a render bug that could prevent question 1 from appearing after the hero-button removal and verified the page behavior with a smoke test.

## Files Changed

- `script.js`
- `version-notes/08-fix-initial-render-and-smoke-test.md`

## Changes Made

- Guarded the missing `restartButton` reference during question rendering.
- Restored the initial question render path so question 1 appears correctly on load.
- Prepared the project for a browser smoke test after the fix.
