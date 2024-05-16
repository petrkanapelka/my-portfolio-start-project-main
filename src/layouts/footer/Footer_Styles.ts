import styled from "styled-components"
import { FlexWrapper } from "../../components/Flexwrapper"
import { Theme } from "../../styles/Theme"

const Footer = styled.section`
    padding: 42px 0;

    @media ${Theme.media.tablet} {
        padding: 50px 0;
    }

    @media ${Theme.media.mobile} {
        ${FlexWrapper} {
            flex-direction: column;
            gap:20px;
        }
    }
`
const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    @media ${Theme.media.mobile} {
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }
`

const FooterLink = styled.a`
    display: inline-block;
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (22 - 16) + 16px);
    position: relative;

    &:hover {
        color: ${Theme.color.firstHoverColor};
        transform: translateY(-4px);
    }

    @media ${Theme.media.mobile} {
        br {
            display: none;
        }

        span {
            margin-right: 5px;
        }
    }
`

export const S = {Footer, FooterLinks, FooterLink}