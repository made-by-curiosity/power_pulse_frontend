import {
  FormField,
  InputProductName,
  InputProductAmount,
  ContainCaloriesDiv,
  ContainCaloriesText,
  ContainCaloriesNumber,
  ModalBtns,
  LabelGrams,
  AmountWrapper,
} from './ModalAddProduct.styled';

import { MainButton } from 'components/MainButton/MainButton';
import { CustomModal } from 'components/CustomModal/CustomModal';
import { useState } from 'react';
import { addMeal } from 'services/powerPulseApi';
import { Notify } from 'notiflix';
import { capitalizeString } from 'utils/capitalize';

const calculateCalories = (calories, amount, weight) => {
  return Math.ceil((calories / weight) * amount);
};

export const ModalAddProduct = ({
  productInfo,
  toggleAddModal,
  toggleSuccessModal = () => null,
  setTotalCalories,
}) => {
  const {
    title = 'Mango',
    calories = 67,
    weight = 100,
    _id = '5d51694902b2373622ff5bd0',
  } = productInfo;

  const [amount, setAmount] = useState(0);
  const totalCalories = calculateCalories(calories, amount, weight);

  const handleAddToDiary = async () => {
    const mealToSend = {
      productId: _id,
      amount,
      calories: totalCalories,
    };

    if (!amount) {
      Notify.failure(`Please choose consumed amount. It can't be 0 gram`);
      return;
    }

    try {
      await addMeal(mealToSend);
      setTotalCalories(totalCalories);
      toggleSuccessModal();
    } catch (error) {
      Notify.failure('Ops...Something went wrong. Please try again.');
      console.log(error);
    } finally {
      toggleAddModal();
    }
  };

  return (
    <CustomModal
      onClose={toggleAddModal}
      modal320Styles={{
        width: '87vw',
      }}
      modalStyles={{
        maxWidth: '335px',
        height: '280px',
        padding: '48px  24px',
        borderRadius: '12px',
        border: '1px solid rgba(239, 237, 232, 0.20)',
        background: '#10100F',
      }}
      modalTabletStyles={{
        maxWidth: '479px',
        height: '286px',
        padding: '48px  32px',
      }}
      modalDesktopStyles={{
        maxWidth: '479px',
        height: '286px',
        padding: '48px  32px',
      }}
    >
      <FormField>
        <InputProductName
          name="product"
          type="text"
          value={capitalizeString(title)}
          readOnly
        />
        <AmountWrapper>
          <LabelGrams>grams</LabelGrams>
          <InputProductAmount
            name="amount"
            type="text"
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
            autoComplete="off"
          />
        </AmountWrapper>
      </FormField>

      <ContainCaloriesDiv>
        <ContainCaloriesText>Calories:</ContainCaloriesText>
        <ContainCaloriesNumber>{totalCalories}</ContainCaloriesNumber>
      </ContainCaloriesDiv>

      <ModalBtns>
        <MainButton
          type="button"
          text="Add to diary"
          filled
          modalButton
          btnStyles={{
            width: 'max-content',
            letterSpacing: -0.1,
            padding: '12px 20px',
          }}
          btn320Styles={{
            padding: '12px 16px',
            fontSize: '14px',
          }}
          onClick={handleAddToDiary}
        />
        <MainButton
          type="button"
          text="Cancel"
          modalButton
          onClick={toggleAddModal}
          btn320Styles={{
            padding: '12px 28px',
            fontSize: '14px',
          }}
        />
      </ModalBtns>
    </CustomModal>
  );
};
