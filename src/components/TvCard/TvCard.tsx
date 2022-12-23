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
    <div className='fs-3 d-flex'>
      <img src={image} alt={item.name} style={{width: '300px'}}/>
      <div className='ms-5'>
        <p className='pt-2'>Name: {item.name}</p>
        <p>Language: {item.language}</p>
        <p>Rating: {item.rating.average === null ? 'no rating' : item.rating.average}</p>
        <p>Premiered: {item.premiered}</p>
        <p>Average runtime: {item.averageRuntime}</p>
        <p>Status: {item.status}</p>
        <p>Rut time: {item.runtime} minutes</p>
        <a href={item.url} target="_blank">{item.url}</a>
      </div>
    </div>
  );
};

export default TvCard;