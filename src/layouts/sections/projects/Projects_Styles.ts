import styled from "styled-components";
import { FlexWrapper } from "../../../components/Flexwrapper";
import { Theme } from "../../../styles/Theme";

const Projects:any = styled.section`
  position: relative;
  padding: 100px 0 80px;
  z-index: 1;
  ${FlexWrapper} {
    gap: 10px;
  }

  @media ${Theme.media.tablet} {
    padding: 50px 0;
  }
`;

const Project = styled.div`
  border: 1px solid ${Theme.color.border};
  border-radius: 50px 0;
  background-color: ${Theme.color.mainBG};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 550px;
  width: 100%;
  padding: 25px 25px 40px;
  margin-bottom: 60px;

  @media ${Theme.media.largeTablet} {
    margin-bottom: 30px;
  }
`;

const Image = styled.img`
  border-radius: 24px 8px 8px 8px;
  max-width: 500px;
  width: 100%;
  height: 280px;
  margin-bottom: 40px;
  border: 0.5px solid ${Theme.color.border};
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  font-weight: 600;
  font-size: calc((100vw - 360px) / (1440 - 360) * (30 - 24) + 24px);
  line-height: 89%;
`;

const ProjecDescr = styled.p`
  font-weight: 500;
  font-size: calc((100vw - 360px) / (1440 - 360) * (18 - 14) + 14px);
  padding: 68px 0 50px;

  @media ${Theme.media.tablet} {
    padding: 48px 0 30px;
  }
`;

export const S = { Projects, Project, Image, ProjectTitle, ProjecDescr };
