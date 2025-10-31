# White House Website

A realistic, static White House website built with React, TypeScript, and Vite.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

There are two methods to deploy to GitHub Pages:

### Method 1: GitHub Actions (Recommended)

1. Push your code to GitHub repository named `whitehouse`

2. In your GitHub repository:
   - Go to **Settings → Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy when you push to the `main` branch

3. Your site will be available at:
   - `https://[username].github.io/whitehouse/` (if using GitHub subdomain)
   - Or your custom domain (if configured)

### Method 2: Using gh-pages Package

1. Update the `base` path in `vite.config.ts`:
   - For custom domain: use `base: '/'`
   - For GitHub subdomain: use `base: '/whitehouse/'`

2. Install dependencies (already included):
   ```bash
   npm install
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. In GitHub repository settings:
   - Go to **Settings → Pages**
   - Set source to `gh-pages` branch
   - Your site will be available at `https://[username].github.io/whitehouse/`

## Custom Domain Setup

To use a custom domain "whitehouse":

1. The `CNAME` file is already in the `public/` folder with content: `whitehouse`

2. After deploying, go to your GitHub repository:
   - **Settings → Pages → Custom domain**
   - Enter your domain: `whitehouse` (or your full domain like `whitehouse.com`)
   - Enable "Enforce HTTPS" if available

3. Configure DNS with your domain provider:
   - Create a **CNAME record** pointing to `[username].github.io`
   - Or create an **A record** pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

4. Update `vite.config.ts` base to `'/'` if using a custom domain:
   ```typescript
   base: '/'
   ```

## Project Structure

```
whitehouse/
├── public/
│   ├── seal.svg          # White House seal
│   └── CNAME             # Custom domain configuration
├── src/
│   ├── App.tsx           # Main application component
│   ├── App.css           # Application styles
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment workflow
├── index.html            # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite configuration
└── README.md             # This file
```

## Quick Start for GitHub Pages

1. **Create a new GitHub repository** named `whitehouse`

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[username]/whitehouse.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository **Settings → Pages**
   - Source: **GitHub Actions**
   - The workflow will deploy automatically

4. **Set up custom domain (optional):**
   - Add your domain in **Settings → Pages → Custom domain**
   - Update DNS records as described above
   - Change `base` in `vite.config.ts` to `'/'`