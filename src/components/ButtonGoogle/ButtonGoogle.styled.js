import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 12px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  color: ${props => props.theme.colors.whiteColor};

  cursor: pointer;

  border: ${props => props.theme.colors.whiteBorder};

  border-radius: 12px;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    padding: 18px 35px;
    gap: 5px;
  }
`;

export const SvgGoogle = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${props => props.theme.colors.primaryTitleColor};

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SpanGoogle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  color: ${props => props.theme.colors.blackColor};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
