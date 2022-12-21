import React from 'react';
import {useAppSelector} from "../../app/hook";
import {selectSerials} from "../SearchInput/searchInputSlice";
import LinkSerial from "./LinkSerial";

const LinkSerials = () => {
  const serials = useAppSelector(selectSerials);
  return (
    <div className='container'>
      <div className='border border-light mt-3 p-3 d-flex flex-column' style={{width: '560px', marginLeft: '160px'}}>
        {serials.map((item) => (
          <LinkSerial
            key={Math.random()}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkSerials