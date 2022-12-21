import React, {useState} from 'react';
import {onSearchInput} from "./searchInputThunks";
import {useAppDispatch} from "../../app/hook";
import {GotTvShow} from "../../types";

const SearchInput = () => {
  const dispatch = useAppDispatch();

  const [tvShow, setTvShow] = useState<GotTvShow>({
    serial: '',
  });

  const onTvShowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTvShow(prev => ({...prev, serial: e.target.value}))
    dispatch(onSearchInput(e.target.value));
  };


  return (
    <div className='container mt-5 d-flex align-items-center'>
      <label htmlFor="tv">Search for TV Show:</label>
      <input
        className='ms-3 form-control w-50'
        id='tv'
        name='tv'
        type="text"
        value={tvShow.serial}
        onChange={onTvShowChange}
      />
    </div>
  );
};

export default SearchInput;