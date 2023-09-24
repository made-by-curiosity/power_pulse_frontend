import styled from '@emotion/styled';

export const Highlighter = styled.svg`
  width: 98px;
  height: 35px;

  position: absolute;
  top: ${props => props.position.top + 6}px;
  left: ${props => props.position.left - 6}px;

  fill: #040404;
  stroke: #ef8964;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;

    top: ${props => props.position.top + 6}px;
    left: ${props => props.position.left - 15}px;
  }
`;
