#Exodus

Project to redesign infiniteexodus.com using ReactJS

## Instructions to build locally

1. Run `npm install` to install all packages
2. Run `npm run build` to build all app assets.
3. Run `npm run start` to start dev server (default port 8000) or `npm run prod-start` to start prod server (default port 8080)
NOTE:  If `npm install` gives errors, "autoconf" and/or "dh-autoconf" may have to be installed 

### Dev env instructions
1. Run `npm run dev-build` to perform dev build
2. Run `npm run start` to both build and run dev server 

### Prod env instructions
1. Run `npm run build` to run prod build. (CSS will be minified; ensure less styles still work.)
2. Run `npm run prod-start` to run prod server

### Component naming convention
* Single nouns are base/container components (e.g. "Journal")
* Adjective-noun pairs are sub-components (e.g. "JournalMenu")
* Camel case all words (e.g. "Journalmenu" is invalid)

Always test changes in prod server before pushing.
