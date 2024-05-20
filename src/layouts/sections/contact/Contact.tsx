import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
    return (
        <S.Contact id='contact'>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form>
                    <S.Field placeholder='Name' />
                    <S.Field placeholder='Lastname' />
                    <S.Field placeholder='Write Message' as={'textarea'} />
                    <S.SubmitButton type='submit'>Send Message</S.SubmitButton>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

