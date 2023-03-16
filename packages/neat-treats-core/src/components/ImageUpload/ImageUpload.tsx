import { useState, Suspense, useEffect } from 'react';
import { filterById } from '../../utils/filterById';
import { Icon } from '../Icon/Icon';
import './ImageUpload.scss';

type NTFile = { id: string; file: File };
export type NTImageUploadProps = {
  className?: string;
  onChange?: (data: NTFile[]) => unknown;
};

export const ImageUpload = ({
  className = '',
  onChange,
}: NTImageUploadProps) => {
  const [files, setFiles] = useState<NTFile[]>([]);

  useEffect(() => {
    onChange?.(files);
  }, [files]);

  const srcs = files.map((el) => {
    const url = URL.createObjectURL(el.file);
    return { id: el.id, url, name: el.file.name };
  });

  const updateFileSelection = (Files: FileList | null) => {
    const selection = Array.from(Files || []).reduce((acc: NTFile[], file) => {
      if (file.type.includes('image')) {
        return [...acc, { id: crypto.randomUUID(), file }];
      }
      return acc;
    }, []);
    setFiles([...files, ...selection]);
  };

  const addImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFileSelection(e.target.files);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    updateFileSelection(e.dataTransfer.files);
  };

  return (
    <div className={`nt-file-upload-container ${className}`}>
      <label
        className={`nt-file-upload`}
        onDragOverCapture={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        Click or Drop Images
        <input type="file" multiple accept="image/*" onChange={addImages} />
      </label>
      <div className="nt-file-upload-selection">
        {srcs.map(({ url, id, name }) => (
          <Suspense fallback={null} key={id}>
            <div className="nt-image-container">
              <div className="nt-image">
                <img src={url} />
              </div>
              <p>{name}</p>
              <Icon
                className="nt-image-icon"
                name="x-circle-f"
                size={12}
                onClick={() => setFiles((el) => filterById(el, id, false))}
              />
            </div>
          </Suspense>
        ))}
      </div>
    </div>
  );
};
