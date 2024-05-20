import React from 'react';
import { S } from '../Menu_Styles';

type ItemPropsType = {
    title: string;
    linkID: string;
}

type ListItemsPropsType = {
    menuItems: Array<ItemPropsType>;
    toggleMenu: () => void;
}

export const NavigationMenu: React.FC<ListItemsPropsType> = ({ menuItems, toggleMenu }) => {
    return (
        <S.NavigationMenu>
            <S.List>
                {menuItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <S.NavLink
                                activeClass="active"
                                to={item.linkID}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={1000}
                                onClick={toggleMenu}
                            >
                                {item.title}
                            </S.NavLink>
                        </S.ListItem>
                    );
                })}
            </S.List>
        </S.NavigationMenu>
    );
};
