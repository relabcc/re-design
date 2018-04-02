import merge from 'lodash/merge';
import range from 'lodash/range';
import constants from 'styled-system/dist/constants';

const emToPx = (em) => em * 16;

export const breakpoints = [48, 62, 90].map(emToPx);
export const containerWidth = [45, 60, 88].map(emToPx);

const generateFade = (r, g, b) => range(10, 100, 10)
  .reduce((fade, opacity) => merge(fade, { [opacity]: `rgba(${[r, g, b, opacity / 100].join()})` }), {});

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
    fade: {
      white: generateFade(255, 255, 255),
      black: generateFade(0, 0, 0),
      yellow: generateFade(255, 205, 0),
    },
    ...colors,
  },
  breakpoints,
  containerWidth,
  font,
  gridSpacing: '1em',
  duration: 250,
  bold: 600,
  semiBold: 500,
  normal: 400,
  headerHeight: '4em',
});
