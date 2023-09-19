import { Calories } from './CaloriesBtn.styled';
import { CaloriesIcon } from './CaloriesBtn.styled';
import { CaloriesInfo } from './CaloriesBtn.styled';
import { SpanNumb } from './CaloriesBtn.styled';
import { SpanCal } from './CaloriesBtn.styled';
import icons from '../../assets/icons/svg-sprite.svg';

export const CaloriesBtn = () => {
  return (
    <Calories>
      <CaloriesIcon>
        <svg fill="#efede8">
          {' '}
          <use href={icons + '#icon-running'}></use>
        </svg>
      </CaloriesIcon>
      <CaloriesInfo>
        <SpanNumb>500</SpanNumb>
        <SpanCal>cal</SpanCal>
      </CaloriesInfo>
    </Calories>
  );
};
