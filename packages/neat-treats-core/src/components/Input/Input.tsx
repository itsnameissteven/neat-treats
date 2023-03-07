import { classNames } from '@neat-treats/utils';
import React, { forwardRef, useId } from 'react';
import { Element } from '../..';
import './Input.scss';

export type NTInputProps = GenericComponentProps<'input'> & {
  isError?: boolean;
  label?: string;
  className?: string;
};

export const Input = React.memo(
  forwardRef(
    (
      { className = '', isError = false, label = '', ...props }: NTInputProps,
      ref?: PolymorphicRef<'input'>
    ) => {
      const id = useId();
      return (
        <div className="nt-input-container">
          {label && <label htmlFor={props?.id || id}>{label}</label>}
          <Element
            ref={ref}
            {...props}
            as="input"
            id={props?.id || id}
            className={classNames(`nt-input ${className}`, {
              ['nt-input--error']: isError,
            })}
          />
        </div>
      );
    }
  )
);

Input.displayName = 'Input';
