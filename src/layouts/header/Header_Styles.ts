import styled from "styled-components";
import { FlexWrapper } from "../../components/Flexwrapper";
import { Theme } from "../../styles/Theme";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 0;
    background-color: ${Theme.color.secondBG};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999999;

    @media ${Theme.media.largeTablet} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }

    @media ${Theme.media.tablet} {
        position: fixed;
        padding: 10px 0;
        background-color: rgba(22, 29, 42, 0.9);
    }
`;

export const S = {Header}