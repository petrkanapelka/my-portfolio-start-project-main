import React from 'react';
import { FlexWrapper } from '../../../components/Flexwrapper';
import Photo from '../../../assets/images/photo.webp'
import { Container } from '../../../components/Container';
import { Link } from '../../../components/link/Link';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper flexDirection='column' justify='center' alignItems='flex-start'>
                    <S.Name>Petr Kanapelka</S.Name>
                    <S.MainSlogan>Frontend developer</S.MainSlogan>
                    <S.Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur optio aliquam, tempore quasi pariatur voluptatum quaerat. Commodi asperiores amet et, omnis sed ad nemo autem corrupti rerum sapiente dignissimos.</S.Description>
                    <Link content="Let’s Begin" url='#' />
                </FlexWrapper>
                <S.ImageWrapper>
                    <S.Image src={Photo} alt='photo' />
                </S.ImageWrapper>
            </Container>
        </S.Main>
    );
};