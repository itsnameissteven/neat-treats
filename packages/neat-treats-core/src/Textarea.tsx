import React from 'react';
import { Element } from '.';
import { classNames } from '@neat-treats/utils';

// Interfaces and Types
interface ITextarea extends GenericComponentProps<'input'> {
  isError?: boolean;
}

const Textarea = React.forwardRef(
  (
    { className = '', isError = false, children, ...props }: ITextarea,
    ref?: PolymorphicRef<'textarea'>
  ) => {
    return (
      <Element
        as="textarea"
        {...props}
        ref={ref}
        className={classNames(`textarea ${className}`, {
          error: isError,
        })}
      >
        {children}
      </Element>
    );
  }
);

Textarea.displayName = 'Textarea';

export default React.memo(Textarea);
