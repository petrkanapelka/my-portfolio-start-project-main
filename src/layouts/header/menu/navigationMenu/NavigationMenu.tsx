import React from 'react';
import { S } from '../Menu_Styles';

type ListItemsPropsType = {
    menuItems: Array<string>
}

export const NavigationMenu:React.FC<ListItemsPropsType> = (props: ListItemsPropsType) => {
    return (
        <S.NavigationMenu>
            <S.List>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href='#'>{item}</S.Link>
                    </S.ListItem>
                })}
            </S.List>
        </S.NavigationMenu>
    );
};