// @ts-nocheck
import { useLayoutEffect, useRef } from 'react';

type EventHandlerFn = (...args: unknown[]) => void;
type EventHandlerList<T extends string> = {
  [K in T as `${K}`]?: EventHandlerFn;
};

export const useNgeEvents = <T extends string>(eventhandlerList: EventHandlerList<T>) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const loopListeners = (mode: 'add' | 'remove') => {
      Object.entries(eventhandlerList).forEach((eventAndHandler) => {
        if (mode === 'add') ref.current?.addEventListener(...eventAndHandler);
        if (mode === 'remove') ref.current?.removeEventListener(...eventAndHandler);
      });
    };
    loopListeners('add');

    return () => {
      loopListeners('remove');
    };
  }, [eventhandlerList]);

  return { ref };
};
