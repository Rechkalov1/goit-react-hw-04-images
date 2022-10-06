import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, Modals, ImgModal } from './Modal.styled';
const modalRoot = document.getElementById('modal-root');

export default function Modal({ onClose, imageTitle, largeImageURL }) {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  });
  const closeModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={closeModal}>
      <Modals>
        <ImgModal src={largeImageURL} alt={imageTitle} />
      </Modals>
    </Overlay>,
    modalRoot
  );
}
