# Praveen Raj — Portfolio

Personal portfolio built with React and Vite, hosted on Firebase Hosting.

**Live website:** [praveenraj.web.app](https://praveenraj.web.app)

## Start from scratch on a new computer

You do not need any existing website files, a Firebase account, or environment variables to run this project locally. Follow the steps below on Windows, macOS, or Linux. An internet connection is needed to download the repository and install dependencies.

### 1. Install the tools

- **Node.js 22**, version **22.12.0 or newer within 22.x**, from [Node.js downloads](https://nodejs.org/en/download). npm is included with Node.js. This repository's `.nvmrc` and `package.json` specify the same version family; [Vite requires a supported Node.js version](https://vite.dev/guide/).
- **Git** from [git-scm.com](https://git-scm.com/downloads) if you want to clone, pull updates, or contribute changes. You can skip Git if you only use the ZIP download option.
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/), and a web browser.

After installation, open a new terminal. On Windows, Command Prompt is a straightforward option; on macOS or Linux, use Terminal. Check the installed tools:

```sh
node --version
npm --version
git --version
```

Skip `git --version` if you chose not to install Git. `node --version` should show `v22.12.0` or a newer `v22.x` release.

Install the package manager version used by this repository:

```sh
npm install --global pnpm@10.12.4
pnpm --version
```

The expected pnpm version is `10.12.4`. See the [pnpm installation guide](https://pnpm.io/installation) if your system needs a different installation method.

### 2. Download the website code

Choose **one** of these options.

**Option A — Clone with Git (recommended for ongoing work)**

In your terminal, navigate to the folder where you want to keep the project, then run:

```sh
git clone https://github.com/praveenrajstudent28-cloud/Portfolio.git
cd Portfolio
```

**Option B — Download a ZIP (no Git required)**

1. Open the [GitHub repository](https://github.com/praveenrajstudent28-cloud/Portfolio).
2. Select **Code → Download ZIP**.
3. Extract the ZIP completely. Do not work inside the compressed archive.
4. Open the extracted `Portfolio-main` folder in your editor, then open the editor's terminal. Alternatively, use `cd` in a terminal to enter that folder.

For example, on Windows, replacing the path with your own extracted folder:

```sh
cd "C:\Users\YourName\Downloads\Portfolio-main"
```

For either option, the terminal must now be in the folder containing `package.json`, `pnpm-lock.yaml`, and `src`.

### 3. Install the project dependencies

```sh
pnpm install --frozen-lockfile
```

This downloads the libraries into `node_modules` using the versions recorded in `pnpm-lock.yaml`. Run it after the first download and whenever a pulled update changes dependencies.

Use pnpm for dependency management in this repository. `npm ci` is not the setup command here because there is no committed `package-lock.json`.

### 4. Start the local website

```sh
pnpm dev --host 127.0.0.1
```

Open **http://localhost:5173** in your browser, or use the exact local URL printed in the terminal if that port is already occupied. Keep the terminal running while working on the website. Press **Ctrl+C** to stop the server.

Saving a source file updates the browser automatically. Local edits stay on your computer until you separately push them to GitHub or deploy them.

## Make changes

Open the downloaded folder in your editor with **File → Open Folder**. These are the main files to edit:

| File | What it controls |
| --- | --- |
| `src/data/siteData.js` | Projects, experience, achievements, skills, and contact links |
| `src/App.jsx` | Page sections, project illustrations, and mobile navigation |
| `src/styles.css` | Colors, background, typography, spacing, and responsive layouts |
| `index.html` | Browser title, search description, canonical URL, and social preview metadata |
| `public/praveen-raj.jpeg` | Profile photo used in the header, hero, favicon, and social preview |
| `public/Praveen_Raj_Resume.pdf` | Downloadable resume |
| `firebase.json` / `.firebaserc` | Firebase sites and deployment configuration |

For a first edit, change a project description in `src/data/siteData.js`, save it, and check the Projects section in your local browser. Preserve the surrounding JavaScript quotes, commas, and brackets.

To update the resume or photo, replace the corresponding file in `public` while keeping its filename. If you rename an asset, update all references to it as well.

Keep claims and metrics traceable to the resume or project evidence. Project illustrations are conceptual visuals, not screenshots of deployed products. Add project repository or demo links when those URLs are available.

## Build and check before sharing changes

Create the production version:

```sh
pnpm build
```

Vite writes the output to `dist`. Edit the source files, not the generated files in `dist`.

Preview that production build locally:

```sh
pnpm preview --host 127.0.0.1
```

Open the URL printed in the terminal (normally **http://localhost:4173**). Run `pnpm build` again after further edits to refresh the preview's files. Press **Ctrl+C** when finished.

Before publishing:

- Review desktop and mobile layouts, including a narrow screen.
- Open and close the mobile menu; check that Escape closes it and returns focus to the menu button.
- Check navigation, resume download, contact links, and profile images.
- Check the browser console for errors.

## Get newer code or contribute

If you cloned with Git, check for local edits before pulling updates:

```sh
git status
```

Commit or stash work you want to keep, then update a clean checkout:

```sh
git pull --ff-only
pnpm install --frozen-lockfile
```

For contributions, create a branch, edit and verify your changes, and commit the relevant files:

```sh
git switch -c improve-portfolio
git add src/App.jsx src/styles.css src/data/siteData.js
git commit -m "Improve portfolio content and layout"
git push -u origin improve-portfolio
```

Adjust the `git add` filenames to match what you actually changed. Pushing requires GitHub sign-in and write access. If you do not have write access, fork the repository on GitHub and clone your fork, then open a pull request to this repository. A ZIP download does not include Git history; use a clone for pulling and contributing.

## Publish to Firebase (maintainers only)

Local development does not require this step. To publish, sign in with an account authorized for the existing Firebase project:

```sh
npx firebase-tools login
pnpm build
npx firebase-tools deploy --only hosting --project portfolio-3c236
```

The configuration deploys the same portfolio to both [praveenraj.web.app](https://praveenraj.web.app) and the original [portfolio-3c236.web.app](https://portfolio-3c236.web.app). Pushing to GitHub alone does not publish a Firebase release in this repository.

For your own independent portfolio, create your own Firebase project and configure its site IDs and `.firebaserc` before deploying; replace the personal content and public URLs too.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| `node`, `git`, or `pnpm` is not recognized | Install the missing tool, close the terminal, and open a new one so its PATH is refreshed. |
| PowerShell says `npm.ps1` or `pnpm.ps1` cannot run | Use Command Prompt, or call `npm.cmd` / `pnpm.cmd` in PowerShell. |
| `package.json` cannot be found | Run the command from the downloaded project folder, not its parent folder or the ZIP archive. |
| Unsupported Node.js version | Install Node.js 22.12.0 or newer within 22.x, reopen the terminal, and check `node --version`. |
| Dependency download or registry error | Check internet/VPN access and `pnpm config get registry`. For public packages, try `pnpm install --frozen-lockfile --registry=https://registry.npmjs.org`. |
| Port 5173 is in use | Open the alternative URL Vite prints, or run `pnpm dev --host 127.0.0.1 --port 5174`. |
| Production preview shows old content | Run `pnpm build` again and refresh the page. |
| Firebase reports a permission error | Sign in with an account authorized for the project. Local development still works without Firebase access. |
