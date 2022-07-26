import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Autocomplete } from "../../components/AutoComplete";
import stocks from "../mocks/stocks";
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
  options: stocks,
  displayFunction: (row) => `${row.abbr} | ${row.name}`,
  onSelect: (val) => alert(JSON.stringify(val))
};

export const Simple = Template.bind({});
Simple.args = base;

export const Debouced = Template.bind({});
Debouced.args = {...base, ...{debounceTime: 4000}};
