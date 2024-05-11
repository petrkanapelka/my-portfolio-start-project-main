import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles/Theme';

/* type BurgerMenuPropsType = {
    isOpen: boolean;
}; */


export const BurgerMenu = (props: {isOpen: Boolean}) => {
    const openClass = props.isOpen ? 'open' : '';

    return (
        <StyledBurgerMenu isOpen={props.isOpen}>
            <span className={openClass}></span>
            <span className={openClass}></span>
            <span className={openClass}></span>
        </StyledBurgerMenu>
    );
};

const StyledBurgerMenu = styled.div<{ isOpen: Boolean }>`
    position: absolute;
    right: 15px;
    top: 15px;
    display: none;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.color.font};
        margin: 5px 0;

        &:nth-child(1) {
            transform: ${({ isOpen }) => isOpen ? 'translate(0, 7px) rotate(45deg)' : 'none'};
        }

        &:nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ isOpen }) => isOpen ? 'translate(0, -7px) rotate(-45deg)' : 'none'};
        }
    }

    @media ${Theme.media.tablet} {
        display: block;
    }
`;
