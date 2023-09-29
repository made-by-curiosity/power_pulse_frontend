import { CustomModal } from 'components/CustomModal/CustomModal';
import { MainButton } from 'components/MainButton/MainButton';
import thumb_up from '../../assets/images/modal_img/thumb_up_origin.png';
import {
  Img,
  Wrapper,
  Title,
  TextWrapper,
  Text,
  Value,
  BtnWrapper,
  CustomLink,
} from './ModalExercise.styled';
import sprite from '../../assets/icons/svg-sprite.svg';

export const ModalExercise = ({ time, calories, onClick, onClose }) => {
  return (
    <CustomModal
      modalStyles={{ maxWidth: '335px', width: '100%', height: '384px' }}
      modalTabletStyles={{ width: '430px', height: '439px' }}
      modalDesktopStyles={{ width: '430px', height: '439px' }}
      onClose={onClose}
    >
      <Wrapper>
        <Img src={thumb_up} alt="Thumb Up" />
        <TextWrapper>
          <Title>Well done</Title>
          <ul>
            <Text>
              Your time:<Value>{time ? time : 0} minutes</Value>
            </Text>
            <Text>
              Burned calories:<Value>{calories ? calories : 0}</Value>
            </Text>
          </ul>
        </TextWrapper>
        <BtnWrapper>
          <MainButton
            onClick={onClose}
            filled={'#E6533C'}
            text={'Next exercise'}
            type={'button'}
            modalButton={'modalButton'}
          />
        </BtnWrapper>
        <CustomLink to={'/diary'}>
          To the diary
          <svg width=" 16px" height="16px">
            <use href={sprite + '#icon-modal-nextarrow'}></use>
          </svg>
        </CustomLink>
      </Wrapper>
    </CustomModal>
  );
};
