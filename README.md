# Shahrzad's Challenge — Fees Table

A small React app that shows how many coins you would receive for an order at a given broker. It reads a provided JSON file and displays the latest fees per (symbol, source) in a simple, responsive table.

## What it does
- Reads data from public/cleaned_data_large.json
- Keeps only the latest row for each (symbol, source) based on datetime
- Shows maker and taker fees for 3 notional tiers: 100, 500, 1000
- Lets you:
  - Search by symbol or source
  - Switch notional tier
  - Sort maker and taker columns (ascending/descending)
- Displays “—” when a fee is missing for the selected notional
- Works well on desktop and mobile

## Tech stack
- React + TypeScript (Vite)
- Bootstrap (styling) + a small custom CSS file


## Prerequisites
- Node.js 18+ and npm

## Setup
 Install dependencies
- npm install

Start the app (dev server)
- npm run dev
- Open the URL shown in your terminal (e.g., http://localhost:5173)

 Build for production (optional)
- npm run build
- npm run preview

## Using the app
- Search bar: Type to filter rows by symbol or source (case-insensitive).
- Notional selector: Choose 100, 500, or 1000 to switch fee tiers.
- Sorting: Click the Maker or Taker header to sort. Click again to toggle direction.
- Missing data: If a fee for the selected notional is missing, you’ll see “—”.

## Data expectations
- File path: public/cleaned_data_large.json
- The app uses only the latest entry per (symbol, source) based on datetime.
- Datetime format should be consistent. Invalid or missing datetimes are treated as oldest.

## Project scripts
- npm run dev: Start the development server
- npm run build: Create a production build
- npm run preview: Preview the production build locally

## Notes and assumptions
- Only the most recent row per (symbol, source) is shown.
- “—” is used for missing or invalid fee values.

