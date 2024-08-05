import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './components_css/AppBar.css';

const AppBar = ({ onSearch }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);
  const [showModal, setShowModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || '');
  const [did, setDID] = useState(localStorage.getItem('DID') || '');
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  const generateRandomDID = () => {
    return 'DID-' + Math.random().toString(36).substr(2, 16).toUpperCase();
  };

  const handleGenerateDID = () => {
    const newDID = generateRandomDID();
    localStorage.setItem('DID', newDID);
    setDID(newDID);
    toggleModal();
  };

  const handleEnterDID = (event) => {
    event.preventDefault();
    const enteredDID = event.target.dlDID.value;
    if (enteredDID) {
      localStorage.setItem('DID', enteredDID);
      setDID(enteredDID);
      toggleModal();
    }
  };

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        localStorage.setItem('profilePicture', result);
        setProfilePicture(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app-bar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="app-bar-content">
        {location.pathname === '/community' ? (
          <>
            {isSmallScreen ? (
              <>
                <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleSearch} />
                <FontAwesomeIcon icon={faBars} className="burger-menu" onClick={toggleMenu} />
                <div className={`search-bar-small ${showSearch ? 'show' : ''}`} ref={searchBarRef}>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className={`burger-menu-content ${showMenu ? 'show' : ''}`}>
                  <Link to="/community" onClick={() => setShowMenu(false)}>Community</Link>
                  <Link to="/user" onClick={() => setShowMenu(false)}>Users</Link>
                </div>
              </>
            ) : (
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
          </>
        ) : (
          <>
            {!isSmallScreen && window.innerWidth >= 1300 && location.pathname !== '/' && (
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
            {!isSmallScreen && window.innerWidth >= 1300 && location.pathname === '/community' && (
              <Link to="/user" className="user-button">Users</Link>
            )}
            {!isSmallScreen && window.innerWidth >= 1300 && location.pathname !== '/community' && (
              <Link to="/community" className="retro-key">Community</Link>
            )}
            {isSmallScreen && (
              <>
                {location.pathname !== '/' && (
                  <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleSearch} />
                )}
                <FontAwesomeIcon icon={faBars} className="burger-menu" onClick={toggleMenu} />
                <div className={`search-bar-small ${showSearch ? 'show' : ''}`} ref={searchBarRef}>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className={`burger-menu-content ${showMenu ? 'show' : ''}`}>
                  <Link to="/community" onClick={() => setShowMenu(false)}>Community</Link>
                  <Link to="/user" onClick={() => setShowMenu(false)}>Users</Link>
                </div>
              </>
            )}
          </>
        )}
        <div className="profile-button" onClick={toggleModal}>
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="profile-picture" />
          ) : (
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
          )}
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={toggleModal} className="close-button">&times;</button>
            <h2>Profile Options</h2>
            <form onSubmit={handleEnterDID} className="modal-form">
              <label>
                Enter DID:
                <input type="text" name="dlDID" defaultValue={did} />
              </label>
              <button type="submit" className="retro-button">Save DID</button>
            </form>
            <div className="button-group">
              <button onClick={handleGenerateDID} className="retro-button">Generate DID</button>
              <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
            </div>
          </div>
        </div>
      )}



    </div>
  );
};

export default AppBar;
