import React from 'react';
import {useParams} from "react-router-dom";

const Shows = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div className='container mt-5'>
      {id}
    </div>
  );
};

export default Shows;