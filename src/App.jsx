// Root component that handles routing between Customer and Admin pages

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import { AppProvider } from "./context/AppContext";
import CustomerPage from "./pages/CustomerPage";
import AdminPage from "./pages/AdminPage";
import './App.css';



// Main App component
function App() {
  return (
    // AppProvider wraps everything so global state is available everywhere
    <AppProvider>
      {/* Router enables page navigation */}
      <Router>
        {/* Simple navigation bar */}
        <nav style={navStyle}>
          <h2 style={{ color: "#fff" }}>🥩 Steak <sup>&&</sup> Dine</h2>
          <ul style={ulStyle}>
            <li><Link style={linkStyle} to="/">Home</Link></li>
            <li><Link style={linkStyle} to="/admin">Admin</Link></li>
          </ul>
        </nav>

        {/* Routes define which page to show for each URL */}
        <Routes>
          <Route path="/" element={<CustomerPage />} />   {/* Customer view */}
          <Route path="/admin" element={<AdminPage />} /> {/* Admin dashboard */}
        </Routes>
      </Router>
    </AppProvider>
  );
}

// Inline styles for the navigation bar
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#8B0000", // dark red steak color
  padding: "10px 30px",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)"
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  gap: "20px",
  margin: 0,
  padding: 0
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};

export default App;
