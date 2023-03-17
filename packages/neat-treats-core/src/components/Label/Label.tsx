import '../../styles/index.scss';

export type NTLabelProps = {
  className?: string;
  required?: boolean;
  htmlFor: string;
  label?: string;
} & GenericComponentProps<'label'>;

export const Label = ({
  className,
  label,
  htmlFor,
  required,
  ...props
}: NTLabelProps) => {
  if (!label) return null;
  return (
    <label htmlFor={htmlFor} {...props}>
      {label}
      {required && <span className="nt-required">*</span>}
    </label>
  );
};
