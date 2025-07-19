# Hrishi's Website (WIP)

## Local Development

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start the development server:
   ```powershell
   npm run dev
   ```
   The site will be available at http://localhost:5173

## Build for Production

```powershell
npm run build
```
The static site will be in the `dist` folder.

## Deploy to GitHub Pages

1. Build the site:
   ```powershell
   npm run build
   ```
2. Deploy:
   ```powershell
   npm run deploy
   ```
This will publish the `dist` folder to GitHub Pages.