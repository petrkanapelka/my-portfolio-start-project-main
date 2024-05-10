import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

type LinkPropsType = {
    content: string,
    url: string,
}

export const Link = (props: LinkPropsType) => {
    return (
        <StyledLink href={props.url} target="_blank">{props.content}</StyledLink>
    );
};

const StyledLink = styled.a`
    background: ${Theme.color.gradient};
    padding: 15px 66px;
    font-weight: 600;
    font-size: 20px;
    border-radius: 83px;
`