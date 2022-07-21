import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SearchField } from "../../../components/TextField";

export default {
  title: "components/Textfield/Search",
  component: SearchField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <SearchField {...args} />
);

const base = {
  label: "Searchfield",
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
