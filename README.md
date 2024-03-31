<h1 align="center" style="border-bottom: none;">No Gravity Elements</h1>
<h3 align="center">Lightspeed web component library</h3>

<br/>

[![Storybook](https://img.shields.io/badge/Storybook-visit-ff69b4)](https://main--65edfeddcbe58bb4d259538f.chromatic.com)
[![Build Status](https://github.com/no-gravity-company/no-gravity-elements/actions/workflows/on-push.yml/badge.svg)](https://github.com/no-gravity-company/no-gravity-elements/actions)

Our web components can be consumed from any frontend project. They are extremely lightweight and built for speed.

## Install components

Components are published as separate packages and they need to be installed individually. Some components depend on others so their dependencies will need to be installed.

Component packages are prefixed with `@no-gravity-elements/`, for example:

```
yarn @no-gravity-elements/button
```

## Usage
**TODO**

## Adapters
No Gravity Elements provides adapters for Angular and React frameworks.

[Angular adapter](subdirectory/README.md)

[React adapter](subdirectory/README.md)

## Component list

#### Atoms
- Typography
- Card
- Button
- Link

#### Molecules
#### Organisms


## Development
No Gravity Elements is a monorepo where each component is a separate package. We use Preact to write our components and then we convert them into web components.

### Install dependencies

We use yarn as package manager. Just run
```
yarn
```

### Branch names
Branches must be prefixed with the code `NGE-XXX_` where the Xs are the issue code.

### Storybook
We use storybook for development. Run it with
```
yarn storybook
```

Pushing a branch will deploy a storybook build of the branch on the url
`
https://<branch-code>--65edfeddcbe58bb4d259538f.chromatic.com/
`

You can find the generated url in the github pipeline summary and in any open PRs for the branch.

### Testing
We use jest with enzyme for unit testing and cypress for integration testing. Storybook needs to be running for integration tests to run.

### Creating a component
We have a tool that will generate all the boilerplate for a component.
```
yarn component-generator --name Button --type atoms
```

Component return statement must be wrapped in a Preact `<Fragment>`.

### CICD
CICD will run tests and deploy storybook on all pushes. When merging into master it will also publish modified components.

Upon opening a PR, another workflow will add the branch storybook link to the description

### Node version
The node version is fixed in this repo, if you are experiencing issues you need to run `nvm use`. If you do not have the correct node version installed, you will need to run `nvm install` before that.

### Husky
We use husky to run a precommit hook that checks typings, lints and formats code. It is installed after running `yarn`.

### Automatic versioning and changelog
We leverage Lerna to handle automatic versioning and changelog generation. Upon merging a feature branch into main, Lerna will automatically bump the packages and update the changelogs, and then publish the modified packages.

It is configured to work with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Following this specification tells Lerna which [semver](https://semver.org/) version it should bump and what it should write in the changelogs.

| Semver version       | Commit instructions
| -------------------- | -----------------------------
| Patch                | [any prefix other than feat]:
| Minor                | feat:
| Major                | (in commit footer) BREAKING CHANGE:
