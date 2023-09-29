import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 13px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    gap: 16px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const Item = styled.li`
  flex-basis: calc((100% - 13px) / 2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 96px;
  padding: 14px;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid;
  border-color: ${({ borderColor }) =>
    borderColor ? borderColor : 'rgba(239, 237, 232, 0.2)'};
  background: ${props => props.theme.colors.todoBgColor};

  :nth-of-type(-n + 2) {
    background: ${props => props.theme.colors.btnBgColor};
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 3);
    min-height: 116px;
    order: ${({ order }) => (order ? order : 'unset')};
  }

  @media (min-width: 1440px) {
    flex-basis: calc((100% - 16px) / 2);
    order: unset;
  }
`;

export const CardNameCont = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.p`
  color: ${({ color }) => color};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Value = styled.p`
  color: ${props => props.theme.colors.primaryTitleColor};
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  @media (min-width: 768px) {
    line-height: 32px;
  }
`;

export const Imagen = styled.svg`
  fill: ${props => props.theme.colors.svgLineColor};
`;
