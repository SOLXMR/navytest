# $XRPNAVY Website

A modern and engaging website for $XRPNAVY, combining the aesthetics of XRP Ripple and the U.S. Navy. This project showcases our cryptocurrency's vision, roadmap, team, and more.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Interactive components and engaging user experience
- Military-inspired design elements
- Integration with XRP themes
- Fixed navigation header with mobile responsiveness
- Social media integration
- Token information display

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SOLXMR/navyxrp.git
cd navyxrp
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
navyxrp/
├── src/
│   ├── assets/         # Static assets (images, SVGs)
│   ├── components/     # Reusable components (Navigation, Footer)
│   ├── pages/         # Page components (Home, About, Roadmap, Contact)
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Application entry point
├── public/            # Public assets (logo1.png, manifest.json)
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Deployment

The project is configured for deployment on Vercel:

1. The `vercel.json` configuration handles:
   - Build settings
   - Route configurations
   - Cache control headers
   - Static asset serving

2. Automatic deployments are triggered on push to the main branch

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Navy Blue: `#001F3F`
- Ripple Blue: `#23292F`
- XRP Blue: `#0095D9`
- Gold: `#FFD700`

### Typography
The project uses the Roboto Condensed font family for the military-inspired typography.

## Social Links

- Twitter: [@XRPNAVY](https://x.com/XRPNAVY)
- Telegram: [t.me/XRPNAVY](https://t.me/XRPNAVY)
- Linktree: [linktr.ee/XRPNAVY](https://linktr.ee/XRPNAVY)

## Buy $XRPNAVY

Token Issuer / Contract Address: `r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N`

Buy on [FirstLedger](https://firstledger.net/token/r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N/5852504E41565900000000000000000000000000)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- XRP Ledger for inspiration
- U.S. Navy for design inspiration
- The cryptocurrency community
