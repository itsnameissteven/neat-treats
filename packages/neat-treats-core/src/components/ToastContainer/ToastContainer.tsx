import { useId } from 'react';
import { NTToastPositions, type NTToast } from '../../contexts/ToastContext';
import { Portal } from '../Portal/Portal';
import { Toast } from '../Toast/Toast';
import './ToastContainer.scss';
export type NTToastContainerProps = {
  className?: string;
  toasts: NTToast[];
};

const positions: NTToastPositions[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export const ToastContainer = ({
  className = '',
  toasts = [],
}: NTToastContainerProps) => {
  const id = useId();
  return (
    <Portal container={document.body}>
      <div className={`nt-toast-container ${className}`}>
        {positions.map((position) => (
          <div
            className={`nt-toast-container--${position}`}
            key={`${id}-${position}`}
          >
            {toasts.reduce((acc: JSX.Element[], curr, i) => {
              if (curr.position === position)
                return [...acc, <Toast content={curr.id} key={curr.id} />];
              return acc;
            }, [])}
          </div>
        ))}
      </div>
    </Portal>
  );
};
