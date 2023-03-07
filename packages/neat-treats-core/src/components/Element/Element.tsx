import React from 'react';

export const Element = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, children, ...props }: PolymorphicComponentProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'button';

    return (
      <Component {...props} ref={ref} className={props.className}>
        {children}
      </Component>
    );
  }
);

Element.displayName = 'Element';
