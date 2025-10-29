// This file provides global state management using React Context API.
// It holds data like the menu, cart, orders, and reservations.

import { createContext, useState } from "react";

// Create a Context to share data between components without prop drilling
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Cart stores all selected menu items
  const [cart, setCart] = useState([]);

  // Orders list all placed orders by customers
  const [orders, setOrders] = useState([]);

  // Reservations for booked tables or events
  const [reservations, setReservations] = useState([]);

  // Menu items for the steak restaurant (initial static data)
  const [menu, setMenu] = useState([
    { id: 1, name: "Ribeye Steak", category: "Main", price: 25, description: "Juicy ribeye steak cooked to perfection", ingredients: ["Beef", "Spices"], available: true, image: "https://www.jessicagavin.com/wp-content/uploads/2018/06/ribeye-steak-with-red-wine-sauce-3-1200.jpg"},
    { id: 2, name: "Caesar Salad", category: "Starter", price: 10, description: "Crisp lettuce with creamy dressing", ingredients: ["Lettuce", "Croutons"], available: true , image: "https://thumbs.dreamstime.com/b/five-different-kind-salad-black-concrete-background-caesar-avocado-chuka-wakame-eel-chicken-japanese-stile-266135359.jpg"},
    { id: 3, name: "Chocolate Cake", category: "Dessert", price: 8, description: "Rich and moist chocolate cake", ingredients: ["Chocolate", "Cream"], available: true, image: "https://leitesculinaria.com/wp-content/uploads/2024/04/chocolate-caramel-cake-1.jpg" },
  ]);

  // Add item to the shopping cart
  const addToCart = (item) => setCart([...cart, item]);

  // Remove an item from the shopping cart by ID
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  // Place an order: move cart items to orders and clear cart
  const placeOrder = () => {
    setOrders([...orders, { id: orders.length + 1, items: cart, status: "Preparing" }]);
    setCart([]); // clear cart after placing order
  };

  // Add a new reservation to the list
  const addReservation = (reservation) => setReservations([...reservations, reservation]);

  // Provide all state values and functions to the rest of the app
  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart, placeOrder,
      orders, reservations, addReservation,
      menu, setMenu
    }}>
      {children}
    </AppContext.Provider>
  );
};
