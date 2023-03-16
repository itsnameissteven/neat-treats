export type NTFileUploadProps = {
  className?: string;
};

export const FileUpload = ({ className }: NTFileUploadProps) => {
  return <input type="file" multiple accept="image/*" onChange={() => null} />;
};
