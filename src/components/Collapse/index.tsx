import React from "react";
import { CollapseContainer, CollapseContents, CollapseHeader, MarkContainer } from "./style";
import { CollapseProps } from "./types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Typography } from "../Typography";


export function Collapse({ title, mark, children }: CollapseProps) {
    const [active, setActive] = React.useState(false);
    const [height, setHeight] = React.useState("0px");
    const content = React.useRef(null);

    function AnimateCollapse() {
        setActive(prev => !prev);
        setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }

    function IconArrow() {
        return active ? <FaAngleUp /> : <FaAngleDown />;
    }

    return (
        <CollapseContainer>
            <CollapseHeader active={active} onClick={() => AnimateCollapse()}>
                <Typography size="small" weight="bold" color="black">
                    {title}
                </Typography>
                <MarkContainer>
                    {mark}
                    <IconArrow />
                </MarkContainer>
            </CollapseHeader>
            <CollapseContents ref={content} active={active} maxHeight={height}>
                {children}
            </CollapseContents>
        </CollapseContainer>
    )
}