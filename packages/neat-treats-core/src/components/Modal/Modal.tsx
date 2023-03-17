import { classNames, useDebounce } from '@neat-treats/utils';
import { useOnOutsideClick } from '@neat-treats/utils/src';
import React, { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../Icon/Icon';
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
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const debouncedIsOpen = useDebounce(isOpen, isDebounceClosed ? 300 : 0);

  const handleClose = () => {
    onClose();
  };

  useOnOutsideClick(ref, handleClose);

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
          ref={buttonRef}
          className="nt-modal__close-btn"
          name="x"
          onClick={handleClose}
          size={20}
        />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};
