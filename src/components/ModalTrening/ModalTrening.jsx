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
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';



const example = {
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl:
    'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif',
  name: '45° side bend',
  target: 'abs',
  burnedCalories: 323,
  time: 1,
};

export const ModalTrening = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSecond, setIsSecond] = useState(0 );

  function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

  const children = example.time * 60;
 
  useEffect(() => {
    let interval;
    if (isPlaying && isSecond !== children) {
      interval = setInterval(() => {
        setIsSecond((isSecond) => isSecond + 1);
      }, 1000);
    }
    else if (isSecond === children) { 
      setIsPlaying(false);
      setIsSecond(0)
    }

    return () => clearInterval(interval);
  }, [children, setIsPlaying, setIsSecond, isPlaying, isSecond]);

  const togglePlaying = () => {
    setIsPlaying(prevState => !prevState);
  };


 const timerFormat = formatTime(isSecond);

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
          <DivTimer>
            <Text>Time</Text>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={children}
              size={125}
              colors="#E6533C"
              trailColor="#EFEDE81A"
              strokeWidth={4}
            >
               {() => {
                return <div>{timerFormat}</div>;
      }}
              
            </CountdownCircleTimer>
            
          </DivTimer>
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
              <ItemTrening > 
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
