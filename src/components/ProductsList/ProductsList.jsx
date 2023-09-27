import { getAllProducts } from 'services/powerPulseApi';
import { useState, useEffect } from 'react';
import {
  ProductsContainer,
  ProductList,
  ProductsItem,
  RadCircle,
  GreenCircle,
  InfoContainer,
  DietTitle,
  Recommend,
  CaloriesIcon,
  MenuContainer,
  MenuTitle,
  DataInfo,
  AddIcon,
  AddProduct,
  BtnAddProduct,
} from './ProductsList.styled';
import { ModalAddProduct } from 'components/ModalAddProduct/ModalAddProduct';
import { ModalAddProductSuccess } from 'components/ModalAddProductSuccess/ModalAddProductSuccess';

import icons from '../../assets/icons/svg-sprite.svg';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  function getCurrentBlood() {
    const randomNumber = [1, 2, 3, 4];
    const number = Math.floor(Math.random() * randomNumber.length);
    return randomNumber[number];
  }

  const currentBlood = getCurrentBlood();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsList = await getAllProducts();
        setProducts(productsList);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ProductsContainer>
      {isAddModalOpen && (
        <ModalAddProduct
          productInfo={products}
          toggleAddModal={() => setIsAddModalOpen(state => !state)}
        />
      )}
      {isSuccessModal && (
        <ModalAddProductSuccess
          toggleSuccessModal={() => setIsSuccessModal(state => !state)}
        />
      )}
      {products.length !== 0 ? (
        <ProductList>
          {products.map(
            ({
              calories,
              category,
              title,
              weight,
              _id,
              groupBloodNotAllowed,
            }) => {
              return (
                <ProductsItem key={_id}>
                  <InfoContainer>
                    <DietTitle>DIET</DietTitle>
                    {(currentBlood === 1 && groupBloodNotAllowed[1]) ||
                    (currentBlood === 2 && groupBloodNotAllowed[2]) ||
                    (currentBlood === 3 && groupBloodNotAllowed[3]) ||
                    (currentBlood === 4 && groupBloodNotAllowed[4]) ? (
                      <>
                        {' '}
                        <RadCircle />
                        <Recommend>Not Recommend</Recommend>
                      </>
                    ) : (
                      <>
                        {' '}
                        <GreenCircle />
                        <Recommend>Recommend</Recommend>
                      </>
                    )}
                    <BtnAddProduct
                      type="button"
                      onClick={() => setIsAddModalOpen(true)}
                    >
                      <AddProduct>Add</AddProduct>
                      <AddIcon>
                        <svg fill="#efede8">
                          {' '}
                          <use href={icons + '#icon-nextarrow'}></use>
                        </svg>
                      </AddIcon>
                    </BtnAddProduct>
                  </InfoContainer>
                  <MenuContainer>
                    <CaloriesIcon>
                      <svg fill="#efede8">
                        {' '}
                        <use href={icons + '#icon-running'}></use>
                      </svg>
                    </CaloriesIcon>
                    <MenuTitle>{title}</MenuTitle>
                  </MenuContainer>
                  <DataInfo>
                    <li>
                      Calories:<span>{calories}</span>
                    </li>
                    <li
                      style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Category: <span>{category}</span>
                    </li>
                    <li>
                      Weight:<span>{weight}</span>
                    </li>
                  </DataInfo>
                </ProductsItem>
              );
            }
          )}
        </ProductList>
      ) : (
        <p>Sorry, we didn't find any products matching your request.</p>
      )}
    </ProductsContainer>
  );
};
