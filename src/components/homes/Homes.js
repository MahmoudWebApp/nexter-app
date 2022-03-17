import React from 'react';
import { homeData } from './homeData';
import Icon from '../../common/Icon';
import "./Homes.scss";
const Homes = () => {
  const homes=homeData.map((home)=>
  <div className="home" key={home.id}>
      <img src={home.img} alt={home.img} className='home__img' />
      <Icon name={"heart-full"} className={"home__like"}/>
      <h5 className="home__name">{home.name}</h5>
      <div className="home__location">
        <Icon name="map-pin"/>
        <p>{home.location}</p>
      </div>
      <div className="home__rooms">
        <Icon name="profile-male"/>
        <p>{home.rooms}</p>
      </div>
      <div className="home__area">
        <Icon name="expand"/>
        <p>{home.area}<sup>2</sup> </p>
      </div>
      <div className="home__price">
        <Icon name="key"/>
        <p>{home.price}</p>
      </div>
      <button className='btn home__btn'>Contact realtor</button>
    </div>
  );
  return (<div className='homes'>
    {homes}
  </div>);
};

export default Homes;
