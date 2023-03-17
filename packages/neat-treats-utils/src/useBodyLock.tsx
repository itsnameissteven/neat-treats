import { useEffect } from 'react';

export const useBodyLock = (locked = false) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (locked) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);

  return;
};
