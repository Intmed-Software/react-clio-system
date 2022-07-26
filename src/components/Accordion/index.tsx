import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa"
import { Typography } from "../Typography";
import { Content, Header, HeaderIcon, Inner, Container } from "./styles";
import { AccordionProps } from "./types";


export function Accordion({
    label = "Accordion",
    content = "A paciente em questão apresentou queixas de cefalia e facilisis luctus rutrum orci, faucibus. Porta porta diam gravida eros, morbi."
}: AccordionProps){
    const [active, setActive] = useState(true);

    return (
        <Container>
            <Header onClick={() => setActive(!active)}>
                <Typography weight="bold">{label}</Typography>
                <HeaderIcon isActive={!active}>
                    <FaAngleDown />
                </HeaderIcon>
            </Header>

            <Content itemName={"A"} isActive={!active}>
                <Inner id={"A"}>
                   <Typography weight="regular">{content}</Typography>
                </Inner>
            </Content>
        </Container>
    );
}