import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CategoriesList = styled.ul`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const CardLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: white;

  &:hover {
    color: orangered;
  }
`;