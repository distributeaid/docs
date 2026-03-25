# DistributeAid Docs

Public documentation for [DistributeAid](https://distributeaid.org), built with [Astro Starlight](https://starlight.astro.build).

## Technologies Used

- [Astro](https://astro.build/) - Web framework
- [Starlight](https://starlight.astro.build/) - Documentation theme for Astro
- [Yarn](https://yarnpkg.com/) - Package manager

## Setup

### Prerequisites

You'll need the following installed on your machine:

- [Node.js](https://nodejs.org/) version >=20.0.0 <=24.11.0
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

## Contributing

See [CONTRIBUTING.md](./how-to-DA/CONTRIBUTING.md) for guidelines on how to contribute. Bug reports and feature requests are welcome as GitHub issues.

## License

<!-- TODO: choose a license -->

Copyright (c) 2025-present Distribute Aid
