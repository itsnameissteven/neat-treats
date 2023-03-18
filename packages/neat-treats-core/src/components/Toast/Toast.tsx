import './Toast.scss';

export type NTToastProps = {
  className?: string;
  content: string;
};

export const Toast = ({ className, content }: NTToastProps) => {
  return (
    <div className={`nt-toast ${className}`}>
      <p>{content}</p>
    </div>
  );
};
