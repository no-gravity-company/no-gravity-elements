<h1 align="center" style="border-bottom: none;">No Gravity Elements</h1>
<h3 align="center">Lightspeed web component library</h3>

<br/>

[![Storybook](https://img.shields.io/badge/Storybook-visit-ff69b4)](https://main--65edfeddcbe58bb4d259538f.chromatic.com)
[![Build Status](https://github.com/no-gravity-company/no-gravity-elements/workflows/CI/badge.svg)](https://github.com/no-gravity-company/no-gravity-elements/actions)


Our web components can be consumed from any frontend project. They are extremely lightweight and built for speed.

## Installing components

Components are published as separate packages and they need to be installed individually. Some components depend on others so their dependencies will need to be installed.

Component packages are prefixed with `@no-gravity-elements/`, for example:

```
npm i @no-gravity-elements/button
```

## Component list

#### Atoms
- Typography
- Card
- Button
- Link

#### Molecules
#### Organisms


## Development

### Install



### Automatic versioning and changelog
We leverage Lerna to handle automatic versioning and changelog generation. Upon merging a feature branch into main, Lerna will automatically bump the packages and update the changelog, and then publish the modified packages.

It is configured to work with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Following this specification tells Lerna which [semver](https://semver.org/) version it should bump and what it should write in the changelog.

| Semver version       | Commit instructions
| -------------------- | -----------------------------
| Patch                | [any prefix other than feat]:
| Minor                | feat:
| Major                | (in commit footer) BREAKING CHANGE:

### Node version
The node version is fixed in this repo, if you are experiencing issues you need to run `nvm use`. If you do not have the correct node version installed, you will need to run `nvm install` before that.

### Create component template
Example : `yarn component-generator --name Test --type atoms`
