import {
  NotProduct,
  TitleNav,
  TitleP,
  SvgStyle,
  WrapperA,
  NavP,
} from './DayExercises.styled';
import ico from '../../assets/icons/svg-sprite.svg';
import ExercisesTable from 'components/ExercisesTable/ExercisesTable';

import { NavLink } from 'react-router-dom';
import { ProductWrapper } from 'components/DayProducts/DayProducts.styled';

export const DayExercises = ({ workouts, setWorkouts }) => {
  const isVoid = workouts.length;

  return (
    <ProductWrapper>
      <TitleNav>
        <TitleP>Exercises</TitleP>
        <WrapperA>
          <NavLink
            to="/exercises"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavP>Add exercise</NavP>
            <SvgStyle>
              <use href={ico + `#icon-nextarrow1`}></use>
            </SvgStyle>
          </NavLink>
        </WrapperA>
      </TitleNav>
      {isVoid ? (
        <ExercisesTable workouts={workouts} setWorkouts={setWorkouts} />
      ) : (
        <NotProduct>Not found exercises</NotProduct>
      )}
    </ProductWrapper>
  );
};
