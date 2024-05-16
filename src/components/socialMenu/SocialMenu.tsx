import React from "react";
import { Icon } from "../icon/Icon";
import { S } from "./SocialMenu_Styles";

export const socialItems = {
    inconsID: ['github', 'linkedin', 'telegram'],
    socialLinks: ['https://github.com/petrkanapelka', 'https://www.linkedin.com/', 'https://telegram.org/desktop']
}

type SocialItemsPropsType = {
    iconsId: Array<string>,
    socialLinks: Array<string>,
    width?: string,
    height?: string,
    viewbox?: string
}

export const SocialMenu: React.FC<SocialItemsPropsType> = (props: SocialItemsPropsType) => {
    return (
        <S.SocialMenu>
            <S.List>
                {props.iconsId.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href={props.socialLinks[index]} target="_blank">
                            <Icon iconId={item} width={props.width} height={props.height} viewbox={props.viewbox} />
                        </S.Link>
                    </S.ListItem>
                })}
            </S.List>
        </S.SocialMenu>
    );
};