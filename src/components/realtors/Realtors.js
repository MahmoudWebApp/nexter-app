import React from 'react';
import "./Realtors.scss";
import {realtorsData} from "./realtorsData";

const Realtors = () => {
  const realtors= realtorsData.map((realtor)=><>
  <img src={realtor.img} alt={`realtor ${realtor.id}`} className='realtors__img'/>
  <div className="realtors__details">
    <h4 className="heading-4 heading-4--light">{realtor.name}</h4>
    <p className="realtors__sold">{realtor.numberHouseIsSolid} houses sold</p>
  </div>
  </>)
  return <div className='realtors'>
    <h3 className="heading-3">Top 3 Realtors</h3>
    <div className="realtors__list">
    {realtors}
    </div>

 </div>;
};

export default Realtors;
