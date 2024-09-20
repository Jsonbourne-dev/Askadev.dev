import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppbarButton } from '../styled-components';
import Profile from './Profile';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/logo.svg';
import SearchBar from './SearchBar';

const AppBar = ({ onSearch }) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || '');
  const [DID, setDID] = useState(localStorage.getItem('DID') || '');
  const [showSearch, setShowSearch] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleProfile = () => setShowProfile(!showProfile);
  const toggleSearch = () => setShowSearch(!showSearch);

  const handleGenerateDID = () => {
    const newDID = 'DID-' + Math.random().toString(36).substr(2, 16).toUpperCase();
    localStorage.setItem('DID', newDID);
    setDID(newDID);
    toggleProfile();
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

  const isCommunityPage = location.pathname === '/community';

  return (
    <header
      style={{
        width: '100%',
        height: isSmallScreen ? '50px' : '80px',
        backgroundColor: 'black',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
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
                height: isSmallScreen ? '30px' : '50px',
              }}
            />
          </Link>

          {!isSmallScreen && (
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
              <AppbarButton
                as={Link}
                to="/community"
                onPage={isCommunityPage}
                style={{
                  marginRight: '20px',
                }}
              >
                Community
              </AppbarButton>
              <AppbarButton
                as={Link}
                to="/docs" 
                style={{
                  marginRight: '20px',
                }}
              >
                Docs
              </AppbarButton>
              <AppbarButton
                as="a"
                href="https://github.com/Jsonbourne-dev/Askadev.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source
              </AppbarButton>
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
                fontSize: isSmallScreen ? '30px' : '24px',
                cursor: 'pointer', 
                marginRight: isSmallScreen ? '10px' : '20px'
              }}
            />
          )}
          {isSmallScreen ? (
            <>
              <FontAwesomeIcon
                icon={faBars}
                onClick={toggleMenu}
                style={{ color: '#FFFF00', fontSize: '30px', cursor: 'pointer' }}
              />
              {showMenu && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50px',
                    right: 0,
                    width: '100%',
                    backgroundColor: 'black',
                    borderBottom: '2px solid yellow',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <Link to="/" style={{ color: '#FFFF00', textDecoration: 'none', padding: '10px' }}>Home</Link>
                  <Link to="/community" style={{ color: '#FFFF00', textDecoration: 'none', padding: '10px' }}>Community</Link>
                  <Link to="/docs" style={{ color: '#FFFF00', textDecoration: 'none', padding: '10px' }}>Docs</Link> {/* Add this line */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: '#FFFF00',
                      padding: '10px',
                    }}
                    onClick={toggleProfile}
                  >
                    <FontAwesomeIcon
                      icon={profilePicture ? undefined : faUserCircle}
                      style={{ fontSize: '20px', marginRight: '10px' }}
                    />
                    <span>{profilePicture ? 'Profile' : 'Log In'}</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#FFFF00',
                backgroundColor: '#333',
                borderRadius: '50%',
                padding: '5px',
              }}
              onClick={toggleProfile}
            >
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
              ) : (
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '40px' }} />
              )}
            </div>
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

      {showProfile && (
        <Profile
          profilePicture={profilePicture}
          DID={DID}
          handleGenerateDID={handleGenerateDID}
          handleProfilePictureUpload={handleProfilePictureUpload}
          onClose={() => setShowProfile(false)}
        />
      )}
    </header>
  );
};

export default AppBar;
