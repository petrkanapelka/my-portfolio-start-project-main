import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { SocialMenu } from '../../components/socialMenu/SocialMenu';
import { Container } from '../../components/Container';

const navItems = ['Home', 'Projects', 'Technologies', 'About me', 'Contact me'];

export const socialItems = {
    inconsID: ['github', 'linkedin', 'telegram'],
    socialLinks: ['https://github.com/petrkanapelka', 'https://www.linkedin.com/', 'https://telegram.org/desktop']
}

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <HeaderMenu menuItems={navItems}/>
                <SocialMenu iconsId={socialItems.inconsID} socialLinks={socialItems.socialLinks}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 0;
    ${Container} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;