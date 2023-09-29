import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Img = styled.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color:  ${props => props.theme.colors.primaryTitleColor};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`;

export const TextWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Text = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color:  ${props => props.theme.colors.warningTextColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  :not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.backgroundContentColor};
`;

export const BtnWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 8px;
  color: ${props => props.theme.colors.warningTextColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
