/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';

type ListItemsPropsType = {
    menuItems: Array<string>
}

export const HeaderMenu = (props: ListItemsPropsType) => {
    return (
        <StyledHeaderMenu>
            <List>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href='#'>{item}</Link>
                    </ListItem>
                })}
            </List>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav``;

const List = styled.ul`
    display: flex;
    gap: 25px;
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