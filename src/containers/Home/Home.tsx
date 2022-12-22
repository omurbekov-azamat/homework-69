import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useAppDispatch} from "../../app/hook";
import SearchInput from "../../components/SearchInput/SearchInput";
import LinkSerials from "../../components/LinkSerial/LinkSerials";
import {resetSerials} from "../../store/searchInputSlice";

const Home = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(resetSerials());
    }
  }, [dispatch ,location]);

  return (
    <>
      <SearchInput/>
      <LinkSerials/>
    </>
  );
};

export default Home;