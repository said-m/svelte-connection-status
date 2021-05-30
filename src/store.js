import { derived, readable } from 'svelte/store';

export const isOffline = readable(
  !navigator.onLine || false,
  (set) => {
    const handleStatus = event => {
      switch (event.type) {
        case 'online':
          set(false);
          break;
        case 'offline':
          set(true);
          break;
      };
    };

    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);

    return () => {
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  },
);

export const isOnline = derived(
  isOffline,
  $isOffline => !$isOffline,
);
