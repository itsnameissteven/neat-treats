import { Portal } from '../Portal/Portal';
import { Toast } from '../Toast/Toast';

export type NTToastContainerProps = {
  className?: string;
  toasts: string[];
};

export const ToastContainer = ({
  className,
  toasts,
}: NTToastContainerProps) => {
  return (
    <Portal container={document.body}>
      <div className={`nt-toast-container ${className}`}>
        {toasts.map((el) => (
          <Toast content={el} />
        ))}
      </div>
    </Portal>
  );
};
