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

export const DayProducts = ({ meals, setMeals }) => {
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
      {isVoid ? (
        <ProductsTable meals={meals} setMeals={setMeals} />
      ) : (
        <NotProduct>Not found products</NotProduct>
      )}
    </ProductWrapper>
  );
};
