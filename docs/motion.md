# Editorial motion

The motion follows the reading order: introduction, learning journey, then document detail.
CSS handles entrances and interaction feedback. A single IntersectionObserver reveals
below-the-fold content whenever it enters the viewport, then gently fades it out when it leaves
so the entrance can replay while scrolling in either direction. There are no new dependencies or
continuous JS scroll loops.

| Sequence | Trigger | Duration / easing | Reduced motion / fallback |
| --- | --- | --- | --- |
| Page entrance | Path changes | 360ms fade | Static |
| Hero headline | Home mounts | 950ms, stagger 130ms, cubic-bezier(.22,1,.36,1) | Static text |
| Portrait and introduction | Home mounts | 650–1100ms, short staged delays | Static |
| Section and card reveal | Enters viewport | 680ms, 24px rise, group delay 0–255ms | Static; no hidden-content class |
| Reading progress | Native document scroll timeline | Linear; CSS scroll timeline | Hidden when unsupported or reduced |
| Card / image / link feedback | Fine-pointer hover | 220–900ms, 3–5px lift, 1.035–1.045 image scale | Color feedback only |
| Worksheet entrance | Active worksheet changes | 420ms, 12px rise | Immediate content |
| Preview / navigation | Opens | 180–320ms | Immediate content |

Reveal animations are cancelled on route changes and on changes to the OS motion
preference. Keyboard focus immediately completes an in-progress reveal containing
the focused control. Native scrolling is preserved. All content is visible if the
observer or Web Animations API is unavailable.
