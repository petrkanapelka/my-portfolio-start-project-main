import styled from "styled-components";
import { FlexWrapper } from "../../components/Flexwrapper";
import { Theme } from "../../styles/Theme";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 0;
    background-color: ${Theme.color.secondBG};

    @media ${Theme.media.largeTablet} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }

    @media ${Theme.media.tablet} {
        position: relative;
        padding: 10px 0;
    }
`;

export const S = {Header}