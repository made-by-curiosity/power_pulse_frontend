import styled from '@emotion/styled';

export const ExampleWrapper = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.secondary};
`;

export const ExampleText = styled.p`
  color: ${props => props.theme.colors.textColor};
  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
