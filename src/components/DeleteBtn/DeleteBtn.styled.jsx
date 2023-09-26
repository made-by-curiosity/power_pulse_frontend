import styled from '@emotion/styled';

export const TrashBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  padding-left: 0;
  padding-right: 0;
`;

export const TrashSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;

  transition: stroke 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.7;
    stroke: #e6533c;
  }
`;
