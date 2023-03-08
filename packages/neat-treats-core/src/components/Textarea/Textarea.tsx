import React, { useId } from 'react';
import { Element } from '../..';
import { classNames } from '@neat-treats/utils';
import './Textarea.scss';

export type NTTextareaProps = GenericComponentProps<'input'> & {
  isError?: boolean;
  label?: string;
};

export const Textarea = React.memo(
  React.forwardRef(
    (
      {
        className = '',
        isError = false,
        label,
        children,
        ...props
      }: NTTextareaProps,
      ref?: PolymorphicRef<'textarea'>
    ) => {
      const id = useId();
      return (
        <div className="nt-textarea-container">
          {label && <label htmlFor={props?.id || id}>{label}</label>}
          <Element
            as="textarea"
            {...props}
            id={props.id || id}
            ref={ref}
            className={classNames(`nt-textarea ${className}`, {
              ['nt-textarea--error']: isError,
            })}
          >
            {children}
          </Element>
        </div>
      );
    }
  )
);

Textarea.displayName = 'Textarea';
