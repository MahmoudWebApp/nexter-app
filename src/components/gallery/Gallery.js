import React from 'react';
import './Gallery.scss';
import { galleryImage } from './gallery-image';

const Gallery = () => {
const gallery = galleryImage.map((gall)=><figure key={gall.id} className={`gallery__item gallery__item--${gall.id}`}>
<img src={gall.image} alt={gall.image} className='gallery__img'/>
</figure>)
  return <section className='gallery'>
    {gallery}
      
  </section>;
};

export default Gallery;
