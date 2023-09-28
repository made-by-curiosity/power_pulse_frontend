import styled from '@emotion/styled';

export const Tutorial = styled.div`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  width: 146px;
  height: 66px;
  position: absolute;
  padding-left: 18px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.BgPlayColor};

  top: 70%;
  right: 2%;

  @media screen and (min-width: 375px) {
    top: 70%;
    right: 10%;
  }

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;

    padding-left: 23px;
    padding-top: 20px;
    padding-bottom: 20px;

    top: 70%;
    right: 30%;
  }
  @media screen and (min-width: 1440px) {
    top: 50%;
    right: 33%;
  }
`;

export const TutorialInfo = styled.div`
  margin-left: 8px;
  margin-bottom: 14px;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 12px;
  }
`;
export const SpanNumber = styled.span`
  display: flex;
  color: ${props => props.theme.colors.primaryTitleColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-left: 0;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const SpanVideo = styled.span`
  display: block;
  color: ${props => props.theme.colors.textPlayColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TutorialIcon = styled.svg`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  padding-left: 9px;
  padding-right: 6px;
  padding-bottom: 9px;
  padding-top: 9px;
  background-color: ${props => props.theme.colors.svgBgPlayColor};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    padding-left: 10px;
    padding-right: 6px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`;
