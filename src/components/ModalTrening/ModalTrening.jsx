import {
  BurnedCaloriesDiv,
  BurnedCaloriesNumber,
  BurnedCaloriesText,
  Button,
  ButtonAdd,
  DivColumn,
  DivTimer,
  ImgDiv,
  ImgGif,
  ItemDiv,
  ItemTrening,
  ListTrening,
  NameItem,
  SpanButton,
  Svg,
  Text,
  ValueItem,
} from './ModalTrening.styled';
import icons from '../../assets/icons/svg-sprite.svg';
import { CustomModal } from 'components/CustomModal/CustomModal';
import { useState } from 'react';

const example = {
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl:
    'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif',
  name: '45° side bend',
  target: 'abs',
  burnedCalories: 323,
  time: 3,
};

export const ModalTrening = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaying = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <CustomModal
      modalStyles={{
        width: '335px',
        height: '858px',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        padding: '0',
      }}
      modalTabletStyles={{ width: '694px', height: '550px',display: 'flex',
    flexDirection: 'inherit',gap: '16px',
    margin: '0px',
    alignItems: 'flex-start', }}
    >
          <>
              <DivColumn>
        <ImgDiv>
          <ImgGif src={example.gifUrl} alt="" />
        </ImgDiv>
          <Text>Time</Text>
          <DivTimer></DivTimer>
          <Button type="button" onClick={togglePlaying}>
            <Svg>
              <svg fill="#EFEDE8">
                {isPlaying ? (
                  <use href={icons + '#icon-pause'}></use>
                ) : (
                  <use href={icons + '#icon-playbutton'}></use>
                )}
              </svg>
            </Svg>
          </Button>

          <BurnedCaloriesDiv>
            <BurnedCaloriesText>Burned calories:</BurnedCaloriesText>
            <BurnedCaloriesNumber>
              {example.burnedCalories}
            </BurnedCaloriesNumber>
          </BurnedCaloriesDiv>
              </DivColumn>
              <DivColumn>
        <ListTrening>
          {Object.entries(example)
            .filter(
              ([key, value]) => key !== 'gifUrl' && key !== 'burnedCalories'
            )
            .map(([key, value]) => (
              <ItemTrening>
                <ItemDiv>
                  <NameItem>{key}</NameItem>
                  <ValueItem>{value}</ValueItem>
                </ItemDiv>
              </ItemTrening>
            ))}
        </ListTrening>

        <ButtonAdd>
          <SpanButton>Add to diary</SpanButton>
                  </ButtonAdd>
                  </DivColumn>
      </>
    </CustomModal>
  );
};
