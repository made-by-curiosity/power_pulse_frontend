import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.495);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 600px;
  height: 300px;
  padding: 40px;

  background-color: #10100f;
  border-radius: 12px;
  border: 1px solid #efede820;
  text-align: center;

  @media screen and (max-width: 374px) {
    ${props => props.modal320Styles}
  }

  ${props => props.modalStyles}

  @media screen and (min-width: 768px) {
    ${props => props.modalTabletStyles}
  }
  @media screen and (min-width: 1440px) {
    ${props => props.modalDesktopStyles}
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #10100f;
  border: none;
  outline: none;
  cursor: pointer;
`;
