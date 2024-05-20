import React from 'react';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { Technology } from './technology/Technology';
import { Icon } from '../../../components/icon/Icon';
import { S } from './Technologies_Styles';

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

export const Technologies: React.FC = () => {
    return (
        <S.Technologies id='technologies'>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper flexDirection='column' justify='center' alignItems='stretch'>
                    {myTechnologies.map((element, index) => {
                        return <Technology key={index} techName={element.techName} techSkill={element.techSkill} />
                    })}
                </FlexWrapper>
                <S.AdditionalTitle>Additional technologies and skills</S.AdditionalTitle>
                <FlexWrapper justify='center' className='IconWrapper'>
                    <Icon iconId={'git'} width='100px' height='100px' viewbox='0 0 100 100' />
                    <Icon iconId={'github2'} width='100px' height='100px' viewbox='0 0 100 100' />
                    <Icon iconId={'figma'} width='100px' height='100px' viewbox='0 0 100 100' />
                </FlexWrapper>
            </Container>
        </S.Technologies>
    );
};