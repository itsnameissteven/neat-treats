import { useEffect } from 'react';

export const useBodyLock = (locked = false) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (!locked) {
      // Add body-lock to your css with rules to prevent scrolling
      return document.body.classList.remove('body-lock');
    }
    return document.body.classList.add('body-lock');
  }, [locked]);

  return null;
};
