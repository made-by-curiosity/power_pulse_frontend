import styled from '@emotion/styled';

export const DateSwitcherBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 0;
  cursor: pointer;
  transform: rotate(270deg);

  svg {
    stroke: ${({ color }) => color};
  }

  :last-of-type {
    transform: rotate(90deg);

    svg {
      stroke: #efede8;
    }
  }
`;