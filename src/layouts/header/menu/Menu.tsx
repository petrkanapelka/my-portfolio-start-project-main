import { SocialMenu, socialItems } from '../../../components/socialMenu/SocialMenu';
import { NavigationMenu } from './navigationMenu/NavigationMenu';
import { S } from './Menu_Styles';

const navItems = [
    {
        title: "Home",
        linkID: 'main'
    },
    {
        title: "Projects",
        linkID: 'projects'
    },
    {
        title: "Technologies",
        linkID: 'technologies'
    },
    {
        title: "About me",
        linkID: 'experience'
    },
    {
        title: "Contact me",
        linkID: 'contact'
    },
]

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
    return (
        <S.Menu isOpen={isOpen}>
            <NavigationMenu menuItems={navItems} toggleMenu={toggleMenu} />
            <SocialMenu
                iconsId={socialItems.inconsID}
                socialLinks={socialItems.socialLinks}
                width='32px' height='32px' viewbox='0 0 32 32'
            />
        </S.Menu>
    );
};
