import { create } from '@storybook/theming';
import colors from "../src/patters/colors";
export default create({
  base: 'dark',

  colorSecondary: colors.mainBlue,

  appBg: '#0b0a0d',
  appContentBg: '#16161A',
  appBorderColor: colors.mainBlue,

  textColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#E6E6E6',
  barSelectedColor: '#ffffff',
  barBg: '#1b1a1f',

  brandTitle: 'Clio-system',
  brandUrl: 'https://intmed.com.br/',
});