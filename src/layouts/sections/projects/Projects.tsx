import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { ProjectData } from './ProjectsData';
import { Project } from './project/Project';
import { S } from './Projects_Styles';
import { Fade } from "react-awesome-reveal";
import { AnimatePresence, motion } from "framer-motion";
import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/Flexwrapper';

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    { title: 'All', status: 'all' },
    { title: 'Typescript', status: 'ts' },
    { title: 'Javascript', status: 'js' },
];

export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>('all');
    let filteredWorks = ProjectData;

    if (currentFilterStatus === 'js') {
        filteredWorks = ProjectData.filter((work) => work.type === 'js');
    } else if (currentFilterStatus === 'ts') {
        filteredWorks = ProjectData.filter((work) => work.type === 'ts');
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Projects id='projects'>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
                <FlexWrapper flexWrap='wrap' justify='space-around' alignItems='center'>
                    <AnimatePresence>
                        {filteredWorks.map((prop) => {
                            return (
                                <motion.div
                                    key={prop.id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Fade cascade damping={0.1}>
                                        <Project key={prop.id} {...prop} />
                                    </Fade>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};
