import {
  FormField,
  InputProductName,
  InputProductAmount,
  ContainCaloriesDiv,
  ContainCaloriesText,
  ContainCaloriesNumber,
  ModalBtns, LabelGrams,
} from './ModalAddProduct.styled';

import { MainButton } from 'components/MainButton/MainButton';
import { CustomModal } from 'components/CustomModal/CustomModal';


export const ModalAddProduct = () => {
  return (
    <CustomModal
      modalStyles={{
        width: '335px',
        height: '280px',
        padding: '48px  24px',
        borderRadius: '12px',
        border: '1px solid rgba(239, 237, 232, 0.20)',
        background: '#10100F',
      }}
      modalTabletStyles={{
        width: '479px',
        height: '286px',
        padding: '48px  32px',
      }}
      modalDesktopStyles={{
        width: '479px',
        height: '286px',
        padding: '48px  32px',
      }}
    >
          <FormField>
              <InputProductName name="name" type="text" value="Banana juice"></InputProductName>
              <LabelGrams>grams</LabelGrams>
        <InputProductAmount name="amount" type="text" value="146"> 
        
              </InputProductAmount>
              </FormField>
          
      <ContainCaloriesDiv>
        <ContainCaloriesText>Calories:</ContainCaloriesText>
        <ContainCaloriesNumber>96</ContainCaloriesNumber>
      </ContainCaloriesDiv>

      <ModalBtns>
              <MainButton type="button" text="Add to diary" filled btnStyles={{ padding: '14px 26px', fontSize:'16px'} } />
        <MainButton type="button" text="Cancel" />
      </ModalBtns>
    </CustomModal>
  );
};

