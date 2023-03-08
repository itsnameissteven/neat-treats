import React from 'react';
import { Element } from '../..';
import './Button.scss';

export type NTButtonProps = GenericComponentProps<'button'>;

export const Button = React.memo(
  React.forwardRef(
    (
      { className = '', children, ...props }: NTButtonProps,
      ref?: PolymorphicRef<'button'>
    ) => {
      return (
        <Element
          {...props}
          as="button"
          ref={ref}
          className={`neat-treats-button ${className}`}
        >
          {children}
        </Element>
      );
    }
  )
);

Button.displayName = 'Button';
