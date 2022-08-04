import { storiesOf } from "@storybook/react";
import React from "react";
import { Collapse } from "../../components/Collapse";
import { Typography } from "../../components/Typography";
import { Chips } from '../../components/Chips/index';

function ExempleContainer() {
    return (
        <>
            <Typography size="display"> What is Lorem Ipsum?</Typography>
            <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions
                of Lorem Ipsum.
            </Typography>
        </>
    );
}

function teste() {
    return (
        <>
            <span>aaaaaaaaaaaaaa</span>
        </>
    )
}

storiesOf("Collapse", module).add("Defalt Collapse", () => {
    return (
        <div style={{width: '480px'}}>
            <Collapse title="Defalt Collapse">
                <ExempleContainer />
            </Collapse>
        </div>
    );
}).add("Mark Collapse", () => {
    return (
        <div style={{width: '480px'}}>
            <Collapse title="Mark Collapse" mark={<Chips label="mark" />}>
                <ExempleContainer />
            </Collapse>
        </div>
    );
})