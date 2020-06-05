import React from 'react'

const SearchField =  ({value, onChange, onSearch}) => {
    return (
        <div className ="search">
          <input
            className="input"
            type="text"
            value={value}
            placeholder="Search..."
            onChange={onChange}
          />
          <button onClick= {onSearch}>Show ZipCodes</button>
        </div>
    );
};
export default SearchField;