# @no-gravity-elements/angular-adapter

This package generates an Angular module that can be imported in any Angular v17 project. It adds Angular directives for No Gravity Elements web components that provide typings and intellisense to the web components.

## Setting up Angular adapter
Install in your Angular repo.
```
npm i @no-gravity-elements/angular-adapter
```

Set as an external dependency in your angular.json.
```json
"architect": {
  "build": {
    "options": {
      "externalDependencies": ["@no-gravity-elements/angular-adapter"],
    }
  }
}
```

Add **AngularAdapterModule** to your ngModule imports or to your component imports.
```typescript
@NgModule({
  imports: [AngularAdapterModule],
})
```
```typescript
@Component({
  imports: [AngularAdapterModule],
})
```

Now you can consume no-gravity-elements in your Angular project.

## Consuming no-gravity-elements
Example usage:

```typescript
import { Component } from '@angular/core';
import { AngularAdapterModule } from '@no-gravity-elements/angular-adapter';
import { TypographySizes } from '@no-gravity-elements/types';

import '@no-gravity-elements/typography';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularAdapterModule],
  template: `
    <nge-typography [size]="sizes.h1">
      TEST
    </nge-typography>
  `,
  styles: [],
})
export class AppComponent {
  sizes = TypographySizes;
}
```

## Development

### Generating Angular adapter
The Angular Adapter is automatically generated based on the existing components in the repository.
The **generate-adapter.js** script will search each component's type declarations and will generate a directive for all components that have types. It will then generate a module that contains all the created directives.

To generate and build the adapter, run `yarn build-angular-adapter` from the monorepo root folder or `yarn build` from this package directory.

### CICD
Publish job is set up to generate new version of adapter and will add all changes to the publish commit.
