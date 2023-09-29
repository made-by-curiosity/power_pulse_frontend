import {
  Calories,
  SvgArrov,
  Img,
  LinkToDiary,
} from './ModalAddProductSuccess.styled';
import { CustomModal } from 'components/CustomModal/CustomModal';
import { MainButton } from 'components/MainButton/MainButton';
import { Title } from 'components/Title/Title';
import ico from '../../assets/icons/svg-sprite.svg';
import foodIcon from '../../assets/images/png/food-icon.png';

export const ModalAddProductSuccess = ({ onClose }) => {
  const handleNextProductClick = () => {
    onClose();
  };

  return (
    <CustomModal
      modal320Styles={{
        width: '280px',
      }}
      modalStyles={{
        width: '335px',
        height: '400px',
        display: 'flex',
        gap: '16px',

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      modalTabletStyles={{
        width: '430px',
        height: '440px',
      }}
      onClose={onClose}
    >
      <Img src={foodIcon} alt="Food Icon" />
      <Title>{'Well done'}</Title>
      <Calories>Calories: {}</Calories>
      <MainButton
        btnStyles={{ marginBottom: '16px' }}
        type="button"
        text="Next product"
        modalButton
        filled
        onClick={handleNextProductClick}
      ></MainButton>
      <LinkToDiary to="/diary">
        To the diary
        <SvgArrov>
          <use href={ico + `#icon-nextarrow`} />
        </SvgArrov>
      </LinkToDiary>
    </CustomModal>
  );
};
