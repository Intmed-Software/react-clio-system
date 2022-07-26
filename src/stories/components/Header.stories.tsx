import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Header } from '../../components/Toolbar';
import { IconButtonDarkThemeExample, IconButtonLightThemeExample, LogoDarkThemeExample, LogoLightThemeExample } from '../utils/icons';

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DarkTheme = Template.bind({});

DarkTheme.args = {
  logo: <LogoDarkThemeExample />,
  headerItens: <><IconButtonDarkThemeExample /><IconButtonDarkThemeExample />
  </>,
  branchName: 'Hapfor Antonio Prudente',
  version: '1.1',
  theme: 'dark'
};

export const LightTheme = Template.bind({});

LightTheme.args = {
  logo: <LogoLightThemeExample />,
  headerItens: <><IconButtonLightThemeExample /><IconButtonLightThemeExample />
  </>,
  version: '2.0',
  branchName: 'Hospital Aldeota',
  theme: 'light'
};
