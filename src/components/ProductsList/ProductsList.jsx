import { getAllProducts } from 'services/powerPulseApi';
import { useState, useEffect } from 'react';
import {
  ProductsItem,
  RadCircle,
  GreenCircle,
  InfoContainer,
  DietTitle,
  Recommend,
} from './ProductsList.styled';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  // const [recommend, setRecommend] = useState(false);

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
    <div>
      {products.length !== 0 ? (
        <ul>
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
                    <button>Add</button>
                  </InfoContainer>

                  <h2>{title}</h2>
                  <div>
                    <p>Calories{calories}</p>
                    <p>Category{category}</p>
                    <p>Weight{weight}</p>
                  </div>
                </ProductsItem>
              );
            }
          )}
        </ul>
      ) : (
        <p>Sorry, we didn't find any products matching your request.</p>
      )}
    </div>
  );
};
