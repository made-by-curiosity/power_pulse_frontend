import {
  FormField,
  InputProductName,
  InputProductAmount,
  SpanNumber,
  SpanGrams,
  ContainCaloriesDiv,
  ContainCaloriesText,
  ContainCaloriesNumber,
  ModalBtns,
} from './ModalAddProduct.styled';
import { MainButton } from 'components/MainButton/MainButton';
import { useState } from 'react';
import { CustomModal } from 'components/CustomModal/CustomModal';


export const ModalAddProduct = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toogleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };
    <button type="button" onClick={toogleModal}>
        Open Modal
    </button>;
    // eslint-disable-next-line no-lone-blocks
    {
        isModalOpen && (
            <CustomModal
                onClose={toogleModal}
                modalStyles={{
                    width: '335px',
                    height: '280px',
                    padding: '48px  24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(239, 237, 232, 0.20)',
                    background: '#10100F',
                }}
                modalTabletStyles={{
                    width: '479',
                    height: '286px',
                    padding: '48px  32px',
                }}
                modalDesktopStyles={{
                    width: '479',
                    height: '286px',
                    padding: '48px  32px',
                }}
            >
                <>
                    <FormField>
                        <InputProductName>Banana juice</InputProductName>

                        <InputProductAmount>
                            <SpanNumber>146</SpanNumber>
                            <SpanGrams>grams</SpanGrams>
                        </InputProductAmount>
                    </FormField>
                    <ContainCaloriesDiv>
                        <ContainCaloriesText>Calories:</ContainCaloriesText>
                        <ContainCaloriesNumber>96</ContainCaloriesNumber>
                    </ContainCaloriesDiv>

                    <ModalBtns>
                        <MainButton
                            type="button"
                            text="Add to diary"
                            filled
                            onClick={toogleModal}
                        />
                        <MainButton type="button" text="Cancel" onClick={toogleModal} />
                    </ModalBtns>
                </>
            </CustomModal>
        );
    }
}