import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const Menu = styled.div<{ isOpen: Boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
  top: 0px;
  transform: scaleY(1);
  transform-origin: top center;
  opacity: 1;

  @media ${Theme.media.largeTablet} {
    width: 100%;
  }

  @media ${Theme.media.tablet} {
    position: ${({ isOpen }) => (isOpen ? "relative" : "absolute")};
    top: ${({ isOpen }) => (isOpen ? "0px" : "73px")};
    transform: scaleY(${({ isOpen }) => (isOpen ? 1 : 0)});
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    flex-direction: column;
    gap: 20px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
`;

const BurgerMenu = styled.div<{ isOpen: Boolean }>`
  position: absolute;
  right: 15px;
  top: 15px;
  display: none;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.color.font};
    margin: 5px 0;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "translate(0, 7px) rotate(45deg)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "translate(0, -7px) rotate(-45deg)" : "none"};
    }
  }

  @media ${Theme.media.tablet} {
    display: block;
  }
`;

const NavigationMenu = styled.nav``;

const List = styled.ul`
  display: flex;
  gap: 25px;

  @media ${Theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 3px;
    background-color: ${Theme.color.secondHoverColor};
    transition: width 0.5s;
  }

  &:hover:after {
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 3px;
    background-color: ${Theme.color.firstHoverColor};
    transition: width 0.5s;
  }
`;

export const S = { Menu, NavigationMenu, List, ListItem, Link, BurgerMenu };
