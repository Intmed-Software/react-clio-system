import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { FaCoffee, FaHome } from "react-icons/fa";
import {
  Drawer,
  DrawerListMenu,
  DrawnerContainer
} from "../../components/Drawer";
import { FlexContainer } from "../utils/FlexContainer";
export default {
  title: "components",
  component: FlexContainer,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    parameters: {
      viewMode: "docs",
      previewTabs: {
        canvas: { hidden: true },
      },
    },
  },
} as ComponentMeta<typeof FlexContainer>;

const Template: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer {...args}>
    <Drawer open>
      <DrawerListMenu text="Home" icon={<FaHome />} active={true} />
      <DrawerListMenu
        text="time do coffee"
        icon={<FaCoffee />}
        active={false}
      />
    </Drawer>
    <DrawnerContainer>Meu container</DrawnerContainer>
  </FlexContainer>
);

export const drawer = Template.bind({});
