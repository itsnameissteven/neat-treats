import { classNames } from '@neat-treats/utils';
export type NTDNDContainerProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

export const DNDContainer = ({ className }: NTDNDContainerProps) => {
  return (
    <div className={classNames('nt-dnd-container', className)}>
      <h1>IHASHDHFAHSDHF</h1>
    </div>
  );
};
