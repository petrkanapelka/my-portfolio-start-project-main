import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/Flexwrapper';
import { Menu } from './menu/Menu';
import { BurgerMenu } from './menu/burgerMenu/BurgerMenu';
import { S } from './Header_Styles';
import React from 'react';

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify='space-between' alignItems='center'>
                    <Logo />
                    <Menu isOpen={false} />
                    <BurgerMenu isOpen={false} />
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};