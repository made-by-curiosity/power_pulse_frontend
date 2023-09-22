import styled from '@emotion/styled';
import { CustomInput } from 'components/CustomInput/CustomInput';
// import { Field } from 'formik';

export const ExampleWrapper = styled.div`
  padding: 30px;
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
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

export const HeightInput = styled(CustomInput)`
  width: 300px;
`;
