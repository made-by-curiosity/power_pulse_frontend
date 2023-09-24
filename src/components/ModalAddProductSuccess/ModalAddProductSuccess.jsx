import { CustomModal } from "components/CustomModal/CustomModal";
// import React, { useState } from 'react'; 
import { ButtonNextProduct, Title, LinkToDiary, Calories, SvgArrov, Img } from './ModalAddProductSuccess.styled';
import ico from '../../assets/icons/svg-sprite.svg'
import foodIcon from '../../assets/images/png/food-icon.png'

export const ModalAddProductSuccess = () => {
  
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
    >
        <Img src={foodIcon} alt="Food Icon" />
        <Title>Well done</Title>
        <Calories>Calories: </Calories>
        <ButtonNextProduct>Next product</ButtonNextProduct>
        <LinkToDiary style={{ display: 'flex', alignItems: 'center' }}>
          to the diary
          <SvgArrov style={{ fill: "white", marginLeft: '8px' }}>
            <use href={ico + `#icon-nextarrow`} />
          </SvgArrov>
        </LinkToDiary>
    </CustomModal>
  );
};  