// Component for displaying a single menu item with its details and "Add to Cart" button

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(AppContext); // Access addToCart from global context

  return (
    <div className="menu-item">
     <img 
       src={item.image} 
       alt={item.name} 
       style={{ width: "200px", height: "auto", borderRadius: "8px" }} 
      />
      

      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Ingredients: {item.ingredients.join(", ")}</p>
      <p>Price: ${item.price}</p>
      <button className="Add" onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
