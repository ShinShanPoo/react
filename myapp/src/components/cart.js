import React from 'react';
import './cart.css';

function Card({ imgUrl, title, descripcion, icons, cantingr }) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imgUrl} alt='' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-descripcion'>
          <p>{descripcion}</p>
        </div>
      </div>
      <h4 className='title-ingredientes'>Ingredientes</h4>
      <div className='card-icons-with-text'>
        <div className='card-cantingr'>
          <p>{cantingr}</p>
        </div>
        <div className='card-icon'>
          {icons.map((iconUrl, i) => (
            <img src={iconUrl} alt={`Icon ${i + 1}`} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Card;
