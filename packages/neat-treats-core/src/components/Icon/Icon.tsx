import React, { Suspense, forwardRef } from 'react';
import { icons } from './icons';
import './Icon.scss';

export type NTIconProps = {
  name: PascalToKebab<keyof typeof icons>;
  color?: string;
  size?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const Icon = forwardRef<HTMLButtonElement, NTIconProps>(
  ({ name, size = 16, color, className = '', onClick, disabled }, ref) => {
    // started logic for dynamic import
    let Component: any = null;

    const iconName = name
      .split('-')
      .map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      })
      .join('') as keyof typeof icons;
    try {
      Component = icons[iconName];
    } catch {
      console.log(`Icon ${name} does not exist.`);
    }

    if (!Component) {
      return null;
    }

    const CreatedItem = ({ ...props }) => {
      return React.createElement(Component, {
        size,
        color,
        className: `${'nt-icon'} ${onClick ? '' : className}`,
        ...props,
      });
    };
    // Return Button if click handler passed
    if (onClick) {
      return (
        <button
          ref={ref}
          onClick={onClick}
          className={`${`nt-icon-btn`} ${className}`}
          disabled={disabled}
        >
          <Suspense fallback={null}>
            <CreatedItem />
          </Suspense>
        </button>
      );
    }

    return (
      <Suspense fallback={null}>
        <CreatedItem />
      </Suspense>
    );
  }
);

Icon.displayName = 'Icon';
