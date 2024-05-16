import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { ProjectData } from './ProjectsData';
import { Project } from './project/Project';
import { S } from './Projects_Styles';

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper flexWrap='wrap' justify='space-around' alignItems='center'>
                    {ProjectData.map((prop, index) => {
                        return <Project key={index} {...prop} />
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};
