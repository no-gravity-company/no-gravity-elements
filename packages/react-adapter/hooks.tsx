import { ComponentEvents } from '@no-gravity-elements/types';
import { useLayoutEffect, useRef } from 'react';

export const useNgeEvents = <T extends ComponentEvents<T>>(eventhandlerList: T) => {
  const ref = useRef<HTMLElement>(null);

  const getEventValue = (handler: T[keyof T]) => (e: Event) => {
    const customEvent = e as CustomEvent;
    return handler(customEvent.detail);
  };

  const eventsAndHandlers: [string, (e: Event) => void][] = Object.keys(eventhandlerList).map(
    (eventName) => {
      const handler = getEventValue(eventhandlerList[eventName as keyof T]);
      return [eventName, handler];
    },
  );

  useLayoutEffect(() => {
    const loopListeners = (mode: 'add' | 'remove') => {
      eventsAndHandlers.forEach((eventAndHandler) => {
        if (mode === 'add') ref.current?.addEventListener(...eventAndHandler);
        if (mode === 'remove') ref.current?.removeEventListener(...eventAndHandler);
      });
    };
    loopListeners('add');

    return () => {
      loopListeners('remove');
    };
  }, [eventhandlerList, eventsAndHandlers]);

  return { ref };
};
