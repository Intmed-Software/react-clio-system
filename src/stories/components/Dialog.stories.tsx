import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Dialog } from "../../components/Dialog";
import { Typography } from "../../components/Typography";

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
storiesOf("Dialog", module).add("Test Modal", () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} label="Open dialog" />
      <Dialog open={open}>
        <ExempleContainer />
        <Button onClick={() => setOpen(false)} label="Close dialog" />
      </Dialog>
    </>
  );
})
.add("Test Modal FullScreem", () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)} label="Open dialog" />
        <Dialog open={open} fullScreem>
          <ExempleContainer />
          <Button onClick={() => setOpen(false)} label="Close dialog" />
        </Dialog>
      </>
    );
  })
