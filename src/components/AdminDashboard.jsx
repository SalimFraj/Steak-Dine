// Admin page to manage menu items, view orders, and reservations

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AdminDashboard = () => {
  const { menu, setMenu, orders, reservations } = useContext(AppContext);

  // Local state for creating a new menu item
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Main",
    price: 0,
    description: "",
    ingredients: ""
  });

  // Add a new menu item to the restaurant menu
  const addMenuItem = () => {
    setMenu([
      ...menu,
      {
        ...newItem,
        id: Date.now(),
        ingredients: newItem.ingredients.split(",") // convert string to array
      }
    ]);

    // Reset form fields
    setNewItem({ name: "", category: "Main", price: 0, description: "", ingredients: "" });
  };

  return (
    <div className="AdminDashboard">
      <h2 style={{color: "white"}}>Admin Dashboard</h2>

      {/* Add new menu item section */}
      <div >
        <h3>Add New Menu Item</h3>
        <input placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
        <select value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })}>
          <option>Main</option>
          <option>Starter</option>
          <option>Dessert</option>
          <option>Beverage</option>
        </select>
        <input type="number" placeholder="Price" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: parseFloat(e.target.value) })} />
        <input placeholder="Description" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })} />
        <input placeholder="Ingredients (comma separated)" value={newItem.ingredients} onChange={e => setNewItem({ ...newItem, ingredients: e.target.value })} />
        <button onClick={addMenuItem}>Add Item</button>
      </div>

      {/* List of all orders */}
      <h3 style={{color: "white"}}>Orders</h3>
      {orders.map(order => (
        <div key={order.id}>
          Order #{order.id} - Status: {order.status}
        </div>
      ))}

      {/* List of all reservations */}
      <h3 style={{color:"white"}}>Reservations</h3>
      {reservations.map(r => (
        <div key={r.id}>
          {r.name} - {r.date} {r.time} ({r.people} people)
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
