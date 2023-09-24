import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          name="filter"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </FilterLabel>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

export default Filter;
