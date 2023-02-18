import React from 'react';
import { Element } from '.';

// Interfaces and Types

export type ButtonProps = GenericComponentProps<'button'>;

export const Button = React.memo(
  React.forwardRef(
    (
      { className = '', children, ...props }: ButtonProps,
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
