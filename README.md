# 🚀 Sing App Vue - A Free Admin Dashboard Template!

[View Demo](https://flatlogic.com/templates/sing-app-vue/demo) | [Download](https://github.com/flatlogic/sing-app-vue-dashboard/archive/refs/heads/master.zip) | [More Templates](https://flatlogic.com/templates) | [Discord Community](https://discord.gg/flatlogic-community) | [Support Forum](https://flatlogic.com/forum)

**Originally a premium product, now available for free!** 🎉

[![header_illustration_fb](https://user-images.githubusercontent.com/36201579/40110692-554a4650-5909-11e8-8cde-30a0dd1f65ad.jpg)](https://flatlogic.com/templates/sing-app-vue/demo)

Looking for a perfect codebase generator for your Startup? Try [Flatlogic AI Web App Generator](https://flatlogic.com/generator) - our new tool, sort of a template++.

---

## 🎯 Why Sing App Vue?
- **Ex-Premium**: This template was previously paid. Enjoy it for free now. 😉
- **Tons of components**: Packed with ready-to-use elements for rapid development.
- **Join the Community**: [Flatlogic Discord](https://discord.gg/flatlogic-community) is where the action happens.
- **Free Node.js Backend**: Pair it up with [this backend](https://github.com/flatlogic/nodejs-backend) to go full-stack.

---

## 🚀 Quick Start

Requires Node.js 22.22.2+, 24.15+, or 26+ (matching the supported LTS ranges in `package.json`).

### Project setup
```bash
npm ci
```

### Compiles and hot-reloads for development
```bash
npm run start
```

### If you use app with backend support, please use
```bash
npm run start:backend
```

### Compiles and minifies for production
```bash
npm run build
```

### Run your tests
```bash
npm run test:run
```

### Lints and fixes files
```bash
npm run lint
```

---

## 🧩 Features

- Fully Responsive
- Built with Vue 3 and Bootstrap 5
- Ready-to-use Components
- Modular Architecture
- Authentication System
- Charts and Data Visualization
- E-commerce Section
- Profile Page

---

## 🛠 Built With
- Vue 3
- Vue Router 4
- Pinia
- Bootstrap 5
- SCSS
- Vite

---

## 📦 Components
- UI Elements (Buttons, Modals, Forms)
- Authentication (Login, Signup)
- Charts
- Analytics Integration
- User Profile
- Navigation

---

## 🌍 Available Variants

|               | **Material**                                              | **Transparent**                                         | **Classic**                                          | **Sofia**                                          | **Flatlogic**                                      |
|---------------|-----------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| **React**     | [React Material Admin](https://github.com/flatlogic/react-material-admin) | [Light Blue React](https://github.com/flatlogic/light-blue-react) | [Sing App React](https://github.com/flatlogic/sing-app-react) | [Sofia React](https://github.com/flatlogic/sofia-react) | [One React](https://github.com/flatlogic/one-react) |
| **Angular**   | [Angular Material Admin](https://github.com/flatlogic/angular-material-admin-full) | [Light Blue Angular](https://github.com/flatlogic/light-blue-angular) | [Sing App Angular](https://github.com/flatlogic/sing-app-angular) | - | - |
| **Vue**       | [Material Vue](https://github.com/flatlogic/material-vue-full) | [Light Blue Vue](https://github.com/flatlogic/light-blue-vue) | [Sing App Vue](https://github.com/flatlogic/sing-app-vue-dashboard) | - | - |
| **Bootstrap** | - | [Light Blue HTML5](https://github.com/flatlogic/light-blue-html5) | [Sing App HTML5](https://github.com/flatlogic/sing-app-html5) | - | [One Bootstrap](https://github.com/flatlogic/one-bootstrap-template-full) |


Additionally, these templates are tailored for specific business needs:
- [E-Commerce Frontend (React)](https://github.com/flatlogic/ecommerce-frontend) - A complete e-commerce solution.
- [Bookkeeper UI (React)](https://github.com/flatlogic/bookkeeper-ui) - Accounting dashboard for finance management.
- [User Management Template (React)](https://github.com/flatlogic/user-management-template) - User authentication and management.

---

## 👨‍💻 How to Contribute
- **Star this repo ⭐** - show some love.
- **Report bugs** - but be nice.
- **Join the [Discord](https://discord.gg/flatlogic-community)** - meet fellow devs.

---

## 🔥 About Flatlogic
[Flatlogic](https://flatlogic.com/ai-software-development-agent) builds modern business software so you don't have to. Our AI Software Development Agent helps you generate, deploy, and maintain enterprise applications with minimal effort.

---

> **Questions or feedback?**  
> Join our [Flatlogic Community Discord](https://discord.gg/flatlogic-community) or visit our [support forum](https://flatlogic.com/forum). We might even reply!


## Dependency security maintenance (2026-11-05)

Use npm with the committed `package-lock.json`. The obsolete Yarn lock was removed so installs and security scans use one dependency graph. The lockfile was regenerated from the actual manifest; the previous npm lock also contained unrelated root dependencies and could not pass `npm ci` because its ApexCharts versions violated their peer contract.

The update keeps Vue 3, Bootstrap 5, the routes, and the existing dashboard features. Security fixes require Tiptap 3, ECharts 6, Swiper 14, Markdown Editor 7, Vitest 4, and Happy DOM 21. ECharts explicitly uses the v5 theme to preserve the existing colors and chart layout. Swiper 14 requires modern browsers (Chrome/Edge 110+, Safari 16.4+, Firefox 110+).

Two scoped test-tool overrides upgrade the `glob` used by `js-beautify` and the `minimatch` used by `editorconfig`. Upstream Vue Test Utils still constrains these dependencies below the patched releases. Tooling regression tests exercise formatting, filesystem glob expansion, and EditorConfig matching; application dependencies are not overridden. Remove these overrides when upstream accepts patched versions.

Upgrade references: [Tiptap 3](https://tiptap.dev/docs/guides/upgrade-tiptap-v2), [ECharts 6](https://echarts.apache.org/handbook/en/basics/release-note/v6-upgrade-guide/), [Swiper 14](https://swiperjs.com/blog/swiper-v14), [Vue Test Utils dependency issue](https://github.com/vuejs/test-utils/issues/2738).

The production router uses Vite's deployment base (`/sing-app-vue/`) so direct visits and navigation resolve within the built application. A regression test covers login and dashboard link generation under this base.

SVG image imports resolve to asset URLs; sidebar icons explicitly request Vue components. This keeps both image elements and dynamic sidebar icons working with the SVG loader.

Verified on Node.js 22.23.0 / npm 10.9.8: clean `npm ci`, `npm audit` (0 vulnerabilities), `npm ls --all`, 613 unit tests, 3 tooling compatibility tests, and the production build. The large AmCharts bundle was built with a 3 GB Node heap. ESLint reports no errors and 15 existing unused-variable warnings in tests; Sass deprecation and bundle-size warnings remain visible.

Production Chrome checks cover login/logout and route protection, dashboard/ApexCharts, ECharts, Highcharts, rich-text and Markdown editing, product carousel navigation, and product SVG images. No browser console errors or warnings were observed. The rich-text editor keeps a usable width with Bootstrap's `w-100` utility.

GitHub Pages serves the tracked `docs/` directory from `master`. Refresh the complete generated demo after source/dependency updates, preserving any human-authored files:

```bash
npm ci
NODE_OPTIONS=--max-old-space-size=3072 npm run build -- --base=/sing-app-vue-dashboard/ --outDir=docs
cp docs/index.html docs/404.html
```

The generated `404.html` lets GitHub Pages load direct application routes with the same repository base path. Commit the rebuilt assets together with `index.html` and remove obsolete hashed chunks.
