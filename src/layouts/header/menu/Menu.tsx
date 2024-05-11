import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';
import { SocialMenu } from '../../../components/socialMenu/SocialMenu';
import { socialItems } from '../Header';
import { NavigationMenu } from './navigationMenu/NavigationMenu';

const navItems = ['Home', 'Projects', 'Technologies', 'About me', 'Contact me'];


export const Menu = (props: {isOpen: Boolean}) => {
    return (
            <StyledMenu isOpen={props.isOpen}>
                <NavigationMenu menuItems={navItems} />
                <SocialMenu iconsId={socialItems.inconsID}
                    socialLinks={socialItems.socialLinks}
                    width='32px' height='32px' viewbox='0 0 32 32' />
            </StyledMenu>
    );
};

const StyledMenu = styled.div<{ isOpen: Boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow:1;

    @media ${Theme.media.largeTablet} {
        width: 100%;
    }

    @media ${Theme.media.tablet} {
        transform: scale(${({ isOpen }) => isOpen ? 1 : 0});
        height: (${({ isOpen }) => isOpen ? 'auto' : 0});
        flex-direction: column;
        gap: 20px;
        display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    }
`