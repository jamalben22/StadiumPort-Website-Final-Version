import { useSyncExternalStore } from 'react';

export const useMediaQuery = (query: string) => {
  const getSnapshot = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };

  const subscribe = (onStoreChange: () => void) => {
    if (typeof window === 'undefined') return () => {};

    const media = window.matchMedia(query);
    const listener = () => onStoreChange();
    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};
