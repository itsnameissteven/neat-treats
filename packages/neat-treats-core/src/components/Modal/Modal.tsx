import { classNames, useDebounce } from '@neat-treats/utils';
import { useBodyLock, useOnOutsideClick } from '@neat-treats/utils/src';
import React, { useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { FocusTrap } from '../FocusTrap/FocusTrap';
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
  useBodyLock(isOpen);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const debouncedIsOpen = useDebounce(isOpen, isDebounceClosed ? 300 : 0);
  const [prevFocus, setPrevFocus] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setPrevFocus(document.activeElement as HTMLElement);
    }
    if (isOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    prevFocus?.focus();
  };

  useOnOutsideClick(ref, handleClose);

  if (!isOpen && !debouncedIsOpen) return null;

  return (
    <Portal container={document.body}>
      <FocusTrap>
        <div
          className={classNames('nt-modal-backdrop', {
            'nt-modal-backdrop--out': !isOpen && debouncedIsOpen,
          })}
          tabIndex={-1}
        >
          <div className={`nt-modal ${className}`} ref={ref}>
            <Icon
              ref={buttonRef}
              className="nt-modal__close-btn"
              name="x"
              onClick={handleClose}
              size={20}
            />
            {children}
          </div>
        </div>
      </FocusTrap>
    </Portal>
  );
};
