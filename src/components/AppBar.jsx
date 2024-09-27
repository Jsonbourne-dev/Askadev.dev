import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppbarButton } from '../styled-components';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/logo.svg';
import SearchBar from './SearchBar';

const AppBar = ({ onSearch }) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSearch = () => setShowSearch(!showSearch);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/community", label: "Community" },
    { path: "/docs", label: "Docs" },
    { path: "/profile", label: "Profile" }
  ];

  return (
    <header
      style={{
        width: '100%',
        height: isSmallScreen ? '50px' : '80px',
        backgroundColor: '#000000',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: isSmallScreen ? '30px' : '60px', // Adjusted size for the logo
              }}
            />
          </Link>

          {!isSmallScreen && (
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
              {menuItems.map(({ path, label }) => (
                <AppbarButton as={Link} to={path} key={path} isActive={location.pathname === path}>
                  {label}
                </AppbarButton>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {location.pathname === '/community' && (
            <FontAwesomeIcon
              icon={faSearch}
              onClick={toggleSearch}
              style={{
                color: '#FFFF00',
                fontSize: isSmallScreen ? '20px' : '30px', // Smaller size for small screens, larger for big screens
                cursor: 'pointer',
                marginRight: isSmallScreen ? '10px' : '20px',
              }}
            />
          )}
          {isSmallScreen && (
            <>
              <FontAwesomeIcon
                icon={faEllipsisV} // Menu icon
                onClick={toggleMenu}
                style={{
                  color: '#FFFF00',
                  fontSize: isSmallScreen ? '24px' : '36px', // Adjusted size for larger screens
                  cursor: 'pointer',
                }}
              />
              {showMenu && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    overflow: 'hidden',
                  }}
                >
                  {menuItems.map(({ path, label }) => (
                    <div key={path} style={{ position: 'relative', padding: '10px' }}>
                      {location.pathname === path && (
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          fontSize: '20px', // Adjust font size for the arrow
                          color: '#FFFF00',
                        }}>
                          &gt; {/* Pixelated arrow */}
                        </span>
                      )}
                      <Link to={path} style={{ color: '#FFFF00', textDecoration: 'none' }}>
                        {label}
                      </Link>
                    </div>
                  ))}
                  <button onClick={toggleMenu} style={{ marginTop: '20px', color: '#FFFF00' }}>Close</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div
        style={{
          width: isSmallScreen ? 'calc(100% + 50px)' : 'calc(100% + 150px)',
          marginLeft: 'auto',
          height: '2px',
          backgroundColor: 'yellow',
          marginTop: '2px',
        }}
      />

      {showSearch && (
        <SearchBar
          showSearch={showSearch}
          searchQuery=""
          handleSearchChange={() => {}}
          searchBarRef={null}
        />
      )}
    </header>
  );
};

export default AppBar;
