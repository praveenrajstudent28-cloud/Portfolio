# Praveen Raj — Portfolio

Personal portfolio built with React and Vite, hosted on Firebase Hosting.

Live site: https://praveenraj.web.app

## Develop

```sh
npm ci
npm run dev
```

## Build and publish

```sh
npm run build
npx firebase-tools deploy --only hosting --project portfolio-3c236
```

Both praveenraj.web.app and the original portfolio-3c236.web.app address serve the same portfolio. Firebase deployment requires an account with access to the project. The hosting configuration is in `firebase.json` and `.firebaserc`.

## Content and assets

- `src/data/siteData.js`: projects, experience, achievements, skills, and contact links.
- `src/App.jsx`: page sections, project illustrations, and accessible mobile navigation.
- `src/styles.css`: responsive midnight-blue design, grid background, and portrait styling.
- `public/praveen-raj.jpeg`: supplied profile photograph, used in the header, hero, favicon, and social preview.
- `public/Praveen_Raj_Resume.pdf`: latest supplied resume.

Keep claims and metrics traceable to the resume or project evidence. Project illustrations are conceptual visuals, not screenshots of deployed products. Add repository or demo links only when the relevant project URLs are available.

## Manual release checks

- Review desktop, tablet, and mobile layouts, including narrow screens.
- Open and close the mobile menu; verify Escape returns focus to the menu button.
- Check section navigation, resume download, contact links, and profile image loading.
- Verify the deployed page and assets after publishing.
