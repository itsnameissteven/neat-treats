import { createContext, ReactNode, useState } from 'react';

const ToastContext = createContext<
  React.Dispatch<React.SetStateAction<string[]>>
>(() => null);

export type NTToastContextProviderdProps = {
  children: ReactNode;
};

export const ToastContextProvider = ({
  children,
}: NTToastContextProviderdProps) => {
  const [toasts, setToasts] = useState<string[]>([]);
  return (
    <ToastContext.Provider value={setToasts}>{children}</ToastContext.Provider>
  );
};
