import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../../components/Button/index";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const baseAttr = {
  label: "clio button",
};
export const Contained = Template.bind({});

Contained.args = {
  ...baseAttr,
  ...{
    variant: "contained",
  },
};

export const Outlined = Template.bind({});

Outlined.args = {
  ...baseAttr,
  ...{
    variant: "outlined",
  },
};

export const Text = Template.bind({});

Text.args = {
  ...baseAttr,
  ...{
    variant: "text",
  },
};

export const Loading = Template.bind({});

Loading.args = {
  ...baseAttr,
  ...{
    variant: "contained",
    loading: true,
  },
};

export const LoadingWithContent = Template.bind({});

LoadingWithContent.args = {
  ...baseAttr,
  ...{
    variant: "contained",
    loandingWithContainer: true,
  },
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  ...baseAttr,
  ...{
    variant: "contained",
    fullwidth: true,
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...baseAttr,
  ...{
    variant: "contained",
    disabled: true,
  },
};
