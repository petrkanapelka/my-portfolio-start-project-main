import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { ProjectData } from './ProjectsData';
import { Project } from './project/Project';
import { Theme } from '../../../styles/Theme';




export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper flexWrap='wrap' justify='space-around' alignItems='center'>
                    {ProjectData.map((prop, index) => {
                        return <Project key={index} {...prop}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    padding: 100px 0 80px;

    ${FlexWrapper} {
        gap:10px;
    }

    @media ${Theme.media.tablet} {
        padding: 50px 0;
    }
`