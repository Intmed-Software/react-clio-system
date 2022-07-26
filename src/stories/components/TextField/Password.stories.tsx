import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PasswordField } from "../../../components/TextField";

export default {
  title: "components/Textfield/Password",
  component: PasswordField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PasswordField>;

const Template: ComponentStory<typeof PasswordField> = (args) => (
  <PasswordField {...args} />
);

const base = {
  label: "Passwordfield",
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
