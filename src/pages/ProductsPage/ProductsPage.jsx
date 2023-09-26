import { Container } from 'components/Container/Container';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { ModalAddProductSuccess } from 'components/ModalAddProductSuccess/ModalAddProductSuccess';
import React, { useState } from 'react';

const ProductsPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toogleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <ProductsList />
      <button type="button" onClick={toogleModal}>Open Modal</button>
      {isModalOpen && (
        <ModalAddProductSuccess onClose={toogleModal}></ModalAddProductSuccess>
      )}
    </Container>
  );
};

export default ProductsPage;