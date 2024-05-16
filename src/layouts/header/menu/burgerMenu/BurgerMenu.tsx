import React from 'react';
import { S } from '../Menu_Styles';

export const BurgerMenu: React.FC<{ isOpen: Boolean }> = (props: { isOpen: Boolean }) => {
    const openClass = props.isOpen ? 'open' : '';

    return (
        <S.BurgerMenu isOpen={props.isOpen}>
            <span className={openClass}></span>
            <span className={openClass}></span>
            <span className={openClass}></span>
        </S.BurgerMenu>
    );
};