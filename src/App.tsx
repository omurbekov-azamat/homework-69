import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Shows from "./containers/Shows/Shows";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shows/:id' element={<Shows/>}/>
        <Route path='*' element={<h1>Not found!</h1>}/>
      </Routes>
    </>
  );
}

export default App;
