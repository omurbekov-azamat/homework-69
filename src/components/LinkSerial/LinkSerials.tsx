import React from 'react';
import {useAppSelector} from "../../app/hook";
import {selectLoadingSerials, selectSerials} from "../../store/searchInputSlice";
import LinkSerial from "./LinkSerial";
import Spinner from "../Spinner/Spinner";

const LinkSerials = () => {
  const serials = useAppSelector(selectSerials);
  const loading = useAppSelector(selectLoadingSerials);

  let border = null;

  if (serials.length === 0) {
    border = 'none';
  } else {
    border = '1px solid red';
  }

  return (
    <div className='container'>
      <div
        className='mt-3 p-3 d-flex flex-column'
        style={{width: '470px', marginLeft: '160px', border: border}}
      >
        {loading ? <Spinner/> : serials.map((item) => (
          <LinkSerial
            key={Math.random()}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkSerials;