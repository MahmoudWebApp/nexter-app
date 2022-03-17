import React from "react";
import "./Footer.scss";
import { footerData } from "./footerData";

const Footer = () => {
  const footerNav = footerData.map((item) => (
    <li key={item.id} className="nav__item">
      <a href="#" className="nav__link">
        {item.title}
      </a>
    </li>
  ));
  return (
    <footer className="footer">
      <ul className="nav">{footerNav}</ul>
      <p className="copyright">
        &copy; Copyright 2021 by Mahmoud Ahmed.Feel free to use this project for your own purposes.
      </p>
    </footer>
  );
};

export default Footer;
