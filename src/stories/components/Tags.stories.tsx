import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Tags } from "../../components/Tags";

export default {
  title: "components/Tags",
  component: Tags,
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const lightBlueDisplayWithTextWithNoIcon = Template.bind({});

lightBlueDisplayWithTextWithNoIcon.args = {
  color: "lightBlue",
  size: "display",
  text: "Tag",
  icon: false,
};

export const lightBlueMediumWithTextWithNoIcon = Template.bind({});

lightBlueMediumWithTextWithNoIcon.args = {
  color: "lightBlue",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const lightBlueDisplayWithTextWithIcon = Template.bind({});

lightBlueDisplayWithTextWithIcon.args = {
  color: "lightBlue",
  size: "display",
  text: "Tag",
  icon: true,
};

export const lightBlueMediumWithTextWithIcon = Template.bind({});

lightBlueMediumWithTextWithIcon.args = {
  color: "lightBlue",
  size: "medium",
  text: "Tag",
  icon: true,
};

export const darkBlueDisplayWithTextWithNoIcon = Template.bind({});

darkBlueDisplayWithTextWithNoIcon.args = {
  color: "darkBlue",
  size: "display",
  text: "Tag",
  icon: false,
};

export const darkBlueMediumWithTextWithNoIcon = Template.bind({});

darkBlueMediumWithTextWithNoIcon.args = {
  color: "darkBlue",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const darkBlueDisplayWithTextWithIcon = Template.bind({});

darkBlueDisplayWithTextWithIcon.args = {
  color: "darkBlue",
  size: "display",
  text: "Tag",
  icon: true,
};

export const darkBlueMediumWithTextWithIcon = Template.bind({});

darkBlueMediumWithTextWithIcon.args = {
  color: "darkBlue",
  size: "medium",
  text: "Tag",
  icon: true,
};

export const lightSuccessDisplayWithTextWithNoIcon = Template.bind({});

lightSuccessDisplayWithTextWithNoIcon.args = {
  color: "lightSuccess",
  size: "display",
  text: "Tag",
  icon: false,
};

export const lightSuccessMediumWithTextWithNoIcon = Template.bind({});

lightSuccessMediumWithTextWithNoIcon.args = {
  color: "lightSuccess",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const lightSuccessDisplayWithTextWithIcon = Template.bind({});

lightSuccessDisplayWithTextWithIcon.args = {
  color: "lightSuccess",
  size: "display",
  text: "Tag",
  icon: true,
};

export const lightSuccessMediumWithTextWithIcon = Template.bind({});

lightSuccessMediumWithTextWithIcon.args = {
  color: "lightSuccess",
  size: "medium",
  text: "Tag",
  icon: true,
};

export const darkSuccessDisplayWithTextWithNoIcon = Template.bind({});

darkSuccessDisplayWithTextWithNoIcon.args = {
  color: "darkSuccess",
  size: "display",
  text: "Tag",
  icon: false,
};

export const darkSuccessMediumWithTextWithNoIcon = Template.bind({});

darkSuccessMediumWithTextWithNoIcon.args = {
  color: "darkSuccess",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const darkSuccessDisplayWithTextWithIcon = Template.bind({});

darkSuccessDisplayWithTextWithIcon.args = {
  color: "darkSuccess",
  size: "display",
  text: "Tag",
  icon: true,
};

export const darkSuccessMediumWithTextWithIcon = Template.bind({});

darkSuccessMediumWithTextWithIcon.args = {
  color: "darkSuccess",
  size: "medium",
  text: "Tag",
  icon: true,
};

export const lightAlertDisplayWithTextWithNoIcon = Template.bind({});

lightAlertDisplayWithTextWithNoIcon.args = {
  color: "lightAlert",
  size: "display",
  text: "Tag",
  icon: false,
};

export const lightAlertMediumWithTextWithNoIcon = Template.bind({});

lightAlertMediumWithTextWithNoIcon.args = {
  color: "lightAlert",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const lightAlertDisplayWithTextWithIcon = Template.bind({});

lightAlertDisplayWithTextWithIcon.args = {
  color: "lightAlert",
  size: "display",
  text: "Tag",
  icon: true,
};

export const lightAlertMediumWithTextWithIcon = Template.bind({});

lightAlertMediumWithTextWithIcon.args = {
  color: "lightAlert",
  size: "medium",
  text: "Tag",
  icon: true,
};

export const darkAlertDisplayWithTextWithNoIcon = Template.bind({});

darkAlertDisplayWithTextWithNoIcon.args = {
  color: "darkAlert",
  size: "display",
  text: "Tag",
  icon: false,
};

export const darkAlertMediumWithTextWithNoIcon = Template.bind({});

darkAlertMediumWithTextWithNoIcon.args = {
  color: "darkAlert",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const darkAlertDisplayWithTextWithIcon = Template.bind({});

darkAlertDisplayWithTextWithIcon.args = {
  color: "darkAlert",
  size: "display",
  text: "Tag",
  icon: true,
};

export const darkAlertMediumWithTextWithIcon = Template.bind({});

darkAlertMediumWithTextWithIcon.args = {
  color: "darkAlert",
  size: "medium",
  text: "Tag",
  icon: true,
};

export const lightErrorDisplayWithTextWithNoIcon = Template.bind({});

lightErrorDisplayWithTextWithNoIcon.args = {
  color: "lightError",
  size: "display",
  text: "Tag",
  icon: false,
};

export const lightErrorMediumWithTextWithNoIcon = Template.bind({});

lightErrorMediumWithTextWithNoIcon.args = {
  color: "lightError",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const lightErrorDisplayWithTextWithIcon = Template.bind({});

lightErrorDisplayWithTextWithIcon.args = {
  color: "lightError",
  size: "display",
  text: "Tag",
  icon: true,
};

export const lightErrorMediumWithTextWithIcon = Template.bind({});

lightErrorMediumWithTextWithIcon.args = {
  color: "lightError",
  size: "medium",
  text: "Tag",
  icon: true,
};

export const darkErrorDisplayWithTextWithNoIcon = Template.bind({});

darkErrorDisplayWithTextWithNoIcon.args = {
  color: "darkError",
  size: "display",
  text: "Tag",
  icon: false,
};

export const darkErrorMediumWithTextWithNoIcon = Template.bind({});

darkErrorMediumWithTextWithNoIcon.args = {
  color: "darkError",
  size: "medium",
  text: "Tag",
  icon: false,
};

export const darkErrorDisplayWithTextWithIcon = Template.bind({});

darkErrorDisplayWithTextWithIcon.args = {
  color: "darkError",
  size: "display",
  text: "Tag",
  icon: true,
};

export const darkErrorMediumWithTextWithIcon = Template.bind({});

darkErrorMediumWithTextWithIcon.args = {
  color: "darkError",
  size: "medium",
  text: "Tag",
  icon: true,
};
