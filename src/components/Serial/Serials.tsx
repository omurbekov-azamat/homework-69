import React from 'react';
import {useAppSelector} from "../../app/hook";
import {selectSerials} from "../SearchInput/searchInputSlice";
import Serial from "./Serial";

const Serials = () => {
  const serials = useAppSelector(selectSerials);
  return (
    <div className='container'>
      <div className='border border-dark mt-3 p-2' style={{width: '560px', marginLeft: '160px'}}>
        {serials.map((item) => (
          <Serial
            key={Math.random()}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Serials;