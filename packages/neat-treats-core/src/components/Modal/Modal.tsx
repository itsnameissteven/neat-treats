import { useDebounce } from '@neat-treats/utils';
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '@neat-treats/utils';
import { Icon } from '../Icon/Icon';
import './Modal.scss';
import { useOnOutsideClick } from '@neat-treats/utils/src';
export type NTModalProps = {
  className?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => unknown;
  isDebounceClosed?: boolean;
};

export const Modal = ({
  className = '',
  children,
  isOpen,
  onClose,
  isDebounceClosed = true,
}: NTModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const debouncedIsOpen = useDebounce(isOpen, isDebounceClosed ? 300 : 0);
  useOnOutsideClick(ref, onClose);

  if (!isOpen && !debouncedIsOpen) return null;

  const modal = (
    <div
      className={classNames('nt-modal-backdrop', {
        'nt-modal-backdrop--out': !isOpen && debouncedIsOpen,
      })}
    >
      <div className={`nt-modal ${className}`} ref={ref}>
        {children}
        <Icon
          className="nt-modal__close-btn"
          name="x"
          onClick={onClose}
          size={20}
        />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};
