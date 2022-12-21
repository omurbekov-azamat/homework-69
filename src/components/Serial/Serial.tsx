import React from 'react';
import {GotSerial} from "../../types";

interface Props {
  item: GotSerial;
}

const Serial: React.FC<Props> = ({item}) => {
  return (
    <div>
      {item.name}
    </div>
  );
};

export default Serial;