import { useState, useEffect } from 'react';
import { filterById } from '../../utils/filterById';
import { Icon } from '../Icon/Icon';
import { Image } from '../Image/Image';
import { Modal } from '../Modal/Modal';
import './ImageUpload.scss';

type NTFile = { id: string; file: File };
export type NTImageUploadProps = {
  className?: string;
  onChange?: (data: NTFile[]) => unknown;
};

const defaultPreview = { src: '', name: '', isOpen: false };

export const ImageUpload = ({
  className = '',
  onChange,
}: NTImageUploadProps) => {
  const [files, setFiles] = useState<NTFile[]>([]);
  const [previewImage, setPreviewImage] = useState(defaultPreview);

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
          <button
            className="nt-image-container"
            key={id}
            onClick={() => setPreviewImage({ src: url, name, isOpen: true })}
          >
            <Image className="nt-image-thumb" src={url} alt={name} />
            <p>{name}</p>
            <Icon
              className="nt-image-icon"
              name="x-circle-f"
              size={12}
              onClick={() => setFiles((el) => filterById(el, id, false))}
            />
          </button>
        ))}
      </div>
      <Modal
        isOpen={previewImage.isOpen}
        onClose={() => setPreviewImage((prev) => ({ ...prev, isOpen: false }))}
      >
        <Image
          className="nt-preview-image"
          src={previewImage.src}
          alt={previewImage.name}
        />
      </Modal>
    </div>
  );
};
