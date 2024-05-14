import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Link = styled.a`
    position: relative;
    background: ${Theme.color.gradient};
    padding: 15px 66px;
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (20 - 16) + 16px);
    border-radius: 83px;
    z-index: 9999;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: ${Theme.color.secondHoverColor};
        border-radius: 83px;
        z-index: -99999;
    }

    &:hover {
        &:before {
            width: 100%;
        }
    }
`;

export const S = {
    Link
}