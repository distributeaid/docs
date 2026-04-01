---
title: Aggregated Public Information
description: Documentation for the Distribute Aid Strapi CMS backend.
---

> **Note:** This page is mirrored from the [aggregated-public-information README](https://github.com/distributeaid/aggregated-public-information). Please make edits there.

This project uses [Strapi](https://strapi.io) as a CMS backend. For most information about contributing to DA (e.g. our dev process and asking for help), please refer to the [general DA contributing guide](/getting-started/contributing/).

## Dev Environment Setup

### Clone this repository

```bash
git clone git@github.com:distributeaid/aggregated-public-information.git
cd aggregated-public-information
```

### Install nvm

[Node.js](https://nodejs.org/en) 18.17 or later is required.

Node Version Manager (nvm) is used to manage Node.js versions:

- macOS/Linux: [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)
- Windows: [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows)

### Install yarn

To build dependencies, you should also have yarn installed on your system. If it is not yet installed, you can run:

```bash
npm install --global corepack
corepack enable
hash -r
```

## Running a Local Site

Once you have a development environment, you can set up your local site!

### Set Up Local Private Keys

```bash
./setup.bash
```

### Install your packages

```bash
yarn install
```

### Start Your Server

In one terminal, run `develop`, this will live rebuild your application as you make changes:

```bash
yarn develop
```

If you want auto-reload disabled, you can just run `build` and then `start`:

```bash
yarn build
yarn start
```

### Run Server Tests

```bash
yarn test
```

> **Note:** This depends on your application being built! If you don't run `yarn develop` then you must run `yarn build` after each change before running `yarn test`. We have provided `yarn test:without-build` as a convenience in this case.

### View the Site and Set Up an Admin User

If you are running locally, your site should be available in the output after you run `yarn develop` - you will see something like:

```text
One more thing...
Create your first administrator by going to the administration panel at:
┌─────────────────────────────┐
│ http://localhost:1337/admin │
└─────────────────────────────┘
```

If you run into trouble, please check out:

- [How to reset your password](https://docs.strapi.io/cms/cli#strapi-admin-1)
- To recover the email address you used to sign up, run:

```bash
npx strapi console
await strapi.query('admin::user').findMany()
```

## Code Checks

Before creating a pull request, test a final time and check for errors:

```bash
yarn check:all
```

We provide a couple of scripts to automatically fix linting and formatting issues, where possible:

```bash
yarn lint:fix
yarn format:fix
```

## API Testing

We use [Bruno](https://www.usebruno.com/) to create and run API tests. See the [Bruno test docs](https://github.com/distributeaid/aggregated-public-information/blob/main/tests/api-tests/bruno-test.md) for setup and usage instructions.

## Learn More About Strapi

- [Resource center](https://strapi.io/resource-center)
- [Strapi documentation](https://docs.strapi.io)
- [Strapi tutorials](https://strapi.io/tutorials)
- [Strapi blog](https://strapi.io/blog)
- [Discord](https://discord.strapi.io)
- [Forum](https://forum.strapi.io/)
- [Awesome Strapi](https://github.com/strapi/awesome-strapi)

### API Usage

- [Populate relations](https://docs.strapi.io/cms/api/rest/guides/understanding-populate) – Learn how to populate nested and relational data in Strapi API responses.

## Troubleshooting

If you run into any issues, reach out to the team on the `#tech` channel on Slack!
