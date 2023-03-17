import { ProgressRing } from '../ProgressRing/ProgressRing';
import './Loader.scss';

export type NTLoaderProps = {
  className?: string;
  /** Size of the progress ring */
  size?: number;
  /** Thickness of Strock */
  stroke?: number;
  /** Initial border color */
  border?: string;
  /** Color of completed color */
  borderSecondary?: string;
};

export const Loader = ({
  className = '',
  size = 50,
  border,
  borderSecondary,
  stroke = 4,
}: NTLoaderProps) => {
  return (
    <ProgressRing
      className={`loader ${className}`}
      percentageComplete={30}
      size={size}
      border={border}
      completedBorder={borderSecondary}
      stroke={stroke}
      hasPercentageDisplay={false}
    />
  );
};
