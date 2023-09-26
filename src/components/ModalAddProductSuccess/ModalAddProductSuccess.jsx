import { CustomModal } from "components/CustomModal/CustomModal";
import React, { useEffect } from 'react'; 
import { NavLink } from "react-router-dom";
import { MainButton } from "components/MainButton/MainButton";
import { Title } from "components/Title/Title";
import { Calories, SvgArrov, Img } from './ModalAddProductSuccess.styled';
import ico from '../../assets/icons/svg-sprite.svg';
import foodIcon from '../../assets/images/png/food-icon.png';

export const ModalAddProductSuccess = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <CustomModal
      modalMobileStyles={{
          width: '335px',
          height: '362px',
          display: 'flex',
          flexDirection: 'inherit',gap: '16px',
          margin: '0px',
          alignItems: 'flex-start', 
      }}
      modalStyles={{
          width: '430px',
          height: '428px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          padding: '0',
      }}
      onClose={onClose}
    >
        <Img src={foodIcon} alt="Food Icon" />
        <Title>{'Well done'}</Title>
        <Calories>Calories: {}</Calories>
        <MainButton 
          btnStyles={{marginBottom: "16px"}}
          type="button"
          text="Next product"
          modalButton
          filled
        > 
        </MainButton>
        <NavLink 
          to="/diary" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: "rgba(239, 237, 232, 0.30)" 
          }}
        >
          to the diary
          <SvgArrov 
            style={{ marginLeft: '8px' }}
          >
            <use href={ico + `#icon-nextarrow`} />
          </SvgArrov>
        </NavLink>
    </CustomModal>
  );
};  