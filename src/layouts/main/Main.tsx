import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/Flexwrapper';
import Photo from '../../assets/images/photo.webp'
import { Theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { Link } from '../../components/link/Link';
import { encodedSVG } from '../../assets/icons/frame';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper flexDirection='column' justify='center' alignItems='flex-start'>
                    <Name>Petr Kanapelka</Name>
                    <MainSlogan>Frontend developer</MainSlogan>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur optio aliquam, tempore quasi pariatur voluptatum quaerat. Commodi asperiores amet et, omnis sed ad nemo autem corrupti rerum sapiente dignissimos.</Description>
                    <Link content="Let’s Begin" url='#' />
                </FlexWrapper>
                <ImageWrapper>
                    <Image src={Photo} alt='photo' />
                </ImageWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    padding: 125px 0;

    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:30px;

        @media ${Theme.media.tablet} {
            flex-direction: column;
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
        padding: 50px 0;
    }
`;

const Name = styled.h2`
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (54 - 36) + 36px);

`;

const MainSlogan = styled.h1`
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (46 - 28) + 28px);

`

const Description = styled.p`
    margin: 15px 0 60px;
    font-weight: 500;
    font-size: 18px;
    color: #bcbcbc;

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

  @media ${Theme.media.mobile} {
    transform: scale(0.8);
  }


  &::before {
    content: "";
    display: inline-block;
    width: 666px;
    height: 666px;
    background-image: url("data:image/svg+xml,${encodedSVG}");
    background-size: cover;
    transform: rotate(-180deg);

    position: absolute;
    left: 2px;
    top:70px;
    z-index: 1;

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
  z-index: 2;
`;