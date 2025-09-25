# SST Dashboard (Mobile App)

<div align="center">

<img alt="Expo" src="https://img.shields.io/badge/Expo-SDK_54-000?logo=expo&logoColor=white" />
<img alt="React Native" src="https://img.shields.io/badge/React%20Native-0.81-61dafb?logo=react" />
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white" />
<img alt="pnpm" src="https://img.shields.io/badge/pnpm-managed-orange?logo=pnpm" />
<img alt="Lint" src="https://img.shields.io/badge/ESLint-9-blue?logo=eslint" />

</div>

## Project Overview

SST Students Dashboard (mobile) is the app counterpart to the web dashboard. This repository currently contains a fresh Expo Router setup using React Native, TypeScript, Tailwind (via NativeWind), and Gluestack UI utilities for theming. The default screen renders a welcome message and a reusable Box component.

## Project Structure

```
Dashboard-App/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── assets/
│   └── images/
├── components/
│   └── ui/
│       ├── box/
│       └── gluestack-ui-provider/
├── .expo/
├── app.json
├── babel.config.js
├── eslint.config.js
├── expo-env.d.ts
├── global.css
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### Key Directories Explained

- `app/` – Expo Router file-based routes
  - `_layout.tsx` – Root layout using `Stack`
  - `index.tsx` – Home screen with Tailwind classes and a `Box` component
- `components/ui/` – Reusable UI components from Gluestack
  - `components/ui/box/` – Cross‑platform Box primitive from Gluestack components (`View`/`div`) with NativeWind styling
  - `components/ui/gluestack-ui-provider/` – Theme variables (light/dark) and providers for overlay/toast
- `assets/images/` – App icons, splash, and example images

## Tech Stack

- Framework: Expo (Router)
- Language: TypeScript
- UI: React Native + NativeWind (Tailwind CSS)
- Theming: Gluestack UI utilities with CSS variables
- Navigation: Expo Router `Stack`
- Platforms: Android, iOS, Web (via `react-native-web`)
- Package Manager: pnpm
- Linting: ESLint 9 (Expo config)

## Getting Started

Ready to contribute or set up the project locally? Check out our detailed setup guide:

**[View Contribution Guide](./CONTRIBUTING.md)**

The contributing guide includes:

- Complete installation instructions
- Development workflow
- Expo Setup on Mobile devices
- Code standards and guidelines
- Pull request process
- Commit conventions

## Quick Start

Prerequisites: Node.js 18+, pnpm

```bash
# Clone the repository
git clone https://github.com/Scaler-Innovation-Labs/Dashboard-App.git
cd Dashboard-App

# Install dependencies
pnpm install

# Start the development server
pnpm start
```

When the server is running, use the prompts to open:

- Android emulator or device
- iOS simulator or device
- Web browser (static output configured)

## Available Scripts

- `pnpm start` – Start Expo dev server
- `pnpm android` – Start and open on Android
- `pnpm ios` – Start and open on iOS
- `pnpm web` – Start and open in web
- `pnpm lint` – Run ESLint

## Configuration Highlights

- `tailwind.config.js` – Tailwind with `nativewind/preset`, dark mode via class, color tokens mapped to CSS variables
- `metro.config.js` – NativeWind integration loading `global.css`
- `babel.config.js` – Module resolver (`@` → project root), NativeWind and Worklets plugins
- `app.json` – Expo app config (icons, splash, platform settings, typed routes, React Compiler)

## Current UI

- Home screen with a welcome message
- Reusable `Box` component styled with NativeWind

## License

No license specified yet.
