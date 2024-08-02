import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './components_css/AppBar.css';

const AppBar = ({ onSearch }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="app-bar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="app-bar-content">
        {location.pathname === '/community' && (
          <div className="search-bar-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        )}
        {location.pathname === '/community' && (
          <Link to="/user" className="user-button">Users</Link>
        )}
        {location.pathname !== '/community' && (
          <Link to="/community" className="retro-key">Community</Link>
        )}
      </div>
    </div>
  );
};

export default AppBar;
