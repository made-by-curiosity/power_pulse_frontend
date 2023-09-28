import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Calories = styled.p`
    color:  ${props => props.theme.colors.warningTextColor};
    margin-bottom: 32px;
    margin-top: 16px;
`;

export const SvgArrov = styled.svg`
    width: 16px;
    height: 16px;
    margin-left: 8px;
    stroke:  ${props => props.theme.colors.warningTextColor};
`;

export const Img = styled.img`
    width: 123px;
    height: 97px;
    margin-right: auto;
    margin-left: auto;
`;

export const LinkToDiary = styled(NavLink)`
    display: flex;
    align-items: center;
    color:  ${props => props.theme.colors.warningTextColor};
    margin-right: auto;
    margin-left: auto;
`;