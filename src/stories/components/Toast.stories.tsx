import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../../components/Button";
import { ToastProvider, useToast } from "../../components/Toast";
import { apiDescription } from "./utils/ApiDescription";
import { FlexContainer } from "./utils/FlexContainer";

const exemples = ["success", "error", "warning", "info", "light", "dark"];
export default {
  title: "components/Toast",
  component: FlexContainer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: apiDescription(["ToastProvider", "useToast"]),
      },
    },
  },
} as ComponentMeta<typeof FlexContainer>;

function ExempleComponent() {
  const toast = useToast();
  return (
    <div
      style={{
        display: "flex",
        columnGap: "10px",
      }}
    >
      {exemples.map((item, key) => (
        <Button
          key={key}
          label={`Show my ${item}  Toast`}
          variant="text"
          onClick={() => {
            toast[item]({
              message: `Hello, i'm a ${item} toast`,
              showCloseButon: true,
            });
          }}
        />
      ))}
    </div>
  );
}

const Template: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer {...args}>
    <ToastProvider>
      <ExempleComponent />
    </ToastProvider>
  </FlexContainer>
);

export const Main = Template.bind({});

Main.args = {};
