import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CategoriesList = styled.ul`
   display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  }
`;

export const CardLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: white;
  margin: 0px;

`;




export const PaginationBtn = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
   cursor: pointer;
   background-color: rgba(239, 237, 232, 0.10) ;
   border: none;
   outline: none;
    
   ${(props) =>
    props.active &&
    {backgroundColor: '#e6533c'}
    }

`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`


export const PaginationItem = styled.li`
  margin-right: 5px;
`