import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Alert } from "../../components/Alets";
import { apiDescription } from "./utils/ApiDescription";
export default {
  title: "components/Alerts",
  component: Alert,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: apiDescription(["Alert"]),
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

const base = {
  message: "Exemplo content message",
};
export const Success = Template.bind({});

Success.args = {
  ...base,
  ...{ variant: "success" },
};

export const Error = Template.bind({});

Error.args = {
  ...base,
  ...{ variant: "error" },
};

export const Warning = Template.bind({});

Warning.args = {
  ...base,
  ...{ variant: "warning" },
};

export const Info = Template.bind({});

Info.args = {
  ...base,
  ...{ variant: "info" },
};

export const Light = Template.bind({});

Light.args = {
  ...base,
  ...{ variant: "light" },
};

export const Dark = Template.bind({});

Dark.args = {
  ...base,
  ...{ variant: "dark" },
};
