import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/Flexwrapper';
import Photo from '../../assets/images/photo.webp'
import { Theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { Link } from '../../components/link/Link';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper flexDirection='column' justify='center' alignItems='flex-start'>
                    <Name>Peter Kanapelka <br/> - front-end developer</Name>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur optio aliquam, tempore quasi pariatur voluptatum quaerat. Commodi asperiores amet et, omnis sed ad nemo autem corrupti rerum sapiente dignissimos.</Description>
                    <Link content="Let’s Begin" url='#'/>
                </FlexWrapper>
                <ImageWrapper>
                    <Image src={Photo} alt='photo'/>
                </ImageWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    ${Container} {
        display: flex;
    }
`;

const Name = styled.h1`
    font-weight: 600;
    font-size: 40px;
`;

const Description = styled.p`
    margin: 15px 0 60px;
    font-weight: 500;
    font-size: 18px;
    color: #bcbcbc;
    text-align: left;
`;

const ImageWrapper = styled.div`
    margin: 0 0 0 90px;
`;

const Image = styled.img`
    border-radius: 50px 0;
    width: 380px;
    height: 450px;
    border: 3px solid;
    border-image-source: ${Theme.color.gradient};
    border-image-slice: 100;
    border-image-width: 100%;
    border-image-repeat: stretch;
    object-fit: cover;
`