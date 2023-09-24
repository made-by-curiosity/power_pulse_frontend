import { Container } from 'components/Container/Container';
import { ModalAddProductSuccess } from '../../components/ModalAddProductSuccess/ModalAddProductSuccess';
import React, { useState } from 'react'; 

const ProductsPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toogleModal = () => {
    setIsModalOpen(prevState => !prevState);
  }

  return (
    <Container>
      ProductsPage
      <button type="button" onClick={toogleModal}>Open modal</button>
      {isModalOpen &&(
        <ModalAddProductSuccess onClose={toogleModal} />
      )}
    </Container>
  );
};

export default ProductsPage;