# Distribute Aid Docs

Public documentation for [Distribute Aid](https://distributeaid.org), built with [Astro Starlight](https://starlight.astro.build).

## Technologies Used

- [Astro](https://astro.build/) - Web framework
- [Starlight](https://starlight.astro.build/) - Documentation theme for Astro
- [starlight-openapi](https://github.com/HiDeoo/starlight-openapi) - API reference docs from OpenAPI specs
- [Yarn](https://yarnpkg.com/) - Package manager

## Setup

### Prerequisites

You'll need the following installed on your machine:

- [Node.js](https://nodejs.org/) version >=22.12.0 <=24.11.0
- [Corepack](https://nodejs.org/api/corepack.html) - Ships with Node.js but needs to be enabled

### Enable Corepack

This project uses Yarn 4 as its package manager, pinned via the `packageManager` field in `package.json`. Corepack ensures you're using the correct version of Yarn automatically. Run this once:

```sh
corepack enable
```

### Install dependencies

Once Corepack is enabled, install the project's dependencies:

```sh
yarn install
```

### Run the dev server

Start the local development server. The site will be available at [http://localhost:4321](http://localhost:4321) and will auto-reload as you edit files:

```sh
yarn dev
```

### Build for production

To create a production build of the site, run:

```sh
yarn build
```

The output will be in the `dist/` directory. You can preview the production build locally with:

```sh
yarn preview
```

## Code Quality

This project uses several tools to maintain code quality. They run automatically on commit via [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged), and in CI via GitHub Actions.

### Available scripts

| Script                | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `yarn format`         | Format all files with Prettier                                    |
| `yarn format:check`   | Check formatting without writing                                  |
| `yarn lint:md`        | Lint markdown files                                               |
| `yarn check:spelling` | Check spelling in markdown files                                  |
| `yarn check:links`    | Check for broken links in the built site (run `yarn build` first) |
| `yarn check:a11y`     | Build the site and run accessibility checks against it            |

### Tools

- [Prettier](https://prettier.io/) - Code formatter (markdown, CSS, JS/TS, JSON, YAML)
- [markdownlint](https://github.com/DavidAnson/markdownlint) - Markdown linting for structure and style
- [cspell](https://cspell.org/) - Spell checker
- [linkinator](https://github.com/JustinBeckwith/linkinator) - Broken link checker
- [pa11y-ci](https://github.com/pa11y/pa11y-ci) - Accessibility testing (WCAG2AA via axe-core)

## API Reference

The API reference docs are auto-generated from an [OpenAPI spec](./schemas/aggregated-public-information.json) produced by the [aggregated-public-information](https://github.com/distributeaid/aggregated-public-information) Strapi backend.

To regenerate the spec after API changes:

```sh
cd path/to/aggregated-public-information
yarn strapi openapi generate --output path/to/docs/schemas/aggregated-public-information.json
```

This requires the aggregated-public-information repo to be set up locally with dependencies installed and a `.env` file configured (see that repo's README).

## Contributing

See [CONTRIBUTING.md](./src/content/docs/how-to-DA/CONTRIBUTING.md) for guidelines on how to contribute. Bug reports and feature requests are welcome as GitHub issues.

## License

<!-- TODO: choose a license -->

Copyright (c) 2025-present Distribute Aid
