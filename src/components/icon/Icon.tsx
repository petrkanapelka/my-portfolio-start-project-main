import React from 'react';
import iconSprite from '../../assets/icons/icon-sprite.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewbox?: string,
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "35"} height={props.height || "35"} viewBox={props.viewbox || "0 0 35 35"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
        </svg>
    );
};