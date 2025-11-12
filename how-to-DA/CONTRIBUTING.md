# README

Welcome! We're glad you want to contribute to our work at DistributeAid! 💖 We’re not currently set up for async-only contributions so if you’re interested in joining, we encourage you to get in touch with our tech team lead at <tech@distributeaid.org> to get properly onboarded.

## Expectations

Most of our contributors put in an average of 5h a week. Volunteer participation fluctuates as people’s lives do, so we ask contributors to communicate proactively.

A lot of our team communication happens in virtual meetings: 1 sprint meeting/month and 2 tech hangs/week where we hang out and collaborate. We’ve seen that people who show up to these consistently are having a better experience, make more progress, growing in skills, personal abilities, and confidence!

Tech hangs: every Wednesday and Thursday from 6 to 8 pm CET/CEST
Sprint meetings: first hour of the tech hang on the first Wednesday of the month

Any other collaboration usually happens via Slack.

**Join our contributor team if:**

- You’re able and willing to communicate clearly
- You’re reliable, organised and focused
- You have some availability overlapping with Central European Time
- You can make it to at least 1 tech hang per month
- You can come to at least 1 sprint meeting per quarter

## Table of Contents

**[TODO: edit the Table of Contents]**

- [Ways to Contribute](#ways-to-contribute)
- [Come to Community Calls](#come-to-community-calls)
- [Finding an Issue](#finding-an-issue)
- [Creating Issues](#creating-issues)
- [Setting Up a Dev Environment](#setting-up-a-dev-environment)
- [Asking for Help](#asking-for-help)
- [Norms for Commits](#norms-for-commits)
- [Pull Request Lifecycle](#pull-request-lifecycle)
- [Code of Conduct](#code-of-conduct)

## Ways to Contribute

**[TODO: edit this to reflect the kinds of contributions you'd like to receive for your project]**

We’re looking for experienced engineers and designers, but you don’t need to already know our full stack as long as you know how to onboard yourself and ask for help if needed. Some experience with contributing to OSS is helpful. We welcome many different types of contributions, including:

- [Frontend]( https://github.com/distributeaid/next-website-v2)
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

If anything doesn't make sense, or doesn't work when you run it, please open a bug report and let us know!

## Finding an Issue

**[TODO: edit this section as needed]**

We have good first issues for new contributors and help wanted issues suitable for any contributor. [`good first issue`](**TODO: link your project's `good first issue` label**) has extra information to help you make your first contribution. [`help wanted`](**TODO: link to your project's `help wanted` label**) are issues suitable for someone who isn't a core maintainer and is good to move onto after your first pull request.

Sometimes there won’t be any issues with these labels. That’s ok! There is likely still something for you to work on. If you want to contribute but you don’t know where to start or can't find a suitable issue, you can **[TODO: explain how people can ask for an issue to work on]**.

Once you see an issue that you'd like to work on, please post a comment saying that you want to work on it. Something like "I want to work on this" is fine.

## Creating Issues

On the [Issues page on Github](https://github.com/distributeaid/next-website-v2/issues), click the green `New Issue` button or this [New Issue Link](https://github.com/distributeaid/next-website-v2/issues/new).

- Add a descriptive title with an optional `[type tag]` such as [component] or [page]. In the description body summarize the issue.
- Add external links, such as to figma designs or external documentation, if applicable. If a figma design exists, be sure to add screenshots. Visual explanations go a long way towards making things super clear.
- Add parts of the codebase where changes would be made.
- Assign the issue to yourself or someone else, or leave for another person to pick it up.
- Add appropriate labels and types.
- Add the issue to the project **DA Tech**.

If the issue needs some precursor set up before someone can work on the issue (particularly for parents of sub issues) such as library installations and page or folder creations, then you must first set the issue as `Triage` until those appropriate changes are made and reviewed in a pull request. Otherwise, set the issue as `Ready for Work`.

### Sub Issues

For larger issues that can be split up into separate independent parts. For example a new parent page with multiple children components. You can create a parent issue, with multiple child issues. [See these slides](https://docs.google.com/presentation/d/1ToMum70-qDlaCv6m7X3HfGr3XjaX-UjyA36K4IElO5Y/edit?slide=id.g2dd259a195e_0_9#slide=id.g2dd259a195e_0_9) on how to create sub issues.

## Setting up a Dev Environment

Dev environment setup across our repos, so please refer to the README for any repo you'd like to contribute to!

## Asking for Help

The best way to reach us with a question when contributing is to ask on:

- The original Github issue
- Our Slack channel

## Norms for Commits

Most of our repos (except docs) use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). When crafting commit messages, group commits that are related to a particular topic. For example, if you're making commits related to the styling, only include files that are related to styling. This makes it easier to read through the commits and see the exact files that made changes to the styles. Proper commits make debugging easier in cases where we need to go through our git logs.

A good commit message will ideally have the following attributes:

- Subject => A summary of what you did in the commit.
- Body => A detailed explanation of the commit.

## Pull Request Lifecycle

> [!TIP]
> TODO: Edit the text below to describe your pull request process. You don't need to adopt every aspect! Pick and choose what makes sense for *your* project]

### Before You Submit

**[TODO: edit this section to reflect what's needed for your project]**

When you submit your pull request, or you push new commits to it, our automated systems will run some checks on your new code. We require that your pull request passes these checks, but we also have more criteria than just that before we can accept and merge it. We recommend that you check the following things locally before you submit your code:

- First thing to check
- Another thing to check

#### When to Submit

**[TODO: edit this section to reflect what's needed for your project]**

Submit your pull request when you have a working implementation that addresses the issue or feature request. Your code should be tested and ready for review, even if you're open to suggestions for improvements.

#### Draft vs. Ready PRs

**[TODO: edit this section to reflect what's needed for your project]**

- Use **Draft PRs** when your work is incomplete or you want early feedback on your approach
- Convert to **Ready for Review** when your implementation is complete and tested
- Mark as ready even if you expect minor changes during review

#### Branch Strategy

**[TODO: edit this section to reflect what's needed for your project]**

We have a long-running branch (**saga**) and create short-lived branches to develop parts of the website. Our branch naming convention is `type/issue#/condensed-issue-name`. An example of a short-lived branch would be `feat/365/about-us`. Connect words using a "-" as branch names cannot include empty spaces. Always ensure you're working on a separate branch to avoid merge conflicts.

### Submission Process

- Include the purpose of the Pull Request and link the issue related to the PR (with the `#` sign)
- Consider providing an overview of why the work is taking place (with any relevant links). Don't assume familiarity with the history
- Be explicit about what feedback you want, if any: a quick pair of 👀 on the code, discussion on the technical approach, critique on design, a review copy
- Be explicit about when you want feedback, if the Pull Request is a work in progress, say so. Prefix the title of your PR with [WIP]
- @mention individuals that you specifically want to involve in the discussion and explain the help or input you need from them.
- Assign the issue author as a reviewer **[TODO: I think we found that contributors can't assign reviewers themselves?]**

#### PR Scope

**[TODO: edit this section to reflect what's needed for your project]**

We prefer **small, focused pull requests** that address a single issue or implement one feature. Large PRs are harder to review and more likely to conflict with other changes. If your feature is large, consider breaking it into multiple PRs.

#### Signaling Readiness

**[TODO: edit this section to reflect what's needed for your project]**

- Remove "Draft" status when ready for review
- Ensure all CI checks are passing
- Include a clear description of what the PR does and why
- Link to relevant issues using "Fixes #123" or "Addresses #456"

### Review Process

**[TODO: edit this section to reflect what's needed for your project]**

**Initial Review Timeline**: Expect an initial review within **3-5 business days**. Complex PRs may take longer.

**Follow-up Reviews**: After addressing feedback, expect follow-up reviews within **2-3 business days**.

#### Requesting Reviews

**[TODO: edit this section to reflect what's needed for your project]**

- After pushing changes, add a comment like "Ready for re-review" or "@mention" specific reviewers
- If your PR hasn't been reviewed after the expected timeline, feel free to politely bump with a comment
- For urgent fixes, mention the urgency in your comment

### Handling Common Situations

#### Stalled Pull Requests

**[TODO: edit this section to reflect what's needed for your project]**

If your PR appears stalled:

1. First, check if all feedback has been addressed
2. After 1 week of no activity, add a polite comment requesting status
3. If still no response after another week, reach out via [preferred communication channel]

#### Abandoned Pull Requests

**[TODO: edit this section to reflect what's needed for your project]**

If you can no longer continue work on your PR:

- Comment on the PR explaining the situation
- Maintainers may either:
  - Take over the PR and push additional commits to complete it
  - Close the PR and create a new issue for others to pick up
  - Close the PR if the change is no longer needed

#### Follow-up Work

**[TODO: edit this section to reflect what's needed for your project]**

- Small follow-up changes should be addressed in the same PR when possible
- Larger follow-ups or new issues discovered during review should be handled in separate issues/PRs
- Use "TODO" comments sparingly and create follow-up issues for any deferred work

### After Your PR is Merged

**[TODO: edit this section to reflect what's needed for your project]**

**Release Timeline**: Merged pull requests are included in the next release, which typically happens:

- **Patch releases**: Every 2-4 weeks for bug fixes
- **Minor releases**: Every 1-3 months for new features
- **Major releases**: As needed for breaking changes

#### Release Process

**[TODO: edit this section to reflect what's needed for your project]**

After merge, your changes will:

1. Be available immediately in the `main` branch
2. Go through additional testing in our staging environment
3. Be included in the next scheduled release
4. Be documented in the changelog with attribution

#### Staying Updated

**[TODO: edit this section to reflect what's needed for your project]**

Watch the repository to be notified when your contributions are released. We'll also tag you in release notes when your PR introduces significant changes.

---

_Questions about the PR process? Feel free to ask in the issue comments, discussions, or reach out to the maintainers directly._

## Code of Conduct

Please read our [Code of Conduct](**TODO: link to your project's CoC**)
