import React, { useRef, useEffect, useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { ExpYear } from './expYear/ExpYear';
import { S } from './Experience_Styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'

export const ExpYears = [
    {
        year: 2018,
        descr: lorem
    },
    {
        year: 2019,
        descr: lorem
    },
    {
        year: 2020,
        descr: lorem
    },
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

const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
};

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
        <S.Experience beforeWidth={beforeWidth} id='experience'>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <AliceCarousel  mouseTracking
                                responsive={responsive}
                                controlsStrategy="alternate">
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
                </AliceCarousel>
            </Container>
        </S.Experience>
    );
};

