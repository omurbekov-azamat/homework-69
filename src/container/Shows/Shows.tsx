import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchSerial} from "./showsSlice";
import {selectSerial} from "../../components/SearchInput/searchInputSlice";
import TvCard from "../../components/TvCard/TvCard";

const Shows = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const serial = useAppSelector(selectSerial);

  useEffect(() => {
    if (id) {
      dispatch(fetchSerial(id));
    }
  }, [id, dispatch]);

  return (
    <div className='container mt-5'>
      {serial.name.length > 0 && (
        <TvCard item={serial}/>
      )}
    </div>
  );
};

export default Shows;