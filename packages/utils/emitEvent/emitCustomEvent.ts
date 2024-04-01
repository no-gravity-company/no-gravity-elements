import { ComponentEvents } from '@no-gravity-elements/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FirstArg<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A[0] : never;

export const emitEvent = <T extends ComponentEvents<T>>(
  event: Event,
  customEventName: keyof T,
  value?: FirstArg<T[typeof customEventName]>,
) => {
  if (event && event.target) {
    const customEvent = new CustomEvent(customEventName.toString(), {
      detail: value,
      bubbles: true,
      composed: true,
    });
    event.target.dispatchEvent(customEvent);
    event.stopPropagation();
    event.preventDefault();
  }
};
