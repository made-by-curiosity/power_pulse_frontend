import { getAllProducts } from 'services/powerPulseApi';
import { useState, useEffect } from 'react';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [recommend, setRecommend] = useState(true);
  const [blood, setBlood] = useState([]);

  async function fetchProducts() {
    try {
      const productsList = await getAllProducts();
      setProducts(productsList);
    } catch (error) {
      console.log(error.message);
    }
  }

  function results() {
    products.map(({ groupBloodNotAllowed }) => {
      const x = Object.values(groupBloodNotAllowed);
      console.log(x);
      return x;
    });
  }

  useEffect(() => {
    // if (results[2] === true) {
    //   setRecommend(false);
    // } else {
    //   setRecommend(true);
    // }
    // if (results[3] === true) {
    //   setRecommend(false);
    // } else {
    //   setRecommend(true);
    // }
    // if (results[4] === true) {
    //   setRecommend(false);
    // } else {
    //   setRecommend(true);
    // }

    // if (values[1] === true) {
    //   setRecommend(false);
    // } else {
    //   setRecommend(true);
    // }
    const values = results();
    console.log(values);

    // for (let i = 0; i < values.length; i += 1) {
    //   return console.log(values[i]);
    // }
    fetchProducts();
    console.log(products);
  }, [products]);

  return (
    <div>
      {products.length !== 0 ? (
        <ul>
          {products.map(({ calories, category, title, weight, _id }) => {
            return (
              <li key={_id}>
                <h3>DIET</h3>
                {recommend ? <p>RECOMMEND</p> : <p>NOT RECOMMEND</p>}
                <button>Add</button>
                <h2>{title}</h2>
                <div>
                  <p>Calories{calories}</p>
                  <p>Category{category}</p>
                  <p>Weight{weight}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, we didn't find any products matching your request.</p>
      )}
    </div>
  );
};
