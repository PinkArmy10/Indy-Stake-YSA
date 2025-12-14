# Indy Stake YSA Website

Modern, responsive React website for Indianapolis Young Single Adults (YSA) ward events. Features Firebase real-time data, performant components, and mobile-first design deployed to GitHub Pages. It provides announcements, flyers, events, a contact directory, external YSA links, and an interactive calendar.

Live site: `https://pinkarmy10.github.io/Indy-Stake-YSA`

Link to mp4 of website: `https://1drv.ms/u/c/a05c8a2e45cbce3c/IQBiBHLNHWU9RY9s9ZGfOfESAYe3awcYFUGjklX5tsUiTWA?e=vx9B0g`

## Features

- **Home page**
  - Latest flyers and news displayed as event cards.
  - Image carousel for YSA flyers.
  - Local poll with results stored in the browser.
- **Events page**
  - List of upcoming meetings and activities driven from a JSON dataset.
  - Event details shown in a modal.
- **Calendar page**
  - Interactive calendar built with `react-big-calendar` and `moment`.
  - Preloaded Indy YSA events plus the ability to add, edit, and delete events directly on the calendar.
- **Contact page**
  - Contact cards for key YSA leaders.
  - Links to Indiana and Ohio YSA branch pages, GroupMe, and Facebook groups.
  - Contact form that stores submissions locally (per browser).
- **Responsive layout**
  - Two-column home layout on desktop (flyers + carousel).
  - Mobile-friendly stacking and modals.

## Tech Stack

- React (Create React App)
- React Router (HashRouter) for client-side routing
- Tailwind CSS utilities plus custom CSS
- `react-big-calendar` + `moment` for the calendar
- `gh-pages` for deployment to GitHub Pages
- Firebase 12.6.0 for data persistence

---

## Getting Started (Local Development)

### Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node)

### 1. Clone the repository

git clone https://github.com/PinkArmy10/Indy-Stake-YSA.git
cd Indy-Stake-YSA


### 2. Install dependencies

npm install

This installs React, React Router, `react-big-calendar`, `moment`, `gh-pages`, and other dependencies defined in `package.json`.

### 3. Run the app locally


- Opens the app at `http://localhost:3000`.
- The page reloads when you save changes.
- Console shows any lint or runtime errors.

---

## Build and Deployment

This project is configured to deploy to **GitHub Pages** using the `gh-pages` package.

### Scripts in `package.json`

The key scripts are:

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}


There is also a `homepage` field pointing to the GitHub Pages URL:
"homepage": "https://PinkArmy10.github.io/Indy-Stake-YSA"


### 1. Create a production build

npm run build

- Creates an optimized production build in the `build` folder.
- Minifies JavaScript and CSS and fingerprints filenames.

### 2. Deploy to GitHub Pages

npm run deploy

This will:

1. Run `npm run build` (via `predeploy`).
2. Push the contents of the `build` folder to the `gh-pages` branch of this repo.

After running:

- Check that the `gh-pages` branch on GitHub has a recent commit.
- In the repo settings, GitHub Pages **Source** should be set to `gh-pages` branch, `/ (root)`.

GitHub Pages may take a minute or two to update. Then open:

`https://PinkArmy10.github.io/Indy-Stake-YSA`

### 3. Updating the live site

For any code change:

1. Commit and push changes to the main branch:

git add .
git commit -m "Describe your change"
git push

2. Redeploy:

npm run deploy

3. Wait ~1–2 minutes and hard-refresh the page (Ctrl+F5).

---

## Routing and GitHub Pages

The app uses React Router with `HashRouter` so routes work correctly on GitHub Pages. URLs look like:

- Home: `https://pinkarmy10.github.io/Indy-Stake-YSA/#/`
- Events: `https://pinkarmy10.github.io/Indy-Stake-YSA/#/events`
- Contact: `https://pinkarmy10.github.io/Indy-Stake-YSA/#/contact`
- Calendar: `https://pinkarmy10.github.io/Indy-Stake-YSA/#/calendar`

Using `HashRouter` avoids 404 errors when reloading or sharing deep links on GitHub Pages.

---

## Calendar Library Attribution

The calendar page uses **react-big-calendar**:

- Library: `react-big-calendar`
- Repository: `https://github.com/jquense/react-big-calendar`
- Licensed under its respective license; see that repository for details.
