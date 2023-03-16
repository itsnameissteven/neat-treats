import './Image.scss';

export type NTImageProps = {
  className?: string;
  src: string;
  alt?: string;
  width?: string;
  height?: string;
} & GenericComponentProps<'img'>;

export const Image = ({
  className = '',
  src,
  alt,
  width = '',
  height = '',
}: NTImageProps) => {
  return (
    <div className={`nt-image ${className}`} style={{ width, height }}>
      <img src={src} alt={alt} />
    </div>
  );
};
