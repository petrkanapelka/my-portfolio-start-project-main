import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { ProjectProps } from './ProjectsProps';
import { Project } from './project/Project';




export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper flexWrap='wrap' justify='space-between' alignItems='center'>
                    {ProjectProps.map((prop, index) => {
                        return <Project key={index} {...prop}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    padding: 100px 0 80px;
`