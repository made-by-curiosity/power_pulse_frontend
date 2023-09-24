import { getAllProducts } from 'services/powerPulseApi';
import { useState, useEffect } from 'react';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [recommend, setRecommend] = useState(false);

  function renderProducts() {
    const bloodGroup = products.map(({ groupBloodNotAllowed }) => {
      return groupBloodNotAllowed;
    });
  }

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
  }, [products]);

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
                <li key={_id}>
                  <h3>DIET</h3>
                  {groupBloodNotAllowed[1] ? (
                    <p>RECOMMEND</p>
                  ) : (
                    <p>NOT RECOMMEND</p>
                  )}
                  <button>Add</button>
                  <h2>{title}</h2>
                  <div>
                    <p>Calories{calories}</p>
                    <p>Category{category}</p>
                    <p>Weight{weight}</p>
                  </div>
                </li>
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
