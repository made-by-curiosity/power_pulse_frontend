import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Calories = styled.p`
    color: rgba(239, 237, 232, 0.30);
    margin-bottom: 32px;
    margin-top: 16px;
`;

export const SvgArrov = styled.svg`
    width: 16px;
    height: 16px;
    margin-left: 8px;
    stroke: rgba(239, 237, 232, 0.30);
`;

export const Img = styled.img`
    width: 123px;
    height: 97px;
    margin-right: auto;
    margin-left: auto;
`;

export const LinkToDiary = styled(NavLink)`
    display: flex;
    alignItems: center;
    color: rgba(239, 237, 232, 0.30); 
    margin-right: auto;
    margin-left: auto;
`;