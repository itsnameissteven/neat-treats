import { useRef } from 'react';

export const useDynamicRefs = () => {
  const refs = useRef<Record<string, HTMLElement | null>>({});
  // const setRef = (key: string, element: HTMLElement | null) => {
  //   console.log(element.key);
  //   refs.current[key] = element;
  //   //@ts-ignore
  //   console.log('this', this);
  // };
  const setRef = (key: string, element: HTMLElement | null) => {
    refs.current[key] = element;
  };

  const getRef = function (key: string) {
    return refs.current[key];
  };
  return {
    refs,
    setRef,
    getRef,
  };
};
