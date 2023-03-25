import { Transition } from '../Transition/Transition';
import { classNames } from '@neat-treats/utils';
import './Toast.scss';

export type NTToastProps = {
  className?: string;
  content: string;
  position: string;
};

export const Toast = ({ className = '', content, position }: NTToastProps) => {
  return (
    <Transition>
      <div
        className={classNames('nt-toast', className, {
          'nt-toast--top': position.includes('top'),
          'nt-toast--bottom': position.includes('bottom'),
        })}
      >
        <p>{content}</p>
      </div>
    </Transition>
  );
};
