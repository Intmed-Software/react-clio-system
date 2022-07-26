import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion } from '../../components/Accordion/index';

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Accordion>;
  
  const Template: ComponentStory<typeof Accordion> = (args) => <Accordion  {...args}/>;
  
  export const Contained = Template.bind({});
  
  Contained.args = {
    label: 'Accordion',
    content: 'A paciente em questão apresentou queixas de cefalia e facilisis luctus rutrum orci, faucibus. Porta porta diam gravida eros, morbi.',
    size: 'medium',
    variant: "basic"
  };