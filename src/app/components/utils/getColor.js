export const getActiveColor = ({
  disabled,
  readOnly,
  isError,
  theme,
}) => {
  if (disabled) return theme.colors.input.disabled;
  if (isError) return theme.colors.input.error;
  if (readOnly) return theme.colors.input.main;
  return theme.colors.input.active;
};

export const getColor = ({
  disabled,
  isError,
  theme,
}) => {
  if (disabled) return theme.colors.input.disabled;
  if (isError) return theme.colors.input.error;
  return theme.colors.input.main;
};

export const getHoverColor = ({
  disabled,
  theme,
  hoverColor,
}) => {
  if (disabled) return theme.colors.input.disabled;
  return theme.colors[hoverColor] || hoverColor;
};

export const getColorByPropKey = (key) => (props) => {
  if (props.disabled) return props.theme.colors.input.disabled;
  const colorKey = props[key];
  return props.theme.colors[colorKey] || colorKey;
};
