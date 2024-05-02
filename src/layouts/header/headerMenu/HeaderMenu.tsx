/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';

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

const Link = styled.a``;