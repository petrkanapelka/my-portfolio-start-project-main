import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { Theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/Flexwrapper';
import { Menu } from './menu/Menu';
import { BurgerMenu } from './menu/burgerMenu/BurgerMenu';


export const socialItems = {
    inconsID: ['github', 'linkedin', 'telegram'],
    socialLinks: ['https://github.com/petrkanapelka', 'https://www.linkedin.com/', 'https://telegram.org/desktop']
}

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' alignItems='center'>
                    <Logo />
                    <Menu isOpen={false} />
                    <BurgerMenu isOpen={false}  />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 0;
    background-color: ${Theme.color.secondBG};

    @media ${Theme.media.largeTablet} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }

    @media ${Theme.media.tablet} {
        position: relative;
        padding: 10px 0;
    }
`;