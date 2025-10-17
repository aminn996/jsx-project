

import React from "react";
import product from "../ProductCard";

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="card-img-top"
      style={{ objectFit: "cover", height: "200px" }}
    />
  );
}

export default Image;
