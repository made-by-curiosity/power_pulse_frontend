import { CustomModal } from "components/CustomModal/CustomModal";
import React, { useState } from 'react'; // Імпортуємо useState з бібліотеки 'react'
import { ButtonNextProduct, Title, LinkToDiary, Calories, SvgArrov } from './ModalAddProductSuccess.styled';
import ico from '../../assets/icons/svg-sprite.svg'

export const ModalAddProductSuccess = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlaying = () => {
      setIsPlaying(prevState => !prevState);
    };
  
    return (
      <CustomModal>
          <Title>Well done</Title>
          <Calories>Calories: </Calories>
          <ButtonNextProduct>Next product</ButtonNextProduct>
          {/* Використовуйте внутрішній <span> для тексту та іконки */}
          <LinkToDiary>
            <span>to the diary</span>
            <SvgArrov style={{ fill: "white" }}>
  <use href={ico + `#icon-nextarrow`} />
</SvgArrov>
          </LinkToDiary>
      </CustomModal>
    );
  };
  
  
  
  
  
  