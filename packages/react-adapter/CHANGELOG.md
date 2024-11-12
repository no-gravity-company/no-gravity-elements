# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1.0](https://github.com/no-gravity-company/no-gravity-elements/compare/@no-gravity-elements/react-adapter@3.0.0...@no-gravity-elements/react-adapter@3.1.0) (2024-11-12)

### Features

- Add react html props to react adapter types ([0b035d7](https://github.com/no-gravity-company/no-gravity-elements/commit/0b035d7de516be97293d23145f8c327e295c0df4))

# [3.0.0](https://github.com/no-gravity-company/no-gravity-elements/compare/@no-gravity-elements/react-adapter@2.0.0...@no-gravity-elements/react-adapter@3.0.0) (2024-04-03)

- feat(react-adapter)!: Modify useNgeEvents to return full event not just value ([7c13b22](https://github.com/no-gravity-company/no-gravity-elements/commit/7c13b22b86182498bd539ea72b37e21d5985dd49))

### BREAKING CHANGES

- useNgeEvents now returns full event instead of only value

# 2.0.0 (2024-04-01)

### Features

- Add onClick event to nge-button ([8f99196](https://github.com/no-gravity-company/no-gravity-elements/commit/8f991961d28cd97ccf0c95d10fcdef6d47432142))
- Add react adapter generator script ([eb943cb](https://github.com/no-gravity-company/no-gravity-elements/commit/eb943cb897b2bac61f0c6ac65e2159e781cb22a0))
- Add react-adapter package ([16a3bca](https://github.com/no-gravity-company/no-gravity-elements/commit/16a3bca14ac5e21c165b5d0f89706a66bf1efa03))
- Add useNgeEvents hook to react-adapter ([e232d09](https://github.com/no-gravity-company/no-gravity-elements/commit/e232d0980b746e6fa5d9ed43df7e9ce6445f2cb9))

### BREAKING CHANGES

- React adapter is no longer exported from types package, it now has a separate package that needs to be imported as well
