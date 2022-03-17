import React, { Fragment } from "react";
import story1 from '../../img/story-1.jpeg';
import story2 from '../../img/story-2.jpeg';
import "./Story.scss";

const Story = () => {
  return (
    <Fragment>
      <div className="story__pictures">
        <img src={story1} alt="story-1" className="story__img--1" />
        <img src={story2} alt="story-2" className="story__img--2" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2-dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>
    </Fragment>
  );
};

export default Story;
