import styled from '@emotion/styled';

export const LoadingWrapper = styled.div`
  position: fixed;
  
  z-index: 999;
  background-color: rgba(10, 10, 10, 0.495);
  width: 100%;
  height: 100%;
`;

export const LoadingCont = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
