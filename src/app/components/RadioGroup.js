import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { inputValue } from '../utils/propTypes';
import Flex from './Flex';
import Radio from './Radio';
import Box from './Box';
import Text from './Text';

class RadioGroup extends PureComponent {
  state = {
    value: this.props.value,
    checked: null,
  }

  handleOnChnage = (index) => (e) => {
    const { onChange } = this.props;
    this.setState({ checked: index });
    if (onChange) onChange(e, index);
  }

  render() {
    const { checked } = this.state;
    const { value: v, name, onChange, options, children, ...props } = this.props;
    return (
      <Box {...props}>
        <Text f="0.8em">{children}</Text>
        <Flex flexWrap="wrap">
          {options.map((option, index) => (
            <Radio
              key={index}
              name={name}
              value={option.value}
              onChange={this.handleOnChnage(index)}
              checked={checked === index}
              m="0.5em"
            >
              {option.label}
            </Radio>
          ))}
        </Flex>
      </Box>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: inputValue,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: inputValue,
    value: inputValue,
  })).isRequired,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default RadioGroup;
