import styled from "styled-components";
import { Icon } from "../icon/Icon";

type SocialItemsPropsType = {
    iconsId: Array<string>,
    socialLinks: Array<string>,
}

export const SocialMenu = (props: SocialItemsPropsType) => {
    return (
        <StyledHeaderMenu>
            <List>
                {props.iconsId.map((item, index) => {
                return <ListItem key={index}>
                        <Link href={props.socialLinks[index]}>
                            <Icon iconId={item} width="35px" height="35px" viewport="0 0 35 35"/>
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