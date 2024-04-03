import { ComponentEvents } from '@no-gravity-elements/types';
import { useLayoutEffect, useRef } from 'react';

type EventAndHandler = [string, (e: Event) => void];

export const useNgeEvents = <T extends ComponentEvents<T>>(eventhandlerList: T) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const loopListeners = (mode: 'add' | 'remove') => {
      Object.entries(eventhandlerList).forEach((eventAndHandler) => {
        const listenerArgs = eventAndHandler as EventAndHandler;
        if (mode === 'add') ref.current?.addEventListener(...listenerArgs);
        if (mode === 'remove') ref.current?.removeEventListener(...listenerArgs);
      });
    };
    loopListeners('add');

    return () => {
      loopListeners('remove');
    };
  }, [eventhandlerList]);

  return { ref };
};
