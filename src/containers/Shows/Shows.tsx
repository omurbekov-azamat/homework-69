import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchSerial} from "../../store/tvCardSlice";
import {selectLoadingOneShow, selectSerial} from "../../store/searchInputSlice";
import TvCard from "../../components/TvCard/TvCard";
import Spinner from "../../components/Spinner/Spinner";

const Shows = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const serial = useAppSelector(selectSerial);
  const loading = useAppSelector(selectLoadingOneShow);

  useEffect(() => {
    if (id) {
      dispatch(fetchSerial(id));
    }
  }, [id, dispatch]);

  return (
    <div className='container mt-5'>
      {loading ? <Spinner/> : serial.name.length > 0 && (
        <TvCard item={serial}/>
      )}
    </div>
  );
};

export default Shows;