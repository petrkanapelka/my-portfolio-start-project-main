import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/Flexwrapper"
import { Theme } from "../../../styles/Theme"

const Technologies = styled.section`
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

const Technology = styled.div`
    margin-bottom: 25px;
    max-width: 900px;
    width: 100%;
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
    max-width: 900px;
    width: 100%;
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

export const S = {Technologies, AdditionalTitle, Technology, TechName, TechSkill}