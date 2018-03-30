import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

const emToPx = (em) => em * 16;

export const breakpoints = [36, 62, 90].map(emToPx);
export const containerWidth = [34, 60, 75].map(emToPx);

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

const colors = {
  yellow: '#ffcd00',
  teal: '#62cbc9',
  back: '#000',
  white: '#fff',
  lightGray: '#9fa0a0',
  darkGray: '#595757',
};

export default merge(constants, {
  colors: {
    primary: colors.yellow,
    secondary: colors.teal,
    text: colors.darkGray,
    input: {
      main: colors.black,
      active: colors.yellow,
      error: colors.red,
      disabled: colors.gray,
    },
    ...colors,
  },
  breakpoints,
  containerWidth,
  font,
  gridSpacing: '1em',
  duration: 250,
  bold: 600,
  normal: 400,
  headerHeight: '4em',
});
