// Shows analytics to the admin, like total orders and most popular items

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Analytics = () => {
  const { orders, menu } = useContext(AppContext);

  // Total number of orders
  const totalOrders = orders.length;

  // Count how many times each item was ordered
  const popularItems = menu
    .map(item => ({
      ...item,
      count: orders.reduce((acc, order) => acc + order.items.filter(i => i.id === item.id).length, 0)
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="Analytics">
      <h2>Analytics</h2>
      <p>Total Orders: {totalOrders}</p>

      <h3>Popular Items</h3>
      <ul>
        {popularItems.map(item => (
          <li key={item.id}>{item.name} - {item.count} sold</li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
