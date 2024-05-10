import styled from "styled-components";
import { Icon } from "../icon/Icon";

type SocialItemsPropsType = {
    iconsId: Array<string>,
    socialLinks: Array<string>,
    width?: string,
    height?: string,
    viewbox?: string
}

export const SocialMenu = (props: SocialItemsPropsType) => {
    return (
        <StyledHeaderMenu>
            <List>
                {props.iconsId.map((item, index) => {
                return <ListItem key={index}>
                        <Link href={props.socialLinks[index]} target="_blank">
                            <Icon iconId={item} width={props.width} height={props.height} viewbox={props.viewbox}/>
                        </Link>
                    </ListItem>
                })}
            </List>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav``;

const List = styled.ul`
    display: flex;
    gap: 25px;
`;

const ListItem = styled.li``;

const Link = styled.a``;