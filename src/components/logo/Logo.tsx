import React from 'react';
import { Icon } from '../icon/Icon';
import { S } from './Logo_Styles';

export const Logo: React.FC = () => {
    return (
        <S.Logo href='#'>
            <Icon iconId='logo' width='47px' height='47px' viewbox='0 0 47px 47px' />
            <S.LogoTitle>Portfolio</S.LogoTitle>
        </S.Logo>
    );
};