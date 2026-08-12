# Replace CTA background image

## Goal
Swap the current contact/CTA section background (`cta-sky.jpg`) for a higher-quality, more polished real-estate image that keeps the sky + modern property feel.

## Steps
1. Generate a new background image using the agent-side image generator: a wide landscape photo of a modern luxury villa or apartment complex under a bright blue sky with soft clouds, warm daylight, clean composition, real-estate editorial style.
2. Upload the generated image to Lovable Assets and create a new `.asset.json` pointer (e.g. `src/assets/cta-home.jpg.asset.json`).
3. Update `src/routes/index.tsx` to import the new asset pointer and replace the `ctaSky` source in the Final CTA section.
4. Delete the old `src/assets/cta-sky.jpg.asset.json` pointer (the CDN asset itself can be removed if no longer referenced).
5. Run a build check and capture a preview screenshot of the CTA section to confirm the new image renders correctly and the text remains readable.

## Outcome
The "Let's make your property journey effortless" contact section will display a fresh, premium property background while keeping the existing white form card and overlay intact.
