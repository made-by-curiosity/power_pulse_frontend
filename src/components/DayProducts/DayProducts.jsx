import {
  NotProduct,
  ProductWrapper,
  TitleNav,
  TitleP,
  SvgStyle,
  WrapperA,
  NavP,
} from './DayProducts.styled';
import ico from '../../assets/icons/svg-sprite.svg';
import ProductsTable from 'components/ProductsTable/ProductsTable';

import { NavLink } from 'react-router-dom';
import { getMeals } from 'services/powerPulseApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserParams } from 'redux/auth/selectors';


export const DayProducts = ({date}) => {
  const [meals, setMeals] = useState([]);
  const { blood } = useSelector(selectUserParams);

  useEffect(() => {
    try {
      (async () => {
        const res = await getMeals(date);
        setMeals(res);
      })();
    } catch (error) {}
  }, [date]);

  const isVoid = meals.length;

  return (
    <ProductWrapper>
      <TitleNav>
        <TitleP>Products</TitleP>
        <WrapperA>
          <NavLink
            to="/products"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavP>Add product</NavP>
            <SvgStyle>
              <use href={ico + `#icon-nextarrow1`}></use>
            </SvgStyle>
          </NavLink>
        </WrapperA>
      </TitleNav>
      {isVoid ? <ProductsTable meals={meals} blood={blood} /> :
      <NotProduct>Not found products</NotProduct>}
    </ProductWrapper>
  );
};
