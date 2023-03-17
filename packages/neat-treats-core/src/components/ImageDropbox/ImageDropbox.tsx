import { useState, useEffect } from 'react';
import { filterById } from '../../utils/filterById';
import { Icon } from '../Icon/Icon';
import { Image } from '../Image/Image';
import { Modal } from '../Modal/Modal';
import './ImageDropbox.scss';

type NTFile = { id: string; file: File };
export type NTImageDropboxProps = {
  className?: string;
  onChange?: (data: NTFile[]) => unknown;
};

const defaultPreview = { src: '', name: '', isOpen: false };

export const ImageDropbox = ({
  className = '',
  onChange,
}: NTImageDropboxProps) => {
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
    <div className={`nt-image-dropbox-container ${className}`}>
      <label
        className={`nt-image-dropbox`}
        onDragOverCapture={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        Click or Drop Images
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={addImages}
          value={''}
        />
      </label>
      <div className="nt-image-dropbox-selection">
        {srcs.map(({ url, id, name }) => (
          <div
            role="button"
            className="nt-image-container"
            key={id}
            onClick={() => setPreviewImage({ src: url, name, isOpen: true })}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return;
              e.preventDefault();
              setPreviewImage({ src: url, name, isOpen: true });
            }}
          >
            <Image className="nt-image-thumb" src={url} alt={name} />
            <p>{name}</p>
            <Icon
              className="nt-image-icon"
              name="x-circle-f"
              size={12}
              onClick={(e) => {
                e.stopPropagation();
                setFiles((el) => filterById(el, id, false));
              }}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={previewImage.isOpen}
        onClose={() => setPreviewImage((prev) => ({ ...prev, isOpen: false }))}
      >
        <button>hey</button>
        <Image
          className="nt-preview-image"
          src={previewImage.src}
          alt={previewImage.name}
        />
      </Modal>
    </div>
  );
};
