import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/Flexwrapper';
import { Menu } from './menu/Menu';
import { BurgerMenu } from './menu/burgerMenu/BurgerMenu';
import { S } from './Header_Styles';
import React, { useState } from 'react';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify='space-between' alignItems='center'>
                    <Logo />
                    <Menu isOpen={isOpen} />
                    <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
