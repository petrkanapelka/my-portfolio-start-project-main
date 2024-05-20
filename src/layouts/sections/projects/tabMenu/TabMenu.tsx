import styled, { css } from "styled-components";
import { Theme } from "../../../../styles/Theme";

export type TabsStatusType = 'all' | 'js' | 'ts';

type TabMenuPropsType = {
    tabsItems: Array<{ title: string, status: TabsStatusType }>;
    changeFilterStatus: (value: TabsStatusType) => void;
    currentFilterStatus: TabsStatusType;
};

export const TabMenu: React.FC<TabMenuPropsType> = ({ tabsItems, changeFilterStatus, currentFilterStatus }) => {
    return (
        <StyledTabMenu>
            <ul>
                {tabsItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <TabLink active={currentFilterStatus === item.status} onClick={() => changeFilterStatus(item.status)}>
                                {item.title}
                            </TabLink>
                        </ListItem>
                    );
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
        gap: 25px;
    }
`;

const ListItem = styled.li``;

const TabLink = styled.button<{ active?: boolean }>`

    position: relative;
    font-weight: 600;
    font-size: calc( (100vw - 360px)/(1440 - 360) * (20 - 16) + 16px);
    color: ${Theme.color.font};

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
    ${({ active }) =>
        active &&
        css`
              width: 100%;
            display: block;
            position: absolute;
            left: 0;
            bottom: -3px;
            height: 3px;
            background-color: ${Theme.color.firstHoverColor};
            transition: width 0.5s;
        `}
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