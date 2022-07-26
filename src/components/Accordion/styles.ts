import styled from 'styled-components';
import colors from '../../patters/colors';
import { AccordionProps } from './types';


interface Props {
    isActive?: boolean;
    itemName?: string;
}

export const Container = styled.div`
    overflow: hidden;
    border-radius: 0.5rem;
`;

export const Inner = styled.div`
    position: absolute;
    padding: 1rem;
    color: black;
`;

export const Header = styled.button<AccordionProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30rem;
    height: 2rem;
    padding: 6px 16px;
    font-size: 1rem;
    text-align: left;
    border: none;
    background: ${colors.background};
    color: ${colors.mediumblack};
    cursor: pointer;
`;

export const HeaderIcon = styled.span<Props>`
    transform: rotate(${props => props.isActive ? -180 : 0}deg);
    transition: all 0.2s;
`;

export const Content = styled.div<Props>`
    position: relative;
    overflow: hidden;
    background: ${colors.background};
    height: ${props => {
        const inner = document.getElementById(props.itemName);
        return `${props.isActive && inner ? inner.clientHeight : 0}px`;
    }};
    transition: height 0.35s;
`;