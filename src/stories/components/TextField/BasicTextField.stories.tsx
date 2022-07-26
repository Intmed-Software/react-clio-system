import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FaCoffee } from "../../../components/Icons";
import { TextField } from "../../../components/TextField";

export default {
  title: "components/Textfield/Basic",
  component: TextField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

const base = {
  label: "Textfield",
  placeholder: "Some value",
};

export const Simple = Template.bind({});

Simple.args = base;

export const Disabled = Template.bind({});

Disabled.args = { ...base, ...{ disabled: true } };

export const ErrorCase = Template.bind({});

ErrorCase.args = {
  ...base,
  ...{
    error: true,
    errorHelper: "Helper text optional",
  },
};

export const With_StartAdornment = Template.bind({});

With_StartAdornment.args = {
  ...base,
  ...{
    startAdornment: <FaCoffee />,
  },
};

export const With_EndAdornment = Template.bind({});

With_EndAdornment.args = {
  ...base,
  ...{
    endAdornment: <FaCoffee />,
  },
};

export const With_StartEndAdornment = Template.bind({});

With_StartEndAdornment.args = {
  ...base,
  ...{
    startAdornment: <FaCoffee />,
    endAdornment: <FaCoffee />,
  },
};
