import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Title = styled.h1`
    width: 109px;
    color: #EFEDE8;
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
`;

export const Calories = styled.p`
    color: rgba(239, 237, 232, 0.30);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 32px;
`;

export const ButtonNextProduct = styled.button`
    display: flex;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    width: 157px;
    height: 52px;
    border: none;
    border-radius: 12px;
    background-color: #E6533C;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    cursor: pointer;

    color: #EFEDE8;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`;

export const LinkToDiary = styled(NavLink)`
    color: rgba(239, 237, 232, 0.30);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`;

export const SvgArrov = styled.svg`
    width: 16px;
    height: 16px;
`;