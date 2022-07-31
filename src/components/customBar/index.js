import React, { useState, useEffect } from 'react';
import CustomInput from '../customInput';
import CustomSelect from '../customSelect';

function CustomBar({ getSearchRes, options, onChangeSelection }) {
  const [searchTxt, setSearchTxt] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTxt(value);
  };

  useEffect(() => {
    searchTxt && getSearchRes(searchTxt);
  }, [searchTxt]);

  return (
    <div className="d-flex flex-sm-row-reverse flex-column align-items-center justify-content-center justify-content-sm-start w-100">
      <CustomSelect
        options={options}
        onChangeSelection={onChangeSelection}
        setSearchTxt={setSearchTxt}
      />
      <CustomInput
        type="text"
        label=""
        name="searchTxt"
        placeholder="Search..."
        value={searchTxt}
        handleChange={handleChange}
      />
    </div>
  );
}

export default CustomBar;
