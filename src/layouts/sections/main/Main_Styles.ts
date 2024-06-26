import styled from "styled-components";
import { encodedSVG } from "../../../assets/icons/frame";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/Flexwrapper";
import { Theme } from "../../../styles/Theme";

const Main = styled.section`
  display: flex;
  padding: 180px 0;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media ${Theme.media.tablet} {
      flex-direction: column-reverse;
    }
  }
  ${FlexWrapper} {
    max-width: 674px;
    width: 100%;
    flex-shrink: 3;
    @media ${Theme.media.tablet} {
      justify-content: flex-start;
      align-items: center;
    }
  }

  @media ${Theme.media.tablet} {
    padding: 67px 0;
  }
`;

const Name = styled.h2`
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-size: calc((100vw - 360px) / (1440 - 360) * (54 - 36) + 36px);
`;

const MainSlogan = styled.h1`
  font-weight: 600;
  font-size: calc((100vw - 360px) / (1440 - 360) * (46 - 28) + 28px);
  position: relative;
  z-index: 1;
`;

const Description = styled.p`
  margin: 15px 0 60px;
  font-weight: 500;
  font-size: 18px;
  color: #bcbcbc;
  position: relative;
  z-index: 1;

  @media ${Theme.media.tablet} {
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 380px;
  height: 450px;
  min-height: 450px;
  display: inline-block;
  position: relative;
  flex-shrink: 1;
  z-index: 99999;

  @media ${Theme.media.mobile} {
    transform: scale(0.8);
  }

  &::before {
    content: "";
    display: inline-block;
    width: 630px;
    height: 630px;
    background-image: url("data:image/svg+xml,${encodedSVG}");
    background-size: cover;
    transform: rotate(-180deg);

    position: absolute;
    left: 2px;
    top: 0px;
    z-index: 999;

    @media ${Theme.media.tablet} {
      top: 0;
      width: 600px;
      height: 600px;
    }
  }
`;

const Image = styled.img`
  border-radius: 50px 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid transparent;
  background: ${Theme.color.gradient};
  background-clip: padding-box;
  padding: 3px;
  position: relative;
  z-index: 9999;
`;

const ButtonLink = styled.button`
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

export const S = { Main, Name, MainSlogan, Description, ImageWrapper, Image, ButtonLink };
