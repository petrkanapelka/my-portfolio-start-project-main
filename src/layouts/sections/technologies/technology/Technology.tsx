import React from 'react';
import styled from 'styled-components';

type TechnologyPropsType = {
    techName: string;
    techSkill: number;
}

export const Technology = (props: TechnologyPropsType) => {
    return (
        <StyledTechnology>
            <TechName>{props.techName}</TechName>
            <TechSkill techSkillScope={props.techSkill}></TechSkill>
        </StyledTechnology>
    );
};

const StyledTechnology = styled.div`
    margin-bottom: 25px;
`

const TechName = styled.h3`
    font-weight: 600;
    font-size: 24px;
    margin: 0 0 5px 15px;
`

type TechSkilPropsType = {
    techSkillScope: number,
}

const TechSkill = styled.div<TechSkilPropsType>`
    border-radius: 83px;
    width: 900px;
    // width: 100%;
    height: 18px;
    background-color: #162950;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: ${props => props.techSkillScope}%;
        height: 100%;
        border-radius: 83px;
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    }
`