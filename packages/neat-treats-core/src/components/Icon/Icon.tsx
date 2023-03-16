import React from 'react';
import { icons } from './icons';
import './Icon.scss';

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
  size = 16,
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
      className: `${'nt-icon'} ${className}`,
      ...props,
    });
  };
  // Return Button if click handler passed
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${'nt-icon'} ${`nt-icon-btn`} ${className}`}
        disabled={disabled}
      >
        <CreatedItem />
      </button>
    );
  }

  return <CreatedItem />;
};
