import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles/Theme';
import { Link } from '../../../../components/link/Link';

type ProjectPropsType = {
    srcImg: string;
    altImg: string;
    projectTitle: string;
    projectDescr: string;
    projectLink: string;
    projectLinkContent: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.srcImg} alt={props.altImg}/>
            <ProjectTitle>{props.projectTitle}</ProjectTitle>
            <ProjecDescr>{props.projectDescr}</ProjecDescr>
            <Link content={props.projectLinkContent} url={props.projectLink}/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    border: 1px solid ${Theme.color.border};
    border-radius: 50px 0;
    background-color: ${Theme.color.mainBG};

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 550px;
    width: 100%;
    padding: 25px 25px 40px;
    margin-bottom: 60px;

    @media ${Theme.media.largeTablet} {
        margin-bottom: 30px;
    }

`

const Image = styled.img`
    border-radius: 24px 8px 8px 8px;
    max-width: 500px;
    width: 100%;
    height: 280px;
    margin-bottom: 40px;
    border: 0.5px solid ${Theme.color.border};
    object-fit: cover;
`

const ProjectTitle = styled.h3`
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (30 - 24) + 24px);
    line-height: 89%;
`;

const ProjecDescr = styled.p`
    font-weight: 500;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (18 - 14) + 14px);
    padding: 68px 0 50px;

    @media ${Theme.media.tablet} {
        padding: 48px 0 30px;
    }
`;