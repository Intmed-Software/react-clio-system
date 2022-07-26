import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TextArea } from "../../components/TextArea";
export default {
  title: "components/TextArea",
  component: TextArea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

const base = {
  label: "TextArea",
  placeholder: "Some value",
};

export const Simple = Template.bind({});

Simple.args = base;

export const Disabled = Template.bind({});

Disabled.args = { ...base, ...{ disabled: true } };


export const Error = Template.bind({});

Error.args = { ...base, ...{ error: true, errorHelper: "some description error" } };
