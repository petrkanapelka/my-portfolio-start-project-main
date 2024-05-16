import React from 'react';
import { S } from './Link_Styles';

type LinkPropsType = {
    content: string,
    url: string,
}

export const Link: React.FC<LinkPropsType> = (props: LinkPropsType) => {
    return (
        <S.Link href={props.url} target="_blank">{props.content}</S.Link>
    );
};