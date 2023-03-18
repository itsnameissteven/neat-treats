import { useCallback, useContext } from 'react';
import { ToastContext } from '../contexts/ToastContext';

export const useToast = () => {
  const setToast = useContext(ToastContext);

  if (!setToast) {
    throw new Error('useToast must be used inside ToastContext');
  }
  const toast = useCallback((el: string) => {
    return setToast((prev) => [...prev, el]);
  }, []);

  return toast;
};
