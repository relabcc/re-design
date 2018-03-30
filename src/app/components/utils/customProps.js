import { themeGet } from 'styled-system';

export const fontWeight = (props) => {
  const fw = props.fontWeight;
  return fw ? `font-weight: ${themeGet(fw, fw)(props)}` : '';
};
