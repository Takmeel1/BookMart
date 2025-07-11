import React from "react";
import "../styles/NavBar.css";
import UserProfile from "../components/UserProfile";
import { FaShoppingCart, FaSearch, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface Props {
  user: {
    name?: string;
    email?: string;
  };
  cartCount?: number;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
  onFilterClick: () => void;
}

export default function NavBar({
  user,
  cartCount = 0,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onFilterClick,
}: Props) {
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit();
    }
  };

  return (
    <nav className="navbar">
      {/* === Left Section === */}
      <div className="navbar-section navbar-left">
        <Link to="/" className="brand">
          <img src={logo} alt="BookMart Logo" className="brand-logo" />
          <span className="brand-name">BookMart</span>
        </Link>
      </div>

      {/* === Middle Section === */}
      <div className="navbar-section navbar-middle">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search books, authors..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button type="submit" className="search-submit">
            <FaSearch />
          </button>
        </form>

        <button className="filter-button" onClick={onFilterClick}>
          <FaFilter />
        </button>
      </div>

      {/* === Right Section === */}
      <div className="navbar-section navbar-right">
        <Link to="/cart" className="cart-link">
          <div className="cart-container">
            <FaShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>
        <div className="user-container">
          <span className="welcome-msg">Hi, {user.name || "Guest"}</span>
          <UserProfile name={user.name || "Guest"} email={user.email || ""} />
        </div>
      </div>
    </nav>
  );
}
