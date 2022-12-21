import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Shows from "./container/Shows/Shows";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shows/:id' element={<Shows/>}/>
      </Routes>

    </>
  );
}

export default App;
