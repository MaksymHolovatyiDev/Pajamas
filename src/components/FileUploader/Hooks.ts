import {useState} from 'react';

export function useFileUpload() {
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState<any[]>([]);

  const onFileUpload = (evt: any) => {
    if (evt.target.files && evt.target.files[0]) {
      setCurrentImage(evt.target.files[0]);
    }
  };

  const onRemoveButtonClick = (elementIdx: number) => {
    const arr = images.filter((_, idx) => idx !== elementIdx);
    setImages(arr);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const saveImage = (img: any, scale: number) => {
    img.scale = scale;
    setImages(prevState => [...prevState, img]);
    setCurrentImage(null);
  };

  return {
    images,
    onRemoveButtonClick,
    onFileUpload,
    currentImage,
    closeModal,
    saveImage,
  };
}
