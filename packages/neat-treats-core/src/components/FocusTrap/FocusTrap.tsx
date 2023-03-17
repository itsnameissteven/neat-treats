import { useRef, useEffect } from 'react';

export const FocusTrap = ({ children }: { children: JSX.Element }) => {
  const trapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trap = trapRef.current!;
    const options = trap.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    function handleFocus(event: KeyboardEvent) {
      if (event.keyCode === 9 || event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === options?.[0]) {
            event.preventDefault();
            (options?.[options.length - 1] as HTMLElement)?.focus();
          }
        } else {
          if (document.activeElement === options?.[options.length - 1]) {
            event.preventDefault();
            (options?.[0] as HTMLElement)?.focus();
          }
        }
      }
    }
    document.addEventListener('keydown', handleFocus);
    return () => {
      document.removeEventListener('keydown', handleFocus);
    };
  }, []);

  return (
    <div ref={trapRef} tabIndex={-1}>
      {children}
    </div>
  );
};
