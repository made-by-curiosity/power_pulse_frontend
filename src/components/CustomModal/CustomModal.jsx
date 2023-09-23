import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { BackDrop, Modal, CloseModalBtn } from './CustomModal.styled';

import icons from '../../assets/icons/svg-sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const CustomModal = ({ onClose, children, modalStyles, modalTabletStyles, modalDesktopStyles }) => {
   

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

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <Modal modalStyles={modalStyles} modalTabletStyles={modalTabletStyles} modalDesktopStyles={modalDesktopStyles}>
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