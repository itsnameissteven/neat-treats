import React, { useLayoutEffect, useRef, forwardRef } from 'react';
import './Transition.scss';
import { setComponentRefs } from '../../utils/setComponentRefs';

export type NTTransition = {
  children: React.ReactElement;
} & GenericComponentProps<'span'>;

export const Transition = forwardRef<HTMLSpanElement, NTTransition>(
  ({ children, ...props }, externalRef) => {
    const internalRef = useRef<HTMLSpanElement | null>(null);
    // useImperativeHandle(forwardRef, () => internalRef.current);
    const prev = internalRef.current?.getBoundingClientRect();
    useLayoutEffect(() => {
      const current = internalRef.current;
      if (prev && current) {
        const newBox = current.getBoundingClientRect();
        const oldBox = prev;
        const deltaX = oldBox.left - newBox.left;
        const deltaY = oldBox.top - newBox.top;

        requestAnimationFrame(() => {
          if (internalRef.current) {
            internalRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            internalRef.current.style.transition = 'transform 0s';
          }
          requestAnimationFrame(() => {
            internalRef.current!.style.transform = ``;
            internalRef.current!.style.transition = 'transform 500ms';
          });
        });
      }
    }, [prev]);
    return (
      <span
        className="nt-transition"
        ref={setComponentRefs(internalRef, externalRef)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Transition.displayName = 'Transition';
