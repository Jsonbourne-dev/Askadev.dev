import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppbarButton, Button } from '../styled-components';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/logo.svg';
import { Helmet } from 'react-helmet';
import {
  SearchBarContainer,
  SearchInput,
  FlagsContainer,
} from '../styled-components/SearchBarStyles';

const AppBar = ({ onSearch }) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

  const searchBarRef = useRef(null);

  const flags = [
    { code: 'react', label: 'React' },
    { code: 'python', label: 'Python' },
    { code: 'json', label: 'JSON' },
    { code: 'rust', label: 'Rust' },
    { code: 'javascript', label: 'JavaScript' },
    { code: 'typescript', label: 'TypeScript' },
    { code: 'java', label: 'Java' },
    { code: 'csharp', label: 'C#' },
    { code: 'go', label: 'Go' },
    { code: 'ruby', label: 'Ruby' },
    { code: 'php', label: 'PHP' },
    { code: 'swift', label: 'Swift' },
    { code: 'kotlin', label: 'Kotlin' },
    { code: 'scala', label: 'Scala' },
    { code: 'dart', label: 'Dart' },
    { code: 'elixir', label: 'Elixir' },
    { code: 'clojure', label: 'Clojure' },
  ];

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      resetFlags();
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    onSearch(searchQuery);
    resetFlags();
    toggleSearch();
  };

  const handleFlagSelect = (flagCode) => {
    setSelectedFlags((prevSelectedFlags) => {
      if (prevSelectedFlags.includes(flagCode)) {
        return prevSelectedFlags.filter(code => code !== flagCode);
      } else {
        return [...prevSelectedFlags, flagCode];
      }
    });
  };

  const resetFlags = () => {
    setSelectedFlags([]);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/community", label: "Community" },
    { path: "/docs", label: "Docs" },
    { path: "/profile", label: "Profile" },
    { path: "/develop", label: "Develop" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowSearch(false);
        resetFlags();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarRef]);

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <header
        style={{
          width: '100%',
          height: isSmallScreen ? '50px' : '80px',
          backgroundColor: '#1a1a1a',
          position: 'relative',
          fontFamily: "'Press Start 2P', cursive",
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
                  height: isSmallScreen ? '30px' : '60px',
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
                  fontSize: isSmallScreen ? '20px' : '30px',
                  cursor: 'pointer',
                  marginRight: isSmallScreen ? '10px' : '20px',
                }}
              />
            )}
            {isSmallScreen && (
              <>
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  onClick={toggleMenu}
                  style={{
                    color: '#FFFF00',
                    fontSize: isSmallScreen ? '24px' : '36px',
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
                      backgroundColor: 'rgba(26, 26, 26, 0.95)',
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
                            fontSize: '20px',
                            color: '#FFFF00',
                          }}>
                            &gt;
                          </span>
                        )}
                        <Link to={path} style={{ color: '#FFFF00', textDecoration: 'none' }}>
                          {label}
                        </Link>
                      </div>
                    ))}
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
          <SearchBarContainer ref={searchBarRef}>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <FlagsContainer>
              {flags.map((flag) => (
                <div
                  key={flag.code}
                  className={`flag ${selectedFlags.includes(flag.code) ? 'selected' : ''}`}
                  onClick={() => handleFlagSelect(flag.code)}
                >
                  {flag.label}
                </div>
              ))}
            </FlagsContainer>
            <Button onClick={handleSearch} style={{ alignSelf: 'flex-start', marginTop: '20px' }}>
              Ask Question
            </Button>
          </SearchBarContainer>
        )}
      </header>
    </>
  );
};

export default AppBar;
