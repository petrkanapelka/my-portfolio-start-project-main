import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Theme } from '../../styles/Theme';

export const Logo = () => {
    return (
        <StyledLogo href='#'>
            <Icon iconId='logo' width='47px' height='47px' viewbox='0 0 47px 47px' />
            <LogoTitle>Portfolio</LogoTitle>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    display: flex;
    align-items: center;
    flex-grow:1;
    gap: 12px;

    &:hover {
        color: #13adc7;
    }

    @media ${Theme.media.largeTablet} {
        align-self: flex-start;
    }
`;

const LogoTitle = styled.span`
    font-weight: 500;
    font-size: 30px;
`