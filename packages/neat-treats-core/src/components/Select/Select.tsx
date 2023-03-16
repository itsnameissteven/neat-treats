import { classNames } from '@neat-treats/utils';
import React, { forwardRef, useMemo, useId } from 'react';
import { Element } from '../..';
import './Select.scss';

export type NTSelectProps = GenericComponentProps<'select'> & {
  options: string[];
  isError?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
};

export const Select = React.memo(
  forwardRef(
    (
      {
        className = '',
        isError = false,
        label = '',
        options,
        placeholder,
        ...props
      }: NTSelectProps,
      ref?: PolymorphicRef<'select'>
    ) => {
      const id = useId();
      const formattedOptions = useMemo(
        () => options.map((name) => ({ name, id: crypto.randomUUID() })),
        [options]
      );
      // Return
      return (
        <div className={`nt-select-container ${className}`}>
          {label && <label htmlFor={props?.id || id}>{label}</label>}
          <Element
            ref={ref}
            {...props}
            id={props?.id || id}
            as="select"
            className={classNames(`nt-select`, {
              ['nt-select--error']: isError,
              ['nt-select--empty']: !props.value,
            })}
          >
            <option value="" disabled selected>
              {placeholder || 'Select an Option'}{' '}
            </option>
            {formattedOptions.map((opt) => (
              <option key={opt.id} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </Element>
        </div>
      );
    }
  )
);

Select.displayName = 'Select';
