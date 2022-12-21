import React from 'react';
import {GotSerial} from "../../types";
import {NavLink} from "react-router-dom";

interface Props {
  item: GotSerial;
}

const LinkSerial: React.FC<Props> = ({item}) => {
  return (
    <NavLink to={'/shows/' + item.id} className='p-1 text-success'>
      {item.name}
    </NavLink>
  );
};

export default LinkSerial;