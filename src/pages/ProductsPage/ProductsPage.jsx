import { Container } from 'components/Container/Container';
import { ModalAddProductSuccess } from '../../components/ModalAddProductSuccess/ModalAddProductSuccess';
import React, { useState } from 'react'; // Імпортуємо useState з бібліотеки 'react'

const ProductsPage = () => {
  return (
    <Container>
      ProductsPage
      <ModalAddProductSuccess />
    </Container>
  );
};

export default ProductsPage;