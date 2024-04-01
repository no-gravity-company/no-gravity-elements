# @no-gravity-elements/react-adapter

This package declares all No Gravity Elements web components as JSX intrinsic elements so that they can be consumed in React and provides typings and intellisense.

## Setting up React adapter
Install in your React project.
```
npm i @no-gravity-elements/react-adapter
```

Import in your app entry point
```jsx
import '@no-gravity-elements/react-adapter';
```

Now you can consume no-gravity-elements in your React project.

## Consuming no-gravity-elements
We provide a hook for handling custom events easily. Each component exposes a type with its events.

```jsx
import '@no-gravity-elements/select';
import { SelectTypes } from '@no-gravity-elements/types';
import { SelectEvents } from '@no-gravity-elements/select';
import { useNgeEvents } from '@no-gravity-elements/react-adapter';

const App = () => {
  const [selected, setSelected] = useState<SelectOption>(SELECT_OPTIONS[0]);

  const handleSelectChange = (newSelected: SelectOption) => {
    setSelected(newSelected);
  };

  const { ref } = useNgeEvents<SelectEvents>({
    onChange: handleSelectChange,
  });

  return (
    <nge-select ref={ref} options={SELECT_OPTIONS} selected={selected} />
  );
};
```

## Development

### Generating React adapter
The React Adapter is automatically generated based on the existing components in the repository.
The **generate-adapter.js** script will search for all components and generate a typescript declaration that adds them to JSX.

To generate the adapter, run `yarn build-react-adapter` from the monorepo root folder or `yarn build` from this package directory.

### CICD
Publish job is set up to generate new version of adapter and commit it upon merging to main.
