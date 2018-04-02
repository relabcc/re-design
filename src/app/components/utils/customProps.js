import { themeGet } from 'styled-system';

export const fontWeight = (props) => {
  const fw = props.fontWeight;
  return fw ? `font-weight: ${themeGet(fw, fw)(props)}` : '';
};

export const boxShadow = (props) => {
  const bs = props.boxShadow;
  const bsb = props.boxShadowBlur;
  if (!bs) return '';

  return `box-shadow: 0 0 ${bsb || '1.5em'} ${themeGet(`colors.fade.black.${bs * 10}`, 'black')(props)}`;
};
