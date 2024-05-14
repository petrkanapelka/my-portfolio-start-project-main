import React, { useRef, useEffect, useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { ExpYear } from './expYear/ExpYear';
import { S } from './Experience_Styles';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'

export const ExpYears = [
    {
        year: 2021,
        descr: lorem
    },
    {
        year: 2022,
        descr: lorem
    },
    {
        year: 2023,
        descr: lorem
    },
    {
        year: 2024,
        descr: lorem
    },
]

export const Experience: React.FC = () => {
    const [expYearWidth, setExpYearWidth] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (expYearRef.current) {
                const width = expYearRef.current.getBoundingClientRect().width;
                setExpYearWidth(width);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const beforeWidth = ExpYears.length * (expYearWidth || 0);

    const expYearRef = useRef<HTMLDivElement>(null);

    return (
        <S.Experience beforeWidth={beforeWidth}>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <FlexWrapper>
                    {ExpYears.map((element, index) => {
                        return (
                            <ExpYear
                                key={index}
                                year={element.year}
                                descr={element.descr}
                                expYearRef={expYearRef}
                            />
                        );
                    })}
                </FlexWrapper>
            </Container>
        </S.Experience>
    );
};