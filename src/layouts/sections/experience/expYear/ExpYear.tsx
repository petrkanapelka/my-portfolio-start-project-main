import React from 'react';
import styled from 'styled-components';

type ExpYearPropsType = {
    year: number;
    descr: string;
}

export const ExpYear = ({ year, descr, expYearRef }: ExpYearPropsType & { expYearRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <StyledExpYear ref={expYearRef}>
            <Year>{year}</Year>
            <Description>{descr}</Description>
        </StyledExpYear>
    );
};

const StyledExpYear = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Year = styled.h3`
    font-weight: 600;
    font-size: 26px;
    position: relative;
    margin-bottom: 45px;
    &::before {
        content: '';
        border-radius: 100%;
        background-color: #fff;
        width: 25px;
        height: 25px;

        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
`

const Description = styled.p`
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    padding: 0 5px;
`
