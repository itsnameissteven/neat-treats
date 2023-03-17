import { useState } from 'react';
import { classNames } from '@neat-treats/utils';
import './Switch.scss';

export type NTSwitchProps = {
  className?: string;
  onClick?: (v: boolean) => void;
};

export const Switch = ({ className = '', onClick }: NTSwitchProps) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    onClick?.(!isOn);
    setIsOn(!isOn);
  };

  return (
    <button className={`nt-switch ${className}`} onClick={handleClick}>
      <span
        className={classNames('nt-switch__ball', {
          'nt-switch__ball--on': isOn,
          'nt-switch__ball--off': !isOn,
        })}
      />
    </button>
  );
};
