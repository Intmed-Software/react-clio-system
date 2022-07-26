import styled from "styled-components";
import colors from "../../patters/colors";

export const OptionsList = styled.div`
    border: 1px solid ${colors.lightGray};
    background: ${colors.white};
    border-top: 0;
    position: absolute;
    z-index: 1000;
    overflow-x: auto;
    max-height: 240px;
    left: 0;
    right: 0;
    width: calc( 100% - 2px );
`

export const Option = styled.div`
    padding: 10px;
    background: ${colors.white};
    color: ${colors.darkestGray};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
`

export const AutoCompleteContainer = styled.div`
    position: relative;
    .dropdown-open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`