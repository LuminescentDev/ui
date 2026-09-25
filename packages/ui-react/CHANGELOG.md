# Changelog

## [7.0.0](https://github.com/LuminescentDev/ui/compare/v6.6.3...v7.0.0) (2026-09-25)


### ⚠ BREAKING CHANGES

* implement bottom tab bar for mobile and separate slot for hamburger panel and add ButtonContainer and Tabs

### Features

* add --lum-depth variable and integrate depth-based styling across components ([a2948b9](https://github.com/LuminescentDev/ui/commit/a2948b9e0091026eede84580c9ba678fdd9da2b2))
* add Luminescent UI React library with components and documentation ([28d224b](https://github.com/LuminescentDev/ui/commit/28d224baf4be0898f2517317bd1b238f1aa2d233))
* add support for panelProps and assign listbox role to SelectMenu dropdown panels ([f650bb6](https://github.com/LuminescentDev/ui/commit/f650bb6eae90fdc6cf578d8fdf35b7c4bfce1452))
* enhance SelectMenu component with additional props for customization ([435431b](https://github.com/LuminescentDev/ui/commit/435431bf46b255d5871f2789ce1af63d9837202b))
* implement bottom tab bar for mobile and separate slot for hamburger panel and add ButtonContainer and Tabs ([262cb20](https://github.com/LuminescentDev/ui/commit/262cb207149323b5bf8065756d69457d9c8dd8b2))
* **nav:** close mobile menu on outside click; add nodismiss prop ([1801ac6](https://github.com/LuminescentDev/ui/commit/1801ac6876b440ed26ea8eae9c922916abd204f3))
* **react:** implement new UI components including ColorPicker, Sidebar, and various input elements while refactoring Toggle and Dropdown. ([8fee5d6](https://github.com/LuminescentDev/ui/commit/8fee5d6030cadf752d6dbb70617d2cb7db3a8aba))
* update components to use ClassList and getClassObject for class management ([4d65907](https://github.com/LuminescentDev/ui/commit/4d65907f2f5015d459980e9ce317e450a3e179f7))
* update package.json files across multiple packages to include homepage, bugs, author, and repository information ([397765f](https://github.com/LuminescentDev/ui/commit/397765f6ea4ccd323a782a515e94db650df9f1c0))
* update version to 7.0.0-qwikv2 and enhance UI components ([8687da0](https://github.com/LuminescentDev/ui/commit/8687da0dc4fda3b6b9bd05e57ddc4c3a0e6b2465))
* vite+ ([73796db](https://github.com/LuminescentDev/ui/commit/73796dba80c1fe2e20e26ce1d600f5bd507d721a))


### Bug Fixes

* adjust mobile navigation bottom margin for safe area insets and optimize transform rendering ([febebf6](https://github.com/LuminescentDev/ui/commit/febebf682f2bf95712180d966eec481939ce94af))
* correct stop-color to stopColor in Birdflop logo gradient ([c959ee9](https://github.com/LuminescentDev/ui/commit/c959ee9ce8d1d52303a51462f6e70bd4db8ca950))
* improve menu dismissal logic to ignore clicks on elements with 'nav-ignore-dismiss' class ([fed1049](https://github.com/LuminescentDev/ui/commit/fed1049a02bef98dfae51015146e28be080e8e15))
* **nav:** add title attribute to hamburger button for accessibility ([63647dd](https://github.com/LuminescentDev/ui/commit/63647ddf934c1607806fcbb8fcb799e4849e9326))
* prevent menu dismissal when clicking on elements with noNavDismiss attribute ([6ce45c2](https://github.com/LuminescentDev/ui/commit/6ce45c2a19de299da8c5ab1de837a2e82a1154c3))
* **SelectMenu:** refactor to use useSignal for select reference and remove id prop ([fde776b](https://github.com/LuminescentDev/ui/commit/fde776b6c114f3dea135d40b583e843be7cef9aa))


### Code Refactoring

* consolidate component architecture and unify build configuration across UI packages ([7f6552e](https://github.com/LuminescentDev/ui/commit/7f6552eb0be61ad5ecc00ace1e1b313cf51e96a0))
* remove deprecated logo components and related types ([3cb6ebc](https://github.com/LuminescentDev/ui/commit/3cb6ebcb18a7e903980023f1acd34dd609c043de))
* Standardize import statements and formatting across components ([b39a21e](https://github.com/LuminescentDev/ui/commit/b39a21ee7eb3ce2e6173251e3962c3187565da3f))
* tighten transition utilities and standardize selector syntax ([411521b](https://github.com/LuminescentDev/ui/commit/411521b9fb5d0432210c10c9ccb633d6385ba3ff))
