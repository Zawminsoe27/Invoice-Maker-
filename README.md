# Invoice

A single-page **invoice management** UI built with React. Create and review invoices in a dark-themed layout with filtering controls and a modal form for new invoices.

## Features

- **Dashboard** with invoice count and a filter menu (all, paid, pending, draft)
- **New invoice** flow: opens a full-screen modal form with bill-from / bill-to details, dates, payment terms, line items, and actions
- **Redux** global UI state (form open/close, selected invoice placeholder, filter field)
- **Responsive styling** with Tailwind CSS (slate background, violet accents)

## Tech stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| UI          | React 19                        |
| Build       | Vite 8                          |
| Styling     | Tailwind CSS 4 (`@tailwindcss/vite`) |
| State       | Redux Toolkit + React-Redux     |
| Components  | Headless UI (menus)             |
| Dates       | date-fns                        |
| Icons       | Lucide React                    |

## Requirements

- [Node.js](https://nodejs.org/) 18+ (or a compatible runtime), **or** [Bun](https://bun.sh/)

## Getting started

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server (Vite is configured to open the browser):

```bash
npm run dev
```

Other scripts:

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Dev server with HMR      |
| `npm run build`| Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint               |

Using Bun:

```bash
bun install
bun run dev
```

## Project layout

```
src/
  App.jsx              # Redux Provider + shell
  main.jsx             # React root entry
  index.css            # Global styles / Tailwind
  component/
    AppContent.jsx     # Layout: header, list, conditional form
    Header.jsx         # Title, filter menu, “new invoice”
    InvoiceList.jsx    # Invoice rows
    InvoiceForm.jsx    # New invoice modal form
  store/
    store.js           # Redux store configuration
    invoiceSlice.js    # Invoice-related reducers
```

## License

Private project (`"private": true` in `package.json`). Adjust as needed if you publish the repo.
