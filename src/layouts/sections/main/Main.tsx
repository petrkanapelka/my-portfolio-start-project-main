import React from 'react';
import { FlexWrapper } from '../../../components/Flexwrapper';
import Photo from '../../../assets/images/photo.webp'
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { scroller } from 'react-scroll';

export const Main: React.FC = () => {
    const scrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <S.Main id='main'>
            <Container>
                <FlexWrapper flexDirection='column' justify='center' alignItems='flex-start'>
                    <S.Name>Petr Kanapelka</S.Name>
                    <S.MainSlogan>
                        <Typewriter
                            options={{
                                strings: ['Frontend developer', 'WEB developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </S.MainSlogan>
                    <S.Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur optio aliquam, tempore quasi pariatur voluptatum quaerat. Commodi asperiores amet et, omnis sed ad nemo autem corrupti rerum sapiente dignissimos.
                    </S.Description>
                    <S.ButtonLink as="button" onClick={scrollToContact}>
                        Let’s Begin
                    </S.ButtonLink>
                </FlexWrapper>
                <Tilt>
                    <S.ImageWrapper>
                        <S.Image src={Photo} alt='photo' />
                    </S.ImageWrapper>
                </Tilt>
            </Container>
        </S.Main>
    );
};
