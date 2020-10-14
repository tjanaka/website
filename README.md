# Tjanaka Website

This website builds to <https://github.com/tjanaka/tjanaka.github.io>, which is
served at <https://tjanaka.net>.

## Instructions

### Installation

```bash
npm install
```

### Development Server

This will serve the website at <https://localhost:8000> and reload changes to
source files:

```bash
npm start
```

### Command Reference

The following scripts are in `package.json`. Run them with `npm run <COMMAND>`.

- `start`: Start the development server.
- `build`: Build the website to the `build` folder.
- `lint`: Run eslint on JavaScript files in the repo.
- `linkinator`: Runs linkinator on the site to check for broken links.
- `test`: Runs any tests (e.g. linkinator) on the site. Can also invoke with
  `npm test`.
- `predploy`: Runs before the `deploy` command.
- `deploy`: Deploys the site to <https://github.com/tjanaka/tjanaka.github.io>.
  This is unnecessary because the CI already does this, but it does enable
  deployment from a local machine.
