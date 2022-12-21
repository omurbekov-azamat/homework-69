import React from 'react';
import {NewShow} from "../../types";

interface Props {
  item: NewShow;
}

const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

const TvCard: React.FC<Props> = ({item}) => {

  let image = null;

  if (item.image === null) {
    image = imageUrl;
  } else {
    image = item.image.medium;
  }

  return (
    <div className='fs-3'>
      <img src={image} alt={item.name} style={{width: '300px'}}/>
      <p className='pt-2'>Name: {item.name}</p>
      <p>Language: {item.language}</p>
      <p>Rating: {item.rating.average === null ? 'no rating' : item.rating.average}</p>
    </div>
  );
};

export default TvCard;