import { ComponentEvents } from '@no-gravity-elements/types';

type EventValueFromHandler<T extends (event: CustomEvent) => void> = T extends (
  event: CustomEvent<infer A>,
) => void
  ? A
  : never;

type EventData<T extends ComponentEvents<T>> = {
  [K in keyof T]: K extends string ? { name: K; value: EventValueFromHandler<T[K]> } : never;
}[keyof T];
type EmitEventArgs<T extends ComponentEvents<T>> = EventData<T> & { event: Event };

export const emitEvent = <T extends ComponentEvents<T>>({
  event,
  name,
  value,
}: EmitEventArgs<T>) => {
  if (event && event.target) {
    const customEvent = new CustomEvent<typeof value>(name.toString(), {
      detail: value,
      bubbles: true,
      composed: true,
    });
    event.target.dispatchEvent(customEvent);
  }
};
