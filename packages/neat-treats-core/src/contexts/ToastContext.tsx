import { createContext, ReactNode, useState } from 'react';
import { ToastContainer } from '../components/ToastContainer/ToastContainer';

export const ToastContext = createContext<
  React.Dispatch<React.SetStateAction<string[]>>
>(() => null);

export type NTToastContextProviderdProps = {
  children: ReactNode;
};

export type NTToastPositions = `${YPositions}-${XPositions}`;

export type NTToast = {
  msg: string;
  id: string;
  position: NTToastPositions;
};

export const ToastContextProvider = ({
  children,
}: NTToastContextProviderdProps) => {
  const [toasts, setToasts] = useState<string[]>([]);
  return (
    <ToastContext.Provider value={setToasts}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};
