import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { BackDrop, Modal, CloseModalBtn } from './CustomModal.styled';

import icons from '../../assets/icons/svg-sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const CustomModal = ({
  onClose,
  children,
  modalStyles,
  modalTabletStyles,
  modalDesktopStyles,
  modal320Styles,
}) => {
  const scrollY = window.scrollY;

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollY}px`;
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.position = '';
      window.scrollTo(0, scrollY);
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [onClose, scrollY]);

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <Modal
        modal320Styles={modal320Styles}
        modalStyles={modalStyles}
        modalTabletStyles={modalTabletStyles}
        modalDesktopStyles={modalDesktopStyles}
      >
        <CloseModalBtn type="button" onClick={onClose}>
          <svg width="20" height="20" stroke="white">
            <use href={icons + '#icon-closemodal'} />
          </svg>
        </CloseModalBtn>
        {children}
      </Modal>
    </BackDrop>,
    modalRoot
  );
};
