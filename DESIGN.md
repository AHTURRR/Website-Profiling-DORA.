# DORA website direction

Reference: Outcrowd, Website for an Incident Management Platform, https://dribbble.com/shots/26742281-Website-for-an-Incident-Management-Platform . Use its centered composition, generous space, near-black surfaces, violet accent, and large application preview as direction. All displayed product screenshots belong to DORA; do not reuse the reference product or its claims.

Identity: research software by Metriks Studio. Curious, precise, collaborative. Indonesian interface, short benefit-led headings, technical detail progressively disclosed.

ENERGY 3 / RHYTHM 3 / MOTION 3 (three-point scale). Strong centered hero; asymmetric feature and repository sections; restrained team grid. One typographic focal point per section. The owner requested closer reference fidelity, stronger animation, and fully working dark/light modes.

Palette: dark uses near-black #08090d, surface #111218, text #f4f3f8, secondary #aaa9b8, violet #9e91ff, primary #6854df. Light uses paper #f7f6fb, white surface, text #22202e, secondary #625c70, violet #6143bc, primary #6244ca. Violet identifies actions and section emphasis in both themes. Dark remains the reference-led default; the explicit user selection is stored under dora-theme and applied before styles load.

The single hero lighting scene now uses a diagonal shaft and nine sparse light points to frame the real application screenshot and match the supplied reference. Light points are atmospheric, not data. This scene is the only ambient glow treatment. The floating rounded navigation uses the only backdrop blur, preserving readability over scrolling content. No global glass cards or glowing icons.

Typography: retain Plus Jakarta Sans, whose rounded forms suit the DORA wordmark and human research context. JetBrains Mono is limited to filenames, commands, and hashes. Headings use regular/medium weight, compact tracking, balanced lines. Body copy remains at least 14px.

Motion: CSS ambient light drifts at 16s and light points at 12s, paused outside the hero and when the document is hidden. A first-session-only 650–850ms intro brings focus from headline to the product. Three isolated below-fold moments (workflow screenshot, repository panel, team principles) use 650ms Web Animations on intersection. Content remains visible without enhancement, scroll is never intercepted, and scenes run once. Intro opacity starts at .45, so above-fold copy never disappears.

Controls use 160ms feedback, gallery switches 220ms, dialogs enter at 220ms and exit at 140ms with matching backdrop timing. Team monogram hover moves 5px, indicating the member-card grouping without implying a link. Primary-button sheen reinforces the download action only on fine-pointer hover. Reduced motion disables intro, ambient travel, scroll entrances, and hover movement; dialogs retain 100ms opacity. No animation dependency.

Icons communicate actual actions (download, theme, enlarge, source repository) and module subjects (dataset, pipeline, literature). External arrows distinguish links leaving the site; plus marks disclosure. Three equally sized primary-module panels represent the three supported research disciplines, while the node editor receives its own larger screenshot section. Team cards are equal because credits carry no ranking. Shadows are limited to the product frame and elevated overlays/navigation. Navigation and primary controls use a larger radius than content surfaces, following the supplied reference rather than a page-wide pill pattern.

Team: names and roles sourced on 2026-10-29 from app/ui/data/credits.json in NezzyGremory/Data-Overview-Research-Assistant. User explicitly authorized dummy details. All draft biographies visibly say Bio dummy. Monograms are text, not fabricated photographs. No invented social profiles or affiliations.

Architecture: two static React views at / and /tim, ordinary anchor navigation with browser-native history. Vercel's existing rewrite serves direct routes. Config-driven team records; static repository links without a GitHub API dependency at runtime. Native details for progressive disclosure and dialog for previews/features. No new package or service.

Release metadata: tag v6.0.0, asset Data-Overview-Research-Assistant-v6-Setup.exe, published 2026-10-18 and asset updated 2026-10-21, 99,735,251 bytes, SHA256 9cf4d44398aeb63afb863bcd5c431547d67441872f03dcda2f9344da6011f0c6. Source: GitHub releases/latest checked 2026-10-29. MIT license and Issues availability checked against repository metadata.

UI/UX Pro Max search: dark developer-platform result supplied dark-surface and contrast guidance. Its FAQ landing structure and green CTA did not match the user reference, so the supplied reference overrides those suggestions. No generated search results were persisted as authoritative design direction.
