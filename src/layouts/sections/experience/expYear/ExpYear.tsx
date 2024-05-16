import React from 'react';
import { S } from '../Experience_Styles';

type ExpYearPropsType = {
    year: number;
    descr: string;
    expYearRef: React.RefObject<HTMLDivElement>;
}

export const ExpYear: React.FC<ExpYearPropsType> = ({ year, descr, expYearRef }) => {
    return (
        <S.ExpYear ref={expYearRef}>
            <S.Year>{year}</S.Year>
            <S.Description>{descr}</S.Description>
        </S.ExpYear>
    );
};

