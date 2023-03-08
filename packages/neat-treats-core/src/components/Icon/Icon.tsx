import React from 'react';
import { icons } from './icons';

export type NTIconProps = {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Icon = ({
  name,
  size,
  color,
  className = '',
  onClick,
  disabled,
}: NTIconProps) => {
  // started logic for dynamic import
  let Component: any = null;

  const iconName = name
    .split('-')
    .map((string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })
    .join('');
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
      className: `${'nt-icon'} ${className}`,
      ...props,
    });
  };
  // Return Button if click handler passed
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${'nt-icon'} ${className}`}
        disabled={disabled}
      >
        <CreatedItem />
      </button>
    );
  }

  return <CreatedItem />;
};
