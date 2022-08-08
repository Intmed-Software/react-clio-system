import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaHeart } from "react-icons/fa";

import { Tag } from "../../components/Tag";

export default {
  title: "components/Tags",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const lightBlueDisplayWithTextWithNoIcon = Template.bind({});

lightBlueDisplayWithTextWithNoIcon.args = {
  color: "lightBlue",
  size: "display",
  text: "Tag",
};

export const lightBlueMediumWithTextWithNoIcon = Template.bind({});

lightBlueMediumWithTextWithNoIcon.args = {
  color: "lightBlue",
  size: "medium",
  text: "Tag",
};

export const lightBlueDisplayWithTextWithIcon = Template.bind({});

lightBlueDisplayWithTextWithIcon.args = {
  color: "lightBlue",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const lightBlueMediumWithTextWithIcon = Template.bind({});

lightBlueMediumWithTextWithIcon.args = {
  color: "lightBlue",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkBlueDisplayWithTextWithNoIcon = Template.bind({});

darkBlueDisplayWithTextWithNoIcon.args = {
  color: "darkBlue",
  size: "display",
  text: "Tag",
};

export const darkBlueMediumWithTextWithNoIcon = Template.bind({});

darkBlueMediumWithTextWithNoIcon.args = {
  color: "darkBlue",
  size: "medium",
  text: "Tag",
};

export const darkBlueDisplayWithTextWithIcon = Template.bind({});

darkBlueDisplayWithTextWithIcon.args = {
  color: "darkBlue",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkBlueMediumWithTextWithIcon = Template.bind({});

darkBlueMediumWithTextWithIcon.args = {
  color: "darkBlue",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};

export const lightSuccessDisplayWithTextWithNoIcon = Template.bind({});

lightSuccessDisplayWithTextWithNoIcon.args = {
  color: "lightSuccess",
  size: "display",
  text: "Tag",
};

export const lightSuccessMediumWithTextWithNoIcon = Template.bind({});

lightSuccessMediumWithTextWithNoIcon.args = {
  color: "lightSuccess",
  size: "medium",
  text: "Tag",
};

export const lightSuccessDisplayWithTextWithIcon = Template.bind({});

lightSuccessDisplayWithTextWithIcon.args = {
  color: "lightSuccess",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const lightSuccessMediumWithTextWithIcon = Template.bind({});

lightSuccessMediumWithTextWithIcon.args = {
  color: "lightSuccess",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkSuccessDisplayWithTextWithNoIcon = Template.bind({});

darkSuccessDisplayWithTextWithNoIcon.args = {
  color: "darkSuccess",
  size: "display",
  text: "Tag",
};

export const darkSuccessMediumWithTextWithNoIcon = Template.bind({});

darkSuccessMediumWithTextWithNoIcon.args = {
  color: "darkSuccess",
  size: "medium",
  text: "Tag",
};

export const darkSuccessDisplayWithTextWithIcon = Template.bind({});

darkSuccessDisplayWithTextWithIcon.args = {
  color: "darkSuccess",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkSuccessMediumWithTextWithIcon = Template.bind({});

darkSuccessMediumWithTextWithIcon.args = {
  color: "darkSuccess",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};

export const lightAlertDisplayWithTextWithNoIcon = Template.bind({});

lightAlertDisplayWithTextWithNoIcon.args = {
  color: "lightAlert",
  size: "display",
  text: "Tag",
};

export const lightAlertMediumWithTextWithNoIcon = Template.bind({});

lightAlertMediumWithTextWithNoIcon.args = {
  color: "lightAlert",
  size: "medium",
  text: "Tag",
};

export const lightAlertDisplayWithTextWithIcon = Template.bind({});

lightAlertDisplayWithTextWithIcon.args = {
  color: "lightAlert",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const lightAlertMediumWithTextWithIcon = Template.bind({});

lightAlertMediumWithTextWithIcon.args = {
  color: "lightAlert",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkAlertDisplayWithTextWithNoIcon = Template.bind({});

darkAlertDisplayWithTextWithNoIcon.args = {
  color: "darkAlert",
  size: "display",
  text: "Tag",
};

export const darkAlertMediumWithTextWithNoIcon = Template.bind({});

darkAlertMediumWithTextWithNoIcon.args = {
  color: "darkAlert",
  size: "medium",
  text: "Tag",
};

export const darkAlertDisplayWithTextWithIcon = Template.bind({});

darkAlertDisplayWithTextWithIcon.args = {
  color: "darkAlert",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkAlertMediumWithTextWithIcon = Template.bind({});

darkAlertMediumWithTextWithIcon.args = {
  color: "darkAlert",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};

export const lightErrorDisplayWithTextWithNoIcon = Template.bind({});

lightErrorDisplayWithTextWithNoIcon.args = {
  color: "lightError",
  size: "display",
  text: "Tag",
};

export const lightErrorMediumWithTextWithNoIcon = Template.bind({});

lightErrorMediumWithTextWithNoIcon.args = {
  color: "lightError",
  size: "medium",
  text: "Tag",
};

export const lightErrorDisplayWithTextWithIcon = Template.bind({});

lightErrorDisplayWithTextWithIcon.args = {
  color: "lightError",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const lightErrorMediumWithTextWithIcon = Template.bind({});

lightErrorMediumWithTextWithIcon.args = {
  color: "lightError",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkErrorDisplayWithTextWithNoIcon = Template.bind({});

darkErrorDisplayWithTextWithNoIcon.args = {
  color: "darkError",
  size: "display",
  text: "Tag",
};

export const darkErrorMediumWithTextWithNoIcon = Template.bind({});

darkErrorMediumWithTextWithNoIcon.args = {
  color: "darkError",
  size: "medium",
  text: "Tag",
};

export const darkErrorDisplayWithTextWithIcon = Template.bind({});

darkErrorDisplayWithTextWithIcon.args = {
  color: "darkError",
  size: "display",
  text: "Tag",
  icon: <FaHeart />,
};

export const darkErrorMediumWithTextWithIcon = Template.bind({});

darkErrorMediumWithTextWithIcon.args = {
  color: "darkError",
  size: "medium",
  text: "Tag",
  icon: <FaHeart />,
};
