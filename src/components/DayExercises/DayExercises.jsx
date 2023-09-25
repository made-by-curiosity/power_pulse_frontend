import {
  NotProduct,
  ProductWrapper,
  TitleNav,
  TitleP,
  SvgStyle,
  WrapperA,
  NavP,
} from './DayExercises.styled';
import ico from '../../assets/icons/svg-sprite.svg';
import ExercisesTable from 'components/ExercisesTable/ExercisesTable';

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWorkouts } from 'services/powerPulseApi';

export const DayExercises = ({date}) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const res = await getWorkouts(date);
        setExercises(res);
      })();
    } catch (error) {}
  }, [date]);

  const isVoid = exercises.length;

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
      {isVoid ? <ExercisesTable exercises={exercises} /> :
      <NotProduct>Not found exercises</NotProduct>}
    </ProductWrapper>
  );
};