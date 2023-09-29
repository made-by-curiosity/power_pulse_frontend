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
import { addWorkout } from 'services/powerPulseApi';
import { capitalizeString } from 'utils/capitalize';
import { Notify } from 'notiflix';

export const ModalTrening = ({
  onToogle,
  exerciseInfo,
  setIsSuccessOpen,
  setWorkoutDoneInfo,
}) => {
  const children = exerciseInfo.time * 60;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isSecond, setIsSecond] = useState(0);
  const [isCalories, setIsCalories] = useState(0);
  const [isRound, setIsRound] = useState(0);
  const [roundCounter, setRoundCounter] = useState(children);

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  const caloriesOneSeconds =
    Math.round((exerciseInfo.burnedCalories / children) * 100) / 100;

  useEffect(() => {
    let interval;
    if (isPlaying && roundCounter !== isSecond) {
      interval = setInterval(() => {
        setIsSecond(isSecond => isSecond + 1);
        setIsCalories(isCalories => isCalories + caloriesOneSeconds);
      }, 1000);
    } else if (isSecond === roundCounter) {
      setIsPlaying(false);
      setRoundCounter(roundCounter => roundCounter + children);
      setIsRound(isRound => isRound + 1);
    }

    return () => clearInterval(interval);
  }, [
    children,
    setIsPlaying,
    setIsSecond,
    isPlaying,
    isSecond,
    setIsCalories,
    caloriesOneSeconds,
    roundCounter,
  ]);

  const togglePlaying = () => {
    setIsPlaying(prevState => !prevState);
  };

  const timerFormat = formatTime(isSecond);

  const handleSendWorkout = async () => {
    if (isPlaying || isSecond < 1) {
      Notify.failure(
        `Impossible to add workout. Finish working out before adding!`
      );
      return;
    }

    const workout = {
      exerciseId: exerciseInfo._id,
      time: Math.ceil(isSecond / 60),
      calories: Math.ceil(isCalories),
    };

    try {
      const res = await addWorkout(workout);
      setWorkoutDoneInfo({
        time: res.time,
        calories: res.calories,
      });
      setIsSuccessOpen();
      onToogle();
    } catch (error) {
      Notify.failure('Ops...Something went wrong. Please try again.');
      console.log(error.message);
    }
  };

  return (
    <CustomModal
      onClose={onToogle}
      modalStyles={{
        width: '335px',
        height: '858px',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        padding: '0',
      }}
      modalTabletStyles={{
        width: '694px',
        height: '550px',
        display: 'flex',
        flexDirection: 'inherit',
        gap: '16px',
        margin: '0px',
        alignItems: 'flex-start',
      }}
    >
      <>
        <DivColumn>
          <ImgDiv>
            <ImgGif src={exerciseInfo.gifUrl} alt="" />
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
              onComplete={() => {
                if (isPlaying) {
                  return { shouldRepeat: true };
                }
              }}
            >
              {() => {
                return (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{timerFormat}</div>
                    <div>Round: {isRound}</div>
                  </div>
                );
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
              {Math.round(isCalories * 100) / 100}
            </BurnedCaloriesNumber>
          </BurnedCaloriesDiv>
        </DivColumn>
        <DivColumn>
          <ListTrening>
            {Object.entries(exerciseInfo)
              .filter(
                ([key, value]) =>
                  key !== 'gifUrl' && key !== 'burnedCalories' && key !== '_id'
              )
              .map(([key, value]) => (
                <ItemTrening key={value}>
                  <ItemDiv>
                    <NameItem>{capitalizeString(key)}</NameItem>
                    <ValueItem>{capitalizeString(value)}</ValueItem>
                  </ItemDiv>
                </ItemTrening>
              ))}
          </ListTrening>

          <ButtonAdd onClick={handleSendWorkout}>
            <SpanButton>Add to diary</SpanButton>
          </ButtonAdd>
        </DivColumn>
      </>
    </CustomModal>
  );
};
