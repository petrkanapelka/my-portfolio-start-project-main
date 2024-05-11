/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles/Theme';

type ListItemsPropsType = {
    menuItems: Array<string>
}

export const NavigationMenu = (props: ListItemsPropsType) => {
    return (
        <StyledNavigationMenu>
            <List>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href='#'>{item}</Link>
                    </ListItem>
                })}
            </List>
        </StyledNavigationMenu>
    );
};

const StyledNavigationMenu = styled.nav`
`;

const List = styled.ul`
    display: flex;
    gap: 25px;

    @media ${Theme.media.tablet} {
        flex-direction: column;
        align-items: center;
    }
`;

const ListItem = styled.li``;

const Link = styled.a`
    position: relative;

    &:after {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: -3px;
        width: 0;
        height: 3px;
        background-color: ${Theme.color.secondHoverColor};
        transition: width 0.5s;
    }

    &:hover:after {
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        bottom: -3px;
        height: 3px;
        background-color: ${Theme.color.firstHoverColor};
        transition: width 0.5s;
    }
`;