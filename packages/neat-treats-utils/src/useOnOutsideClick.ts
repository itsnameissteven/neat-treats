import React, { useEffect, useRef } from 'react';
import { isNode } from './isNode';
export const useOnOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: any
) => {
  const callbackRef = useRef(handler);
  const callback = callbackRef.current;

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        !isNode(event.target) ||
        ref.current?.contains(event.target)
      ) {
        return null;
      }
      callback(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};
