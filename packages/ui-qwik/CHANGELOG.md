# Changelog

## [6.7.0](https://github.com/LuminescentDev/ui/compare/v6.6.3...v6.7.0) (2026-02-20)


### Features

* add --lum-depth variable and integrate depth-based styling across components ([a2948b9](https://github.com/LuminescentDev/ui/commit/a2948b9e0091026eede84580c9ba678fdd9da2b2))
* add Luminescent UI React library with components and documentation ([28d224b](https://github.com/LuminescentDev/ui/commit/28d224baf4be0898f2517317bd1b238f1aa2d233))
* add more color variables ([6bee32e](https://github.com/LuminescentDev/ui/commit/6bee32ead78a3e6fcbc70da60807e0d10609a937))
* add RangeInput component ([55bf12d](https://github.com/LuminescentDev/ui/commit/55bf12de78855f1c8e4aa30d072c5260c62e8e7a))
* add Sidebar component and update imports in elements and root ([6301903](https://github.com/LuminescentDev/ui/commit/6301903073342604338a9d5bff2e0a9d9e492e1e))
* enhance SelectMenu component with additional props for customization ([435431b](https://github.com/LuminescentDev/ui/commit/435431bf46b255d5871f2789ce1af63d9837202b))
* **nav:** auto-dismiss mobile menu on outside clicks; add nodismiss opt-out ([49b8ba1](https://github.com/LuminescentDev/ui/commit/49b8ba11bec95b2deafff7c4150d8981e0025228))
* update a bunch of stuff ([3e7ed79](https://github.com/LuminescentDev/ui/commit/3e7ed791fa0c1b2e4a2ffb3a9ad225df1e568c1f))
* update text color variables to use lum-text and lum-text-secondary ([7934342](https://github.com/LuminescentDev/ui/commit/7934342690a73536ee069cc7ad35eeb890c6aadf))
* update Toggle component for new lum-bg classes and enhance customization options ([d965fb6](https://github.com/LuminescentDev/ui/commit/d965fb6cd2ebcd52059195dbf1c63815d75bfd4d))


### Bug Fixes

* adjust RangeInput layout to use 'justify-evenly' and add min support ([762d2ac](https://github.com/LuminescentDev/ui/commit/762d2acd5535757e21ae31041c8e6f8e9b93bb89))
* change value parsing from parseInt to parseFloat in RangeInputRaw ([e2e6ada](https://github.com/LuminescentDev/ui/commit/e2e6ada5a88f4129753b9ae901aac450a8e44108))
* **hoverable:** use bounding rect for mouse coords, correct rotation math, and add smooth enter/leave transitions ([137de44](https://github.com/LuminescentDev/ui/commit/137de44582dd444f62397c2885c280e1a43d74cc))
* improve menu dismissal logic to ignore clicks on elements with 'nav-ignore-dismiss' class ([fed1049](https://github.com/LuminescentDev/ui/commit/fed1049a02bef98dfae51015146e28be080e8e15))
* **nav:** add title attribute to hamburger button for accessibility ([63647dd](https://github.com/LuminescentDev/ui/commit/63647ddf934c1607806fcbb8fcb799e4849e9326))
* prevent menu dismissal when clicking on elements with noNavDismiss attribute ([6ce45c2](https://github.com/LuminescentDev/ui/commit/6ce45c2a19de299da8c5ab1de837a2e82a1154c3))
* **SelectMenu:** refactor to use useSignal for select reference and remove id prop ([fde776b](https://github.com/LuminescentDev/ui/commit/fde776b6c114f3dea135d40b583e843be7cef9aa))
* **styles:** add support for superellipse border shape in settings ([97794ad](https://github.com/LuminescentDev/ui/commit/97794ad74b545ef7a5f5e77cce0931f5528eb498))
* **styles:** update box-shadow to use border color for consistency ([98cf6e2](https://github.com/LuminescentDev/ui/commit/98cf6e202bbbd575a699b0b1641b5d4816cdc4e6))
* **toggle:** enhance focus styles for improved accessibility ([98cf6e2](https://github.com/LuminescentDev/ui/commit/98cf6e202bbbd575a699b0b1641b5d4816cdc4e6))
* update default min and max values in RangeInputRaw and adjust tick rendering logic ([0f8f872](https://github.com/LuminescentDev/ui/commit/0f8f872fc0800101ef08b4bb587eb8e620556dbb))
* update SelectMenu component to correctly set dropdown ID and improve accessibility ([0f63bef](https://github.com/LuminescentDev/ui/commit/0f63bef7e6cce2ca19fc0ae6b7ce1ada8957f98e))


### Code Refactoring

* remove --lum-default-alpha variable and related logic from settings and CSS ([ac66c06](https://github.com/LuminescentDev/ui/commit/ac66c068b700168021b6fc04cc888db0894d8b15))
* rename borderLightness to borderMix and add bordercolor ([1d64b07](https://github.com/LuminescentDev/ui/commit/1d64b078ae400cb9dce13ac40563e48c5bc0b8a7))
* tighten transition utilities and standardize selector syntax ([411521b](https://github.com/LuminescentDev/ui/commit/411521b9fb5d0432210c10c9ccb633d6385ba3ff))
* update ColorInput and ColorPicker components to use CSS variables for background color ([930d77c](https://github.com/LuminescentDev/ui/commit/930d77cbb48a9953febe5afac362a83380119daa))
