import styled from '@emotion/styled';

export const Highlighter = styled.svg`
  position: absolute;
  top: ${props => props.position.top + 6}px;
  left: ${props => props.position.left - 15}px;

  stroke: #ef8964;

  width: 185px;
  height: 67px;
`;
