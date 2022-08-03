import React from "react";
import { CollapseContainer, CollapseContents, CollapseHeader } from "./style";
import { CollapseProps } from "./types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Typography } from "../Typography";


export function Collapse({label, mark, children}: CollapseProps) {
    const [active, setActive] = React.useState(false);

    function iconArrow() {
      return active ? <FaAngleUp /> : <FaAngleDown />;
    }
    return(
        <CollapseContainer>
            <CollapseHeader active={active} onClick={()=> setActive(prev => !prev)}>
                <Typography>
                    {label}
                </Typography>
                {mark}
                {iconArrow}
            </CollapseHeader>
            <CollapseContents active={active}>
                {children}
            </CollapseContents>
        </CollapseContainer>
    )
}