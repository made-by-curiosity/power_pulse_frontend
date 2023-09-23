import styled from '@emotion/styled';


export const ExerciseNav = styled.ul`
    display: flex;
    gap: 28px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        gap: 32px;
        margin-bottom: 70px;
    }

`;
export const ExerciseEl = styled.li`
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
        bottom: 0;
        
        background-color: #EF8964;
        border-radius: 2px;    
    }

    &.active {
    color: #efede8;
    }
`;


