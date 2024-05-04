import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { ExpYear } from './expYear/ExpYear';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'

const ExpYears = [
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

export const Experience = () => {
    const [expYearWidth, setExpYearWidth] = useState<number | null>(null);

    useEffect(() => {
        if (expYearRef.current) {
            const width = expYearRef.current.getBoundingClientRect().width;
            setExpYearWidth(width);
        }
    }, []);

    const beforeWidth = ExpYears.length * (expYearWidth || 0);

    const expYearRef = useRef<HTMLDivElement>(null);

    return (
        <StyledExperience beforeWidth={beforeWidth}>
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
        </StyledExperience>
    );
};

const StyledExperience = styled.section<{ beforeWidth: number }>`
    padding: 100px 0 140px;

    ${FlexWrapper} {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            margin: 0 auto;
            border-radius: 83px;
            max-width: ${(props) => props.beforeWidth - props.beforeWidth/ExpYears.length}px;
            width: 100%;
            height: 8px;
            background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;