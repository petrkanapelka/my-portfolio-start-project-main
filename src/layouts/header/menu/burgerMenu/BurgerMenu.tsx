import React from 'react';
import { S } from '../Menu_Styles';

export const BurgerMenu: React.FC<{ isOpen: Boolean, toggleMenu: () => void }> = (props: { isOpen: Boolean, toggleMenu: () => void }) => {
    const openClass = props.isOpen ? 'open' : '';

    return (
        <S.BurgerMenu isOpen={props.isOpen} onClick={props.toggleMenu}>
            <span className={openClass}></span>
            <span className={openClass}></span>
            <span className={openClass}></span>
        </S.BurgerMenu>
    );
};