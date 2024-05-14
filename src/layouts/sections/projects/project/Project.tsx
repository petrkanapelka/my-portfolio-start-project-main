import React from 'react';
import { Link } from '../../../../components/link/Link';
import { S } from '../Projects_Styles';

type ProjectPropsType = {
    srcImg: string;
    altImg: string;
    projectTitle: string;
    projectDescr: string;
    projectLink: string;
    projectLinkContent: string;
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.srcImg} alt={props.altImg} />
            <S.ProjectTitle>{props.projectTitle}</S.ProjectTitle>
            <S.ProjecDescr>{props.projectDescr}</S.ProjecDescr>
            <Link content={props.projectLinkContent} url={props.projectLink} />
        </S.Project>
    );
};