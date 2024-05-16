import styled from "styled-components";
import { FlexWrapper } from "../../../components/Flexwrapper";
import { Theme } from "../../../styles/Theme";
import { ExpYears } from "./Experience";

const Experience = styled.section<{ beforeWidth: number }>`
  padding: 100px 0 140px;

  ${FlexWrapper} {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      margin: 0 auto;
      border-radius: 83px;
      max-width: ${(props) =>
        props.beforeWidth - props.beforeWidth / ExpYears.length}px;
      width: 100%;
      height: 8px;
      background: linear-gradient(
        270deg,
        #13adc7 0%,
        #6978d1 66.67%,
        #945dd6 100%
      );
      top: 40px;
      left: 50%;
      transform: translateX(-50%);

      @media ${Theme.media.tablet} {
        max-width: 50%;
      }

      @media ${Theme.media.mobile} {
        max-width: 100%;
      }
    }
  }

  @media ${Theme.media.tablet} {
    padding: 50px 0 50px;
  }
`;

const ExpYear = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${Theme.media.tablet} {
    display: none;

    &:nth-child(1) {
      display: flex;
    }

    &:nth-child(2) {
      display: flex;
    }
  }

  @media ${Theme.media.mobile} {
    display: none;

    &:nth-child(2) {
      display: none;
    }
  }
`;

const Year = styled.h3`
  font-weight: 600;
  font-size: 26px;
  position: relative;
  margin-bottom: 45px;
  &::before {
    content: "";
    border-radius: 100%;
    background-color: #fff;
    width: 25px;
    height: 25px;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  padding: 0 5px;
`;

export const S = { Experience, ExpYear, Year, Description };
