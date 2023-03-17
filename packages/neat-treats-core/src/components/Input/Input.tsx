import { classNames } from '@neat-treats/utils';
import React, { forwardRef, useId } from 'react';
import { Element, Label } from '../..';
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
        <div className={`nt-input-container ${className}`}>
          <Label
            htmlFor={props?.id || id}
            required={props.required}
            label={label}
          />
          <Element
            ref={ref}
            {...props}
            as="input"
            id={props?.id || id}
            className={classNames(`nt-input`, {
              ['nt-input--error']: isError,
            })}
          />
        </div>
      );
    }
  )
);

Input.displayName = 'Input';
