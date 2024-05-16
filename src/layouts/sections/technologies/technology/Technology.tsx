import React from 'react';
import { S } from '../Technologies_Styles';

type TechnologyPropsType = {
    techName: string;
    techSkill: number;
}

export const Technology:React.FC<TechnologyPropsType> = (props: TechnologyPropsType) => {
    return (
        <S.Technology>
            <S.TechName>{props.techName}</S.TechName>
            <S.TechSkill techSkillScope={props.techSkill}></S.TechSkill>
        </S.Technology>
    );
};