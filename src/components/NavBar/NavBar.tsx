import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>TV Shows</NavLink>
      </div>
    </div>
  );
};

export default NavBar;