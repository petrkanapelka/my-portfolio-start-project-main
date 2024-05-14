import { SocialMenu, socialItems } from '../../../components/socialMenu/SocialMenu';
import { NavigationMenu } from './navigationMenu/NavigationMenu';
import { S } from './Menu_Styles';

const navItems = ['Home', 'Projects', 'Technologies', 'About me', 'Contact me'];


export const Menu: React.FC<{isOpen: Boolean}> = (props: {isOpen: Boolean}) => {
    return (
            <S.Menu isOpen={props.isOpen}>
                <NavigationMenu menuItems={navItems} />
                <SocialMenu iconsId={socialItems.inconsID}
                    socialLinks={socialItems.socialLinks}
                    width='32px' height='32px' viewbox='0 0 32 32' />
            </S.Menu>
    );
};