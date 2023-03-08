import { useState, useEffect } from 'react';

export type PreventAnimationArgs = {
  timeout?: number;
  preventAnimation?: boolean;
};
export const usePreventAnimation = ({
  timeout = 500,
  preventAnimation = false,
}: PreventAnimationArgs = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), timeout);
  }, [timeout]);

  return {
    isLoaded,
    noAnimationClass: !isLoaded || preventAnimation ? 'no-animation' : '',
    noTransitionClass: !isLoaded || preventAnimation ? 'no-transition' : '',
  };
};
