import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right',
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'initial' | 'inherit',
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit',
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit',
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.alignItems || 'stretch'};
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
    flex-direction: ${props => props.flexDirection || 'row'};
    height: 100%;
`;
