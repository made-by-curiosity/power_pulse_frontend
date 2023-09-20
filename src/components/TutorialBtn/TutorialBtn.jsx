import { Tutorial } from './TutorialBtn.styled';
import { TutorialIcon } from './TutorialBtn.styled';
import { TutorialInfo } from './TutorialBtn.styled';
import { SpanNumber } from './TutorialBtn.styled';
import { SpanVideo } from './TutorialBtn.styled';
import icons from '../../assets/icons/svg-sprite.svg';



export const TutorialBtn = () => {
  return (
    <Tutorial>
      <TutorialIcon>
         <svg fill="#efede8">
          {' '}
          <use href={icons + '#icon-playbutton'}></use>
        </svg>
      </TutorialIcon>
      <TutorialInfo>
        <SpanNumber>350+</SpanNumber>
        <SpanVideo>Video tutorial</SpanVideo>
      </TutorialInfo>
    </Tutorial>
  );
};
