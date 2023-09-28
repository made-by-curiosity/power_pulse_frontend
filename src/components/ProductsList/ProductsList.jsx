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
import { useSelector } from 'react-redux';
import { selectUserParams } from 'redux/auth/selectors';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const { blood } = useSelector(selectUserParams);

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

  const handleModalBtn = products => {
    setIsAddModalOpen(state => !state);
    setCurrentProduct(products);
  };

  const productsToShow = products.slice(0, 20);

  return (
    <ProductsContainer>
      {isAddModalOpen && (
        <ModalAddProduct
          productInfo={currentProduct}
          toggleAddModal={() => setIsAddModalOpen(state => !state)}
        />
      )}
      {isSuccessModal && (
        <ModalAddProductSuccess
          toggleSuccessModal={() => setSuccessModal(state => !state)}
        />
      )}
      {products.length !== 0 ? (
        <ProductList>
          {productsToShow.map(
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
                    {(blood === 1 && groupBloodNotAllowed[1]) ||
                    (blood === 2 && groupBloodNotAllowed[2]) ||
                    (blood === 3 && groupBloodNotAllowed[3]) ||
                    (blood === 4 && groupBloodNotAllowed[4]) ? (
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
                      onClick={() =>
                        handleModalBtn({
                          calories,
                          category,
                          title,
                          weight,
                          _id,
                          groupBloodNotAllowed,
                        })
                      }
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
