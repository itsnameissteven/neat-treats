import { useContext } from 'react';
import { ToastContext } from '../contexts/ToastContext';

export const useToast = () => {
  const setToast = useContext(ToastContext);

  return {
    toast: (el: string) => setToast((prev) => [...prev, el]),
  };
};
