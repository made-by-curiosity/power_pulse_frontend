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

  width: 400px;
  height: 200px;
  padding: 40px;

  background-color: #10100F;
  border-radius: 12px;
  border: 1px solid #efede820;


  

  text-align: center;
`;

export const CloseModalBtn = styled.button`
position: absolute;
top: 5px;
right: 5px;
background-color: #10100F;
border: none;
outline: none;
cursor: pointer;
`