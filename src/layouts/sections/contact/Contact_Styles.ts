import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const Contact = styled.section`
    padding: 100px 0 140px;
    position: relative;

    @media ${Theme.media.tablet} {
        padding: 50px 0;
    }
`;

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${Theme.color.border};
  background-color: ${Theme.color.secondBG};
  padding: 7px 15px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${Theme.color.font};
  &::placeholder {
    color: ${Theme.color.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${Theme.color.border};
  }
`;

const SubmitButton = styled.button`
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
        background-color: ${Theme.color.firstHoverColor};
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
  Contact,
  Field,
  Form,
  SubmitButton
};
