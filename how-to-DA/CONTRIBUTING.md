# Contributing to Distribute Aid

Welcome! We're glad you want to contribute to our work at Distribute Aid! 💖 We’re not currently set up for async-only contributions so if you’re interested in joining, we encourage you to get in touch with our tech team lead at <tech@distributeaid.org> to get properly onboarded.

## Expectations

Most of our contributors put in an average of 5h a week. Volunteer participation fluctuates as people’s lives do, so we ask contributors to communicate proactively.

A lot of our team communication happens in virtual meetings: 1 sprint meeting/month and 2 tech hangs/week where we hang out and collaborate. We’ve seen that people who show up to these consistently are having a better experience, make more progress, growing in skills, personal abilities, and confidence!

Tech hangs: every Wednesday and Thursday from 6 to 8 pm CET/CEST
Sprint meetings: first hour of the tech hang on the first Wednesday of the month

Any other collaboration usually happens via Slack.

**Join our contributor team if:**

- You communicate clearly
- You’re reliable, organised and focused
- You have some availability overlapping with Central European Time
- You can make it to at least 1 tech hang per month
- You can come to at least 1 sprint meeting per quarter

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [What We Offer](#what-we-offer)
- [Finding an Issue](#finding-an-issue)
- [Creating Issues](#creating-issues)
  - [Sub Issues](#sub-issues)
- [Setting Up a Dev Environment](#setting-up-a-dev-environment)
- [Asking for Help](#asking-for-help)
- [Dev Process](#dev-process)
  - [Branch Strategy](#branch-strategy)
  - [Norms for Commits](#norms-for-commits)
  - [While You're Working](#while-youre-working)
  - [Making a Pull Request](#making-a-pull-request)
  - [Signaling Readiness](#signaling-readiness)
  - [Review Process](#review-process)
  - [Handling Common Situations](#handling-common-situations)
    - [Abandoned Pull Requests](#abandoned-pull-requests)
    - [Follow-Up Work](#follow-up-work)
  - [After Your PR is Approved](#after-your-pr-is-approved)
- [Code of Conduct](#code-of-conduct)

## Ways to Contribute

We’re looking for experienced engineers and designers, but you don’t need to already know our full stack as long as you know how to onboard yourself and ask for help if needed. Some experience with contributing to OSS is helpful. We welcome many different types of contributions, including:

- [Frontend](https://github.com/distributeaid/next-website-v2)
  - As a Frontend Developer at Distribute Aid, you’ll create new pages for, update, and maintain the Distribute Aid website, often working closely with our designers or other devs
  - Stack: NextJS, TypeScript, Strapi, Radix UI
- [Backend](https://github.com/distributeaid/aggregated-public-information)
  - As a Backend Developer at Distribute Aid, you’ll develop and maintain our backend for our website, work with APIs to share and structure collected needs data for our needs assessment as well as data visualisations to show our work. You’ll most likely collaborate with other Backend devs.
  - Stack: Strapi (our website’s backend), TypeScript, APIs
- Design
  - As a designer at Distribute Aid, you’ll create designs for our website and any app we’re working on to make the lives of aid workers easier and more effective. You’ll collaborate with frontend developers and are expected to learn to create issues on GitHub.
  - Stack: Figma, Canva, GitHub issues
- Data
  - Part data engineer, part data analyst, you’ll work with historical data from our Needs Assessment as well as future incoming Needs Assessment data. One of your main responsibilities will be to structure and present the data, creating visualisations that we can use on the website or show to partners to emphasise our impact.
  - Stack: Strapi, APIs, Salesforce
- [Documentation](https://github.com/distributeaid/docs)

## What we offer

Having a team structure in place allows us to foster both collaboration and individual growth. We emphasise doing peer reviews and encourage contributors who are willing to take on more responsibility to step up and get on track to become maintainers.

Regular contributors get access to periodic 1on1s with our tech lead to check in and enable personal development and growth at Distribute Aid. We’re also happy to write references for regular contributors as needed.

If this sounds interesting to you, [get in touch](mailto:tech@distributeaid.org) and tell us a bit about yourself.

## Finding an Issue

All available issues can be found in the "Ready for work" column on our [project board](https://github.com/orgs/distributeaid/projects/15).

Once you see an issue that you'd like to work on, please assign yourself to it.

## Creating Issues

On the [Issues page on Github](https://github.com/distributeaid/next-website-v2/issues), click the green `New Issue` button or this [New Issue Link](https://github.com/distributeaid/next-website-v2/issues/new).

- Add a descriptive title with an optional `[type tag]` such as [component] or [page]. In the description body summarize the issue
- Add external links, such as to Figma designs or external documentation, if applicable
  - If a Figma design exists, be sure to add screenshots. Visual explanations go a long way towards making things super clear!
- Add parts of the codebase where changes would be made
- Assign the issue to yourself or someone else, or leave for another person to pick it up
- Add appropriate labels and types
- After you create the issue, it'll be automatically added to our [project board](https://github.com/orgs/distributeaid/projects/15)

If the issue needs some precursor set up before someone can work on the issue (particularly for parents of sub issues) such as library installations and page or folder creations, then you must first set the issue as `Triage` until those appropriate changes are made and reviewed in a pull request. Otherwise, set the issue as `Ready for Work`.

### Sub Issues

For larger issues that can be split up into separate independent parts—like a new parent page with multiple children components, for example—you can create a parent issue, with multiple child issues. [See these slides](https://docs.google.com/presentation/d/1ToMum70-qDlaCv6m7X3HfGr3XjaX-UjyA36K4IElO5Y/edit?slide=id.g2dd259a195e_0_9#slide=id.g2dd259a195e_0_9) on how to create sub issues.

## Setting up a Dev Environment

Dev environment setup varies across our repos, so please refer to the README for any repo you'd like to contribute to!

## Asking for Help

The best way to reach us with a question when contributing is to ask on:

- The original Github issue
- Our Slack channel

## Dev Process

### Branch Strategy

We have a long-running branch `main` and create short-lived branches to develop parts of the website. Our branch naming convention is `type/issue#/condensed-issue-name`. An example of a short-lived branch would be `feat/365/about-us`. Connect words using a "-" as branch names cannot include empty spaces. Always ensure you're working on a separate branch to avoid merge conflicts.

### Norms for Commits

Most of our repos (except docs) use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). When crafting commit messages, group commits that are related to a particular topic. For example, if you're making commits related to the styling, only include files that are related to styling. This makes it easier to read through the commits and see the exact files that made changes to the styles. Proper commits make debugging easier in cases where we need to go through our git logs.

A good commit message will ideally have the following attributes:

- Subject => A summary of what you did in the commit.
- Body => A detailed explanation of the commit.

### While You're Working

The usual best practices apply:

- We prefer **small, focused pull requests** that address a single issue or implement one feature. Large PRs are harder to review and more likely to conflict with other changes. If your feature is large, consider breaking it into multiple PRs.
- Each time you start to work, merge `main` into your branch so that you're not behind and avoid merge conflicts later on
- When you're done for the day, commit and push your changes, even if it's not done or breaks, but so that maintainers can get an idea of the progress of an issue
- Make sure your [code is modular](https://dev.to/prxtikk/how-to-write-clean-and-modular-code-1d87) and free of unnecessary dependencies (see also the [SOLID design principles](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) and [KISS principle](https://changingminds.org/techniques/language/persuasive/keep_it_simple.htm))
- Make sure your code passes the applicable tests (see the README for the repo you're working in)
- Use reusable file names that make sense in more than one context. e.g. ~~`homepageData.ts`~~ `testimonials.ts`
- Follow the best practices for naming variables, case choice (like PascalCase, camelCase, or snake_case), etc. for each language you're writing in

### Making a Pull Request

- Include the purpose of the Pull Request and link the issue related to the PR (with the `#` sign)
- Consider providing an overview of why the work is taking place (with any relevant links). Don't assume familiarity with the history
- Be explicit about what feedback you want, if any: a quick pair of 👀 on the code, discussion on the technical approach, critique on design, a review copy
- Be explicit about when you want feedback, if the Pull Request is a work in progress, say so. Prefix the title of your PR with [WIP]
- Each repo is configured to require a review from the repo's review team, but if you'd like to add review requests from specific individuals (like if you’ve already discussed them reviewing the PR ahead of time, for instance, or if you want their particular input), that's fine!

### Signaling Readiness

- Ensure all CI checks are passing
- Make sure your branch is up to date with `main`
- If your PR is currently in "Draft" status, click "Mark ready for review"
- Post a link to your PR in the `#tech-github-chat` channel on Slack and say it's ready for review

### Review Process

**Initial Review Timeline**: Expect an initial review within **3-5 business days**. Complex PRs may take longer. If you haven't heard anything from the team (a verbal response or an emoji reaction on the `#tech-gitbub-chat` channel in Slack) within a week, please post again

**Follow-up Reviews**: After addressing feedback, please click "Re-request review" and post in Slack again

### Handling Common Situations

#### Abandoned Pull Requests

If you can no longer continue work on your PR:

- Comment on the PR and post in Slack explaining the situation
- Maintainers may either:
  - Take over the PR and push additional commits to complete it
  - Close the PR and create a new issue for others to pick up
  - Close the PR if the change is no longer needed

#### Follow-up Work

- Small follow-up changes should be addressed in the same PR when possible
- Larger follow-ups or new issues discovered during review should be handled in separate issues/PRs
- Use "TODO" comments sparingly and create follow-up issues for any deferred work

### After Your PR is Approved

Once you've received an approval from a maintainer you can merge your PR. If your branch has become out of sync with `main`, GitHub will show an "Update branch" button on your PR. If you run into merge conflicts you're not sure how to handle or if you have any other questions, please post in Slack!

---

_Questions about the PR process? Feel free to ask in the issue comments, discussions, or reach out to the maintainers directly._

## Code of Conduct

Please read our [Code of Conduct](https://distributeaid.org/code-of-conduct/)
