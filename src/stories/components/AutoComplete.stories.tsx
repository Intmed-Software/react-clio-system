import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Autocomplete } from "../../components/AutoComplete";

export default {
  title: "components/AutoComplete",
  component: Autocomplete,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

const base = {
  label: "Textfield",
  placeholder: "Some value",
  options: [ 
    "Brasil",
    "Portugal",
    "Reino unido",
    "Estados unidos"
  ]
};

export const Simple = Template.bind({});

Simple.args = base;