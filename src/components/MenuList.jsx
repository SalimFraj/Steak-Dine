// Displays all menu items in a list, allowing filtering by category

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const { menu } = useContext(AppContext); // Access global menu data
  const [categoryFilter, setCategoryFilter] = useState("All"); // Track selected category

  // Filter menu based on selected category
  const filteredMenu = categoryFilter === "All"
    ? menu
    : menu.filter(item => item.category === categoryFilter);

  return (
    <div>
      <h2 className="Menu">Menu</h2>

      {/* Dropdown to filter menu by category */}
      <select  className="select" onChange={(e) => setCategoryFilter(e.target.value)}>
        <option>All</option>
        <option>Starter</option>
        <option>Main</option>
        <option>Dessert</option>
        <option>Beverage</option>
      </select>

      {/* Display filtered menu items */}
      <div className="menu-list">
        {filteredMenu.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
