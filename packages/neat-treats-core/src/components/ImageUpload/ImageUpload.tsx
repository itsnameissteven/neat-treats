import { useState } from 'react';
import { filterById } from '../../utils/filterById';
import { Icon } from '../Icon/Icon';
import './ImageUpload.scss';

export type NTImageUploadProps = {
  className?: string;
};

const imageContainer = ({}) => {};

export const ImageUpload = ({ className = '' }: NTImageUploadProps) => {
  const [files, setFiles] = useState<{ id: string; file: File }[]>([]);

  const srcs = files.map((el) => {
    return { id: el.id, url: URL.createObjectURL(el.file), name: el.file.name };
  });

  const addImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selection = Array.from(e.target.files || []).map((file) => {
      return { id: crypto.randomUUID(), file };
    });
    setFiles([...files, ...selection]);
  };

  return (
    <>
      <label className={`nt-file-upload ${className}`}>
        Click or Drop Images
        <input type="file" multiple accept="image/*" onChange={addImages} />
      </label>
      {srcs.map(({ url, id, name }) => (
        <div className="nt-image-container">
          <div className="nt-image">
            <img src={url} key={id} />
          </div>
          <p>{name}</p>
          <Icon
            className="nt-image-icon"
            name="x-circle-f"
            size={12}
            onClick={() => setFiles((el) => filterById(el, id, false))}
          />
        </div>
      ))}
    </>
  );
};
