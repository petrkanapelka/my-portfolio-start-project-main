import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { Technology } from './technology/Technology';
import { Icon } from '../../../components/icon/Icon';
import { Theme } from '../../../styles/Theme';

const myTechnologies = [
    {
        techName: "HTML",
        techSkill: 70
    },
    {
        techName: "CSS",
        techSkill: 80
    },
    {
        techName: "Javascript",
        techSkill: 65
    },
    {
        techName: "REACT",
        techSkill: 15
    },
    {
        techName: "Styled components",
        techSkill: 25
    },
]

export const Technologies = () => {
    return (
        <StyledTechnologies>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper flexDirection='column' justify='center' alignItems='stretch'>
                    {myTechnologies.map((element, index) => {
                        return <Technology key={index} techName={element.techName} techSkill={element.techSkill}/>
                    })}
                </FlexWrapper>
                <AdditionalTitle>Additional technologies and skills</AdditionalTitle>
                <FlexWrapper justify='center' className='IconWrapper'>
                    <Icon iconId={'git'} width='100px' height='100px' viewbox='0 0 100 100'/>
                    <Icon iconId={'github2'} width='100px' height='100px' viewbox='0 0 100 100'/>
                    <Icon iconId={'figma'} width='100px' height='100px' viewbox='0 0 100 100'/>
                </FlexWrapper>
            </Container>
        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.section`
    padding: 100px 0 170px;
    ${Container} .IconWrapper {
        gap: 50px;
    }

    ${FlexWrapper} {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
    }

    @media ${Theme.media.tablet} {
        padding: 50px 0 50px;
    }
`

const AdditionalTitle = styled.h4`
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (46 - 28) + 28px);
    text-align: center;
    padding: 120px 0 70px;

    @media ${Theme.media.tablet} {
        padding: 80px 0 40px;
    }
`