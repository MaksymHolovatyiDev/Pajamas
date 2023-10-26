import React, {useState} from 'react';

import Plus from './assets/plus.svg';
import Minus from './assets/minus.svg';

import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';

import {Modal} from '../Modal/Modal';
import {Button} from '../Button/Button';

const MainContent: React.FC = ({currentImage, range, setRange}: any) => {
  const onRangeChange = (evt: any) => {
    setRange(evt.target.value);
  };

  const onPlusClick = () => {
    if (range !== 200) setRange((prevState: number) => ++prevState);
  };

  const onMinusClick = () => {
    if (range !== 100) setRange((prevState: number) => --prevState);
  };

  return (
    <div className={styles['modal-container']}>
      <div className={styles['image-container']}>
        <img
          src={URL.createObjectURL(currentImage)}
          alt="Preview image"
          className={styles['image-preview__back']}
          style={{
            height: `${(256 * range) / 100}px`,
            width: `${(256 * range) / 100}px`,
          }}
        />
        <div className={styles['image-preview__front']}>
          <img
            src={URL.createObjectURL(currentImage)}
            alt="Preview image"
            style={{
              height: `${(256 * range) / 100}px`,
              width: `${(256 * range) / 100}px`,
            }}
          />
        </div>
      </div>
      <div className={styles['slider-container']}>
        <button
          onClick={onMinusClick}
          type="button"
          className={styles['base-button']}>
          <ReactSVG src={Minus} />
        </button>
        <input
          className={styles.bar}
          type="range"
          min={100}
          max={200}
          step={1}
          value={range}
          onChange={onRangeChange}
        />
        <button
          onClick={onPlusClick}
          type="button"
          className={styles['base-button']}>
          <ReactSVG src={Plus} />
        </button>
      </div>
    </div>
  );
};

export const CropModal: React.FC<any> = ({
  currentImage,
  closeModal,
  saveImage,
}: any) => {
  const [range, setRange] = useState<number>(100);

  return (
    <Modal
      title="Crop avatar"
      mainContent={MainContent({currentImage, range, setRange})}
      onClose={closeModal}
      buttons={[
        Button({
          onClick: closeModal,
          text: 'Close',
        }),
        Button({
          type: 'primary',
          onClick: () => saveImage(currentImage, range),
          text: 'Save avatar',
        }),
      ]}
    />
  );
};
