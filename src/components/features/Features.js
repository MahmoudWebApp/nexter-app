import React from "react";
import "./Features.scss";
import { featuresData } from "./featuresData";

import Icon from "../../common/Icon";

const features=featuresData.map((feature)=><div key={feature.id} className="feature">
<Icon name={feature.featureIcon} className={"feature__icon"} />
<h4 className="heading-4 heading-4--dark">{feature.featureTitle}</h4>
<p className="feature__text">{feature.featureText}</p>
</div>);

const Features = () => {
  return (
    <section className="features">
      {features}
    </section>
  );
};

export default Features;
