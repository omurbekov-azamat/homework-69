import React from 'react';
import {useAppSelector} from "../../app/hook";
import {selectLoadingSerials, selectSerials} from "../../store/searchInputSlice";
import LinkSerial from "./LinkSerial";
import Spinner from "../Spinner/Spinner";

const LinkSerials = () => {
  const serials = useAppSelector(selectSerials);
  const loading = useAppSelector(selectLoadingSerials);

  return (
    <div className='container'>
      <div className='border border-light mt-3 p-3 d-flex flex-column' style={{width: '560px', marginLeft: '160px'}}>
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

export default LinkSerials