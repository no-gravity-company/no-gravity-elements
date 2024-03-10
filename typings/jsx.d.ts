// jsx.d.ts
import { Attributes } from 'preact';

declare module 'preact/src/jsx' {
  namespace JSXInternal {
    // We're extending the IntrinsicElements interface which holds a kv-list of
    // available html-tags.
    interface IntrinsicElements {
      [elemName: string]: Attributes & { [propName: string]: any };
    }
  }
}

declare module 'preact' {
  export interface FunctionComponent<P = {}> {
    (props: RenderableProps<P>, context?: any): VNode<any> | null;
    displayName?: string;
    observedAttributes?: string[];
    defaultProps?: Partial<P>;
  }
}
