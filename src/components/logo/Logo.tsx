import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Logo = () => {
    return (
        <StyledLogo href='#'>
            <Icon iconId='logo'/>
            <LogoTitle>Portfolio</LogoTitle>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoTitle = styled.span`
    font-weight: 500;
    font-size: 30px;
`