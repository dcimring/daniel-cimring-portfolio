# Design System: Builder's Log

The whole site reads as one terminal session. Sections are commands (`$ whoami`, `$ ls -l projects/`, `$ history`) and their content is the output. The monospace type and command framing carry the personality, so colour, decoration and motion stay restrained.

## Colors

| Token        | Value     | Use                                  |
| ------------ | --------- | ------------------------------------ |
| `background` | `#0d1210` | The only page surface                |
| `ink`        | `#d7e2da` | Body text                            |
| `bright`     | `#ffffff` | Name, project names, large statement |
| `muted`      | `#8fa097` | Prompts, tags, captions              |
| `accent`     | `#6ee7a8` | Links, highlights, primary button    |
| `warn`       | `#f2c14e` | `local` project status only          |
| `rule`       | `#2a352f` | Divider lines in the project list    |

Mint is an interface colour. Never tint the portrait with it.

## Typography

JetBrains Mono everywhere, in lower case for names, commands and labels. Body copy keeps normal sentence case. The hero name, footer email and project-page titles are the only very large type, at weight 800 with tight tracking. Smallest type is 12px.

## Layout

- One centred column, max 1240px, 16px gutter on phones and 48px from tablet up.
- 0px radius everywhere. No cards, shadows or gradients. The project list is the only place with divider lines.
- Phones read name, portrait, about, button. From 1024px the portrait takes its own column.
- Project rows stack on phones and become a four-column listing from 768px.
- Links and buttons have tap targets of about 44px on phones.

## Portrait

Plain high-contrast black and white, with its blacks graded to the page background. It uses `mix-blend-lighten` so compression can't leave a visible box around it. Scanlines, grain, pixelation, glitches and green tints were all tried in November 2026 and rejected, so don't reintroduce them without asking.

## Motion

The hero cursor blink is the only animation, and it respects `prefers-reduced-motion`. Links change colour on hover. Anchors scroll smoothly.

## Accessibility

Links are real anchors with visible underlines. Keyboard focus is a 3px square mint ring. There is a skip link. Prompts and captions in `muted` pass 4.5:1 on the background.

## Brand assets

`public/favicon.svg`, `public/apple-touch-icon.png` and `public/og.jpg` still use the previous yellow-and-black identity and need redrawing for this design.
