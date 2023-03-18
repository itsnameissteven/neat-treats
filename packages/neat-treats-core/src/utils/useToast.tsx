import { useCallback, useContext } from 'react';
import { NTToast, ToastContext } from '../contexts/ToastContext';
import { filterById } from './filterById';

type ToastArgs = Omit<Partial<NTToast> & Required<{ msg: string }>, 'id'>;

export const useToast = () => {
  const setToast = useContext(ToastContext);

  if (!setToast) {
    throw new Error('useToast must be used inside ToastContext');
  }
  const toast = useCallback(
    ({ msg, position = 'bottom-right', time = 3000 }: ToastArgs) => {
      const id = crypto.randomUUID();
      setToast((prev) => [{ msg, position, id, time }, ...prev]);
      setTimeout(() => setToast((prev) => filterById(prev, id, false)), time);
    },
    []
  );

  return toast;
};
