import { useDebounce } from '@neat-treats/utils';
import React from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '@neat-treats/utils';
import './Modal.scss';

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
  const debouncedIsOpen = useDebounce(isOpen, isDebounceClosed ? 300 : 0);

  if (!isOpen && !debouncedIsOpen) return null;
  const modal = (
    <div
      className={classNames('nt-modal-backdrop', {
        'nt-modal-backdrop--out': !isOpen && debouncedIsOpen,
      })}
    >
      <div className={`nt-modal ${className}`}>{children}</div>
    </div>
  );

  return createPortal(modal, document.body);
};
