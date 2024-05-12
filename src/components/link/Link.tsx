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
    position: relative;
    background: ${Theme.color.gradient};
    padding: 15px 66px;
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (20 - 16) + 16px);
    border-radius: 83px;
    z-index: 9999;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: ${Theme.color.secondHoverColor};
        border-radius: 83px;
        z-index: -99999;
    }

    &:hover {
        &:before {
            width: 100%;
        }
    }
`;
