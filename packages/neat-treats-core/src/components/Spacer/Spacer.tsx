import React from 'react';

export type NTSpacerProps = {
  size: number;
  axis?: 'vertical' | 'horizontal';
  nonSquareSpace?: number;
  color?: string;
  style?: React.CSSProperties;
  isRounded?: boolean;
} & GenericComponentProps<'span'>;

export const Spacer = ({
  size,
  axis,
  style = {},
  color = 'transparent',
  nonSquareSpace = 1,
  isRounded = false,
  ...props
}: NTSpacerProps) => {
  const width = axis === 'vertical' ? nonSquareSpace : size;
  const height = axis === 'horizontal' ? nonSquareSpace : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        backgroundColor: color,
        borderRadius: isRounded ? '50px' : '0px',
        ...style,
      }}
      {...props}
    />
  );
};
