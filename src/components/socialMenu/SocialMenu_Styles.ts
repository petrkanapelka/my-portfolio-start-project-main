import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const SocialMenu = styled.nav``;

const List = styled.ul`
  display: flex;
  gap: 25px;
`;

const ListItem = styled.li``;

const Link = styled.a`
  display: inline-block;
  &:hover {
    color: ${Theme.color.firstHoverColor};
    transform: scale(1.2);
  }
`;

export const S = { SocialMenu, List, ListItem, Link };
