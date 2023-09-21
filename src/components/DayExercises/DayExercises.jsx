import {
  NotProduct,
  ProductWrapper,
  TitleNav,
  TitleP,
  SvgStyle,
  WrapperA,
  NavP,
} from './DayExercises.styled';
import ico from '../../assets/icons/svg-sprite.svg'

import { NavLink } from "react-router-dom";



export const DayExercises = () => {
  return (
    <ProductWrapper>
      <TitleNav>
        <TitleP>Exercises</TitleP>
        <WrapperA>
        <NavLink to="/exercises" style={{display:'flex', alignItems:'center'}}>
          <NavP>Add exercise</NavP>
          <SvgStyle >
            <use href={ico + `#icon-nextarrow`}></use>
          </SvgStyle>
        </NavLink>
        </WrapperA>

      </TitleNav>
      <NotProduct>Not found exercises</NotProduct>
    </ProductWrapper>
  );
};
