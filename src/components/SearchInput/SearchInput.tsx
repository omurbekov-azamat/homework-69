import React from 'react';

const SearchInput = () => {
  return (
    <div className='container mt-5 d-flex align-items-center'>
      <label htmlFor="tv">Search for TV Show:</label>
      <input
        className='ms-3 form-control w-50'
        id='tv'
        name='tv'
        type="text"
      />
    </div>
  );
};

export default SearchInput;