import { Tutorial } from './TutorialBtn.styled';
import { TutorialIcon } from './TutorialBtn.styled';
import { TutorialInfo } from './TutorialBtn.styled';
import { SpanNumber } from './TutorialBtn.styled';
import { SpanVideo } from './TutorialBtn.styled';
import icons from '../../assets/icons/svg-sprite.svg';
import { useEffect, useState } from 'react';
import { getTotalExercises } from 'services/powerPulseApi';

export const TutorialBtn = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const exercises = await getTotalExercises();

        setInfo(exercises.totalExercises);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Tutorial>
      <TutorialIcon>
        <svg fill="#efede8">
          <use href={icons + '#icon-playbutton'}></use>
        </svg>
      </TutorialIcon>
      <TutorialInfo>
        <SpanNumber>{info}</SpanNumber>
        <SpanVideo>Video tutorial</SpanVideo>
      </TutorialInfo>
    </Tutorial>
  );
};
