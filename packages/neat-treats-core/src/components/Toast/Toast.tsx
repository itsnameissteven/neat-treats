import { Transition } from '../Transition/Transition';
import './Toast.scss';

export type NTToastProps = {
  className?: string;
  content: string;
};

export const Toast = ({ className, content }: NTToastProps) => {
  return (
    <Transition>
      <div className={`nt-toast ${className}`}>
        <p>{content}</p>
      </div>
    </Transition>
  );
};
