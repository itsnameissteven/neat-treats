import { Portal } from '../components/Portal/Portal';
import { useState } from 'react';
import { Toast } from '../components/Toast/Toast';

export const useToast = () => {
  const [toasts, setToast] = useState<string[]>([]);
  console.log(toasts);

  <Portal container={document.body}>
    <div className="nt-toast-container">
      {toasts.map((el) => (
        <Toast content={el} />
      ))}
    </div>
  </Portal>;

  return {
    toast: (el: string) => setToast((prev) => [...prev, el]),
  };
};
