import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../components/Flex';
import Border from '../components/Border';
import Text from '../components/Text';
import Button from '../components/Button';

const FilterButton = (props) => (<Button.filter mx="0.5em" {...props} />);

const Filters = ({
  onToggle,
  unsetAll,
  filters,
  ...props
}) => (
  <Border border="1px solid" borderLeft="none" borderRight="none" py="4em">
    <Flex px="3em" {...props}>
      <Text>Filter Projects:</Text>
      <FilterButton
        onClick={unsetAll}
        active={filters.every((filter) => !filter.active)}
      >
        ALL
      </FilterButton>
      {filters.map((filter) => (
        <FilterButton
          key={filter.key}
          onClick={onToggle(filter.key)}
          active={filter.active}
        >
          {filter.label}
        </FilterButton>
      ))}
    </Flex>
  </Border>
);

Filters.propTypes = {
  onToggle: PropTypes.func,
  unsetAll: PropTypes.func,
  filters: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    active: PropTypes.bool,
  })),
};

export default Filters;
