import React from 'react';
import styled from 'styled-components';
import { SocialMenu } from '../../components/socialMenu/SocialMenu';
import { socialItems } from '../header/Header';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/Flexwrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify='space-between' alignItems='center'>
                    <FooterLinks>
                        <FooterLink href="tel:+1234567890">Call me:<br />123-456-789</FooterLink>
                        <FooterLink href="mailto:example@example.com">Email:<br />xxx@xyz.com</FooterLink>
                    </FooterLinks>
                    <SocialMenu iconsId={socialItems.inconsID} socialLinks={socialItems.socialLinks} />
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    padding: 42px 0;
`
const FooterLinks = styled.div`
    display: flex;
    gap: 162px;
`

const FooterLink = styled.a`
    display: inline-block;
    font-weight: 600;
    font-size: 22px;
`