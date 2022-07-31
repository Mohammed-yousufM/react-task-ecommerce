import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Col from 'react-bootstrap/Col';

import { CATEGORY_ALL } from '../../constants';

function CustomSelect({ options, onChangeSelection, setSearchTxt }) {
  const [formattedOptions, setFormattedOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  const onChangeFn = (value) => {
    setSelectedValue(value);
    setSearchTxt('');
  };

  const formatData = () => {
    const formatOptions = options.reduce(
      (accumulator, currentVal, currentIndex) => {
        const capsLabel = currentVal.replace(/(^\w|\s\w)/g, (m) =>
          m.toUpperCase()
        );
        const oneBox = {
          id: currentIndex + 1,
          value: currentVal,
          label: capsLabel,
        };

        return [...accumulator, oneBox];
      },
      [{ ...CATEGORY_ALL }]
    );
    setFormattedOptions(formatOptions);
  };

  useEffect(() => {
    selectedValue?.value && onChangeSelection(selectedValue.value);
  }, [selectedValue?.value]);

  useEffect(() => {
    formatData();
  }, [JSON.stringify(options)]);

  return (
    <Col md="4" className="mt-4 ps-2">
      <Select
        placeholder="Select category"
        options={formattedOptions}
        value={selectedValue}
        onChange={onChangeFn}
        styles={customStyle}
      />
    </Col>
  );
}

export default CustomSelect;

const customStyle = {
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    margin: 0,
    fontSize: 13,
  }),
};
