import { 
  Calories, 
  SvgArrov, 
  Img, 
  LinkToDiary 
} from './ModalAddProductSuccess.styled';
import { CustomModal } from "components/CustomModal/CustomModal"; 
import { MainButton } from "components/MainButton/MainButton";
import { Title } from "components/Title/Title";
import ico from '../../assets/icons/svg-sprite.svg';
import foodIcon from '../../assets/images/png/food-icon.png';

export const ModalAddProductSuccess = ({ onClose }) => {

  const handleNextProductClick = () => {
    onClose();
  };

  return (
    <CustomModal
      modalMobileStyles={{
          width: '335px',
          height: '362px',
          display: 'flex',
          flexDirection: 'inherit',gap: '16px',
          alignItems: 'flex-start', 
      }}
      modalStyles={{
          width: '430px',
          height: '428px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
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
          onClick={handleNextProductClick}
        > 
        </MainButton>
        <LinkToDiary 
          to="/diary">
          to the diary
          <SvgArrov>
            <use href={ico + `#icon-nextarrow`} />
          </SvgArrov>
        </LinkToDiary>
    </CustomModal>
  );
};  