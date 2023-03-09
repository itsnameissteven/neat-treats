import { useState, useEffect, cloneElement, Children } from 'react';
import './MasonryGrid.scss';
export type NTMasonryGridProps = {
  children: JSX.Element[];
  minWidth?: number;
  maxWidth?: number;
  gridGap?: string;
};

export const MasonryGrid = ({
  children,
  minWidth = 750,
  maxWidth = 1200,
  gridGap,
}: NTMasonryGridProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { innerWidth } = window;

      const handleResize = () => {
        if (innerWidth < maxWidth && innerWidth > minWidth) {
          return;
        }
        setWidth(innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const handleChildResize = () => {
      const elements = Array.from(
        document.getElementsByClassName(
          'masonry-grid__child'
        ) as HTMLCollectionOf<HTMLElement>
      );

      for (const child of elements) {
        child.style.height = 'fit-content';
        const height = window
          .getComputedStyle(child)
          .getPropertyValue('height');
        const rowSpan = Math.round(parseInt(height, 10) / 40) + 1;
        child.style.cssText += `
          grid-row: span ${rowSpan};
          height: auto;
          opacity: 1;
        `;
      }
    };

    handleChildResize();
  }, [width]);

  return (
    <div className="masonry-grid" style={gridGap ? { gridGap } : {}}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          className: `${child.props.className} masonry-grid__child`,
        });
      })}
    </div>
  );
};
