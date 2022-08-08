import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { apiDescription } from "./utils/ApiDescription";

export default {
  title: "components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: apiDescription(["Avatar"]),
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const img =
  "https://arcosmodels.com/wp-content/uploads/2021/05/capa-aline-de-assis-290x380.jpg";
const base = {
  label: "José Maria",
};
export const InitialsSmall = Template.bind({});

InitialsSmall.args = {
  ...base,
  ...{
    size: "small",
    background: "mediumBlue",
  },
};

export const InitialsMedium = Template.bind({});

InitialsMedium.args = {
  ...base,
  ...{
    size: "medium",
    background: "darkBlue",
  },
};

export const InitialsLarge = Template.bind({});

InitialsLarge.args = {
  ...base,
  ...{
    size: "large",
    background: "mainOrange",
  },
};

export const PhotoSmall = Template.bind({});

PhotoSmall.args = {
  ...base,
  ...{
    size: "small",
    background: "mainOrange",
    img,
  },
};

export const PhotoMedium = Template.bind({});

PhotoMedium.args = {
  ...base,
  ...{
    size: "medium",
    background: "mainOrange",
    img,
  },
};


export const PhotoLarge = Template.bind({});

PhotoLarge.args = {
  ...base,
  ...{
    size: "large",
    background: "mainOrange",
    img,
  },
};
