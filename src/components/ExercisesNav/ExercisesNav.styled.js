import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    max-width: 1440px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        gap: 32px;
        margin-bottom: 70px;
    }
`;

export const NavLinkWrap = styled.div`
    display: flex;
    gap: 28px;

    @media screen and (min-width: 768px) {
        gap: 32px;
        
    }
`;


export const Link = styled(NavLink)`
color: rgba(239, 237, 232, 0.40);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28; 
    position: relative; 
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5; 
    }
    
    &.active::after {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: 5px;
        
        background-color: #EF8964;
        border-radius: 2px;    
    }

    &.active {
    color: #efede8;
    }
`;
