import React from 'react';
import { SocialMenu, socialItems } from '../../components/socialMenu/SocialMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/Flexwrapper';
import { S } from './Footer_Styles';

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify='space-between' alignItems='center'>
                    <S.FooterLinks>
                        <S.FooterLink href="tel:+1234567890"><span>Call me:</span><br />123-456-789</S.FooterLink>
                        <S.FooterLink href="mailto:example@example.com"><span>Email:</span><br />xxx@xyz.com</S.FooterLink>
                    </S.FooterLinks>
                    <SocialMenu iconsId={socialItems.inconsID} socialLinks={socialItems.socialLinks} />
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

