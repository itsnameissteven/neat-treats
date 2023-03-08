import React, { useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import { useLocalStorage, usePreventAnimation } from '@neat-treats/utils';
import './DarkModeButton.scss';

export type NTDarkModeButtonProps = {
  /** Optional className to pass to the top element*/
  className?: string;
  /** For additional functionality pass an onClick event */
  onClick?: () => void;
  /** Dark mode off icon jsx element */
  offIcon?: JSX.Element;
  /** Dark mode on icon jsx element */
  onIcon?: JSX.Element;
  /** Size of the button */
  size?: number;
};

export const DarkModeButton = ({
  className = '',
  onClick,
  offIcon,
  onIcon,
  size = 50,
}: NTDarkModeButtonProps) => {
  const [isDark, setIsDark] = useLocalStorage('dark-mode', true);
  const { noTransitionClass } = usePreventAnimation();

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  const handleClick = () => {
    setIsDark(!isDark);
    onClick?.();
  };

  const iconSize = size * 0.66;

  return (
    <button
      className={`dark-mode-button ${className}`}
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <span className={`dark-mode-button__icon--light ${noTransitionClass}`}>
        {offIcon || <Icon name={'sun'} size={iconSize} color="#1F2028" />}
      </span>
      <span className={`dark-mode-button__icon--dark ${noTransitionClass}`}>
        {onIcon || <Icon name={'moon'} size={iconSize} color="#fff" />}
      </span>
    </button>
  );
};
