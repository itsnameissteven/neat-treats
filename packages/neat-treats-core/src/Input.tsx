import React, { forwardRef, memo } from 'react';
import { Element } from '.';

export type InputProps = GenericComponentProps<'input'> & {
  isError?: boolean;
  label?: string;
  className?: string;
};

export const Input = memo(
  forwardRef(
    (
      { className = '', isError = false, label = '', ...props }: InputProps,
      ref?: PolymorphicRef<'input'>
    ) => {
      // Return
      return (
        <label>
          {label}
          <Element
            ref={ref}
            {...props}
            as="input"
            className={`input ${className}`}
          />
        </label>
      );
    }
  )
);

Input.displayName = 'Input';
