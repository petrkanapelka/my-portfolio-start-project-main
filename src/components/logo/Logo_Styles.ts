import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Logo = styled.a`
    display: flex;
    align-items: center;
    flex-grow:1;
    gap: 12px;

    &:hover {
        color: #13adc7;
    }

    @media ${Theme.media.largeTablet} {
        align-self: flex-start;
    }
`;

const LogoTitle = styled.span`
    font-weight: 500;
    font-size: 30px;
`

export const S = {Logo, LogoTitle}