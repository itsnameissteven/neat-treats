import React, { useRef, useEffect } from 'react';
import { usePreventAnimation } from '@neat-treats/utils';
import { Icon } from '../Icon/Icon';

export type NTActionButton = {
  size?: number;
  stroke?: number;
  onClick?: () => void;
  border?: string;
  activeBorder?: string;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
  iconName?: string;
  iconSize?: number;
  className?: string;
  children?: JSX.Element | string;
};

const ActionButton = ({
  size = 50,
  stroke = 2,
  border = 'grey',
  activeBorder = 'black',
  animationDirection,
  children,
  iconName = '',
  iconSize,
  className = '',
  onClick,
}: NTActionButton) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const { noAnimationClass } = usePreventAnimation();

  const width = size;
  const strokeWidth = stroke;
  const radius = width / 2 - strokeWidth * 2;

  const animationClass = animationDirection
    ? `animation-${animationDirection}`
    : '';

  useEffect(() => {
    const { current } = circleRef;

    if (!current) {
      return;
    }
    const radius = current.r.baseVal.value;

    const circumference = radius * 2 * Math.PI;

    current.style.strokeDasharray = `${0} ${circumference}`;
    current.style.strokeDashoffset = `${circumference}`;
  }, [circleRef.current]);

  const setProgress = (percent: number) => {
    const { current } = circleRef;
    if (!current) return;
    const radius = current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;
    current.style.strokeDasharray = `${circumference} ${circumference}`;
    current.style.strokeDashoffset = offset.toString();
  };

  return (
    <button className={`action-btn ${className}`} onClick={onClick}>
      <svg className="action-btn__progress-ring" height={width} width={width}>
        <circle
          className="action-btn__progress-ring__circle"
          stroke={border}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
        />
        <circle
          ref={circleRef}
          className={`action-btn__progress-ring__circle`}
          stroke={activeBorder}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
          onMouseEnter={() => setProgress(100)}
          onMouseLeave={() => setProgress(0)}
        />
      </svg>
      <div
        className={`action-btn__content ${animationClass} ${noAnimationClass}`}
      >
        {children ? (
          children
        ) : (
          <Icon name={iconName} size={iconSize || size * 0.6} />
        )}
      </div>
    </button>
  );
};

export default ActionButton;
