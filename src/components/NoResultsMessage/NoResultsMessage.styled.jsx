import styled from '@emotion/styled';

export const MessageWrapper = styled.div`
  padding-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    width: 580px;
  }
`;

export const Message = styled.p`
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;

  color: rgba(239, 237, 232, 0.3);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const HighlightedText = styled.span`
  color: #e6533c;
`;
