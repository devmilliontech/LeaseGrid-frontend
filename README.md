# LeaseGrid Frontend (Admin Panel)

This is the central frontend administration dashboard for **LeaseGrid**. It provides a modern, responsive, and robust UI for administrators to manage the complete LeaseGrid prop-tech and services ecosystem. 

Built with React, Vite, TypeScript, and Tailwind CSS, it features a highly modular structure tailored to handle users (Tenants, Landlords, Tradies), job ticketing, payments, disputes, and compliance monitoring.

## 🚀 Key Features

- **Dashboard**: Real-time overview of system health, active alerts, recent user activity updates, top landlords, and performing tradies.
- **User Management**: Filter, search, verify, suspend, and view comprehensive profiles across Tenants, Landlords, and Tradies.
- **Job Management**: End-to-end tracking of service jobs, budgets, scheduling, and tradie assignments with real-time status flows.
- **Payments**: Track transactions, status overrides, and platform revenue generation.
- **Disputes & Reviews**: Centralized dispute resolution, flagged review moderation, and ticket management using dual Grid/List views.
- **Support & Compliance**: Tooling to ensure platform security, verify identification documents securely, and manage incoming support threads.

## �️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [MUI (Material UI)](https://mui.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Charts:** [Recharts](https://recharts.org/)

## 📦 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed.

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/devmilliontech/LeaseGrid-frontend.git
   ```

2. Navigate into the directory:
   ```bash
   cd LeaseGrid-frontend
   ```

3. Install all dependencies:
   ```bash
   npm install
   ```

## 💻 Development

Start the Vite development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

## 🏗️ Production Build

To structure an optimized production build:

```bash
npm run build
```

Preview the minified production version locally before deployment:

```bash
npm run preview
```

## 📂 Architecture Overview

The codebase focuses heavily on standalone app shells with separated responsibilities:

- `src/components/appShell/` - Isolated feature modules such as `dashboard`, `user`, `job`, `payments`, `reviews`, and `support`.
- `src/components/common/` - Reusable primitives like standard Inputs, customizable Buttons, standard styling functions (`style.tsx`), Avatars, and Loaders.
- `src/components/sidebar/` - The main application control interface.
- `src/store/` - Global Zustand stores (e.g., authentication flow).
- `src/data/` - Mock data definitions driving standard tables.

## 📄 License

ISC License
