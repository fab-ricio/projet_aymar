import React from "react";
import waste2gaz from "../images/waste-2-gaz.jpg";

const Logo = ({ style = {} }) => (
  <img
    src={waste2gaz}
    alt="Logo Waste 2 Gaz"
    style={{ width: 64, height: 64, objectFit: 'contain', ...style }}
  />
);

export default Logo;
