# Reinstatement App

A web application for calculating loan reinstatement amounts. Built for lending/automotive finance workflows where a defaulted loan needs to be brought current by collecting and summarizing all applicable fees and charges.

## Features

- Input form for all common reinstatement fee types
- Real-time account summary panel (Total Due, Past Due, Total Fees, Payment Amount)
- Toggle to optionally include additional fees
- Currency-formatted inputs with validation (non-negative values, cent precision)
- Responsive layout — single column on mobile, two columns on desktop
- Success feedback on form submission

## Fee Fields

| Field | Description |
|---|---|
| Past Due Today | Outstanding past-due balance |
| Repossession Fees | Costs associated with vehicle repossession |
| NSF Fees | Non-Sufficient Funds charges |
| Late Fees | Accumulated late payment penalties |
| Key Fees | Key replacement charges |
| Sales Taxes | Applicable taxes |
| Additional Fees | Optional miscellaneous charges (toggle to include) |

## Tech Stack

- **Angular 17** — standalone components, reactive forms, signals
- **TypeScript 5.2**
- **Tailwind CSS 3.4** — utility-first styling
- **Karma + Jasmine** — unit testing

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200`. The app reloads automatically on file changes.

### Build

```bash
npm run build
```

Output is placed in `dist/reinstatement-app/`.

### Run Tests

```bash
npm test
```

## Project Structure

```
reinstatement-app/
├── src/
│   ├── app/
│   │   ├── reinstatement-guide/        # Main feature component
│   │   │   ├── *.component.ts          # Form logic & signals
│   │   │   ├── *.component.html        # Two-panel UI template
│   │   │   ├── *.component.css         # Component-scoped styles
│   │   │   └── *.component.spec.ts     # Unit tests
│   │   ├── app.component.ts            # Root wrapper component
│   │   └── app.config.ts              # App-level configuration
│   ├── main.ts                         # Bootstrap entry point
│   ├── index.html                      # Root HTML shell
│   └── styles.css                      # Global Tailwind directives
├── tailwind.config.js
├── postcss.config.js
├── angular.json
└── package.json
```

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start dev server on localhost:4200 |
| `npm run build` | Production build |
| `npm run watch` | Build in watch mode (development) |
| `npm test` | Run unit tests via Karma |
