# @no-gravity-elements/angular-adapter

This package generates an Angular module that can be imported in any Angular project. It adds angular directives for No Gravity Elements components. These directives add typings and intellisense to the web components.

## Consuming Angular adapter
To consume this package, first install it in your Angular repo.
```
npm i @no-gravity-elements/angular-adapter
```

Now just add it

## Development
### Generating Angular adapter
The Angular Adapter is automatically generated based on the existing components in the repository. It will search each component's type declarations and will generate a directive for all components that have types. It will then generate a module that contains all the created directives.

To generate the adapter, run `npm run generate-adapter`.
To build the adapter, run `npm run build`.
To generate and build the adapter, run `npm run angular-adapter` from the main no-gravity-elements package.

### CICD
TBD
