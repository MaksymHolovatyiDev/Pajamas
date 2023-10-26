import React from 'react';
import {ReactSVG} from 'react-svg';

import Close from './assets/close.svg';

import styles from './styled.module.scss';
import {CropModal} from './CropModal';
import {useFileUpload} from './Hooks';

interface FileUploaderProps {
  label?: string;
  help?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  help,
}: FileUploaderProps) => {
  const {
    images,
    onRemoveButtonClick,
    onFileUpload,
    currentImage,
    saveImage,
    closeModal,
  } = useFileUpload();

  return (
    <>
      <div className={styles['image-preview-container']}>
        {images.length !== 0 && (
          <div className={styles['image-preview']}>
            <img
              src={URL.createObjectURL(images[images.length - 1])}
              alt="Preview image"
              style={{
                height: `${(96 * images[images.length - 1].scale) / 100}px`,
                width: `${(96 * images[images.length - 1].scale) / 100}px`,
              }}
            />
          </div>
        )}
        <div className={styles.container}>
          <p className={styles['label-text']}>{label}</p>
          <div className={styles['file-names-container']}>
            <label htmlFor="file" className={styles['label-button']}>
              Choose file...
            </label>
            {images.map((el, idx) => (
              <div className={styles['file-text-container']}>
                <p>{el.name}</p>
                <button
                  type="button"
                  className={styles['base-button']}
                  onClick={() => onRemoveButtonClick(idx)}>
                  <ReactSVG src={Close} />
                </button>
              </div>
            ))}
          </div>
          <input
            onChange={onFileUpload}
            type="file"
            className={styles['file-uploader']}
            id="file"
            name="file"
            accept="image/png, image/jpeg"
            multiple
          />
          <p className={styles['help-text']}>{help}</p>
        </div>
      </div>

      {currentImage && (
        <CropModal
          currentImage={currentImage}
          closeModal={closeModal}
          saveImage={saveImage}
        />
      )}
    </>
  );
};
