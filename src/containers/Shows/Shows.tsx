import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchSerial} from "../../store/tvCardThunk";
import {selectLoadingOneShow, selectSerial} from "../../store/searchInputSlice";
import TvCard from "../../components/TvCard/TvCard";
import Spinner from "../../components/Spinner/Spinner";
import SearchInput from "../../components/SearchInput/SearchInput";
import LinkSerials from "../../components/LinkSerial/LinkSerials";

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
      <SearchInput/>
      <LinkSerials/>
      <div className='mt-5' style={{marginLeft: '200px'}}>
        {loading ? <Spinner/> : serial.name.length > 0 && (
          <TvCard item={serial}/>
        )}
      </div>
    </div>
  );
};

export default Shows;