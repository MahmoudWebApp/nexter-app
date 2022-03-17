import React from "react";
import Icons from "../img/sprite.svg"; // Path to your icons.svg
// import PropTypes from 'prop-types';

const Icon = ({ name,className }) => (
  <svg className={className}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

// Icon.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Icon;