# no-gravity-elements
[![Storybook](https://img.shields.io/badge/Storybook-visit-ff69b4)](https://main--65edfeddcbe58bb4d259538f.chromatic.com)

## Automatic versioning and changelog
This repo leverages Lerna to handle automatic versioning and changelog generation. Upon merging a feature branch into main, Lerna will automatically bump the packages and update the changelog, and then publish the modified packages.

It is configured to work with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Following this specification tells Lerna which [semver](https://semver.org/) version it should bump and what it should write in the changelog.

| Semver version       | Commit instructions
| -------------------- | -----------------------------
| Patch                | [any prefix other than feat]:
| Minor                | feat:
| Major                | (in commit footer) BREAKING CHANGE:

## Node version
The node version is fixed in this repo, if you are experiencing issues you need to run `nvm use`. If you do not have the correct node version installed, you will need to run `nvm install` before that.

## Create component template
Example : `yarn component-generator --name Test --type atoms`
