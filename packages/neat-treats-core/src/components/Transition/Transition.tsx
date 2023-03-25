import React, { useLayoutEffect, useRef } from 'react';
import './Transition.scss';
const calculateBoundingBoxes = (children: any) => {
  let boundingBoxes: any = null;

  React.Children.forEach(children, (child) => {
    const domNode = child.ref.current;
    const nodeBoundingBox = domNode.getBoundingClientRect();

    boundingBoxes = nodeBoundingBox;
  });

  return boundingBoxes;
};

export default calculateBoundingBoxes;

export type NTTransition = {
  children: React.ReactElement;
};

export const Transition = ({ children }: NTTransition) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prev = ref.current?.getBoundingClientRect();

  useLayoutEffect(() => {
    const current = ref.current;
    if (prev && current) {
      const newBox = current.getBoundingClientRect();
      const oldBox = prev;
      const deltaX = oldBox.left - newBox.left;
      const deltaY = oldBox.top - newBox.top;

      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          ref.current.style.transition = 'transform 0s';
        }
        requestAnimationFrame(() => {
          ref.current!.style.transform = ``;
          ref.current!.style.transition = 'transform 500ms';
        });
      });
    }
  });
  return (
    <span className="nt-transition" ref={ref}>
      {children}
    </span>
  );
};
