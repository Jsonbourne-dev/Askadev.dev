import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  background-color: black;
  height: 100px;
  width: calc(100% - 400px);
  position: fixed;
  top: 0;
  left: 200px;
  border-bottom: 3px solid #FFFF00;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: 1300px) {
    width: 100%;
    left: 0;
    padding: 0 10px;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const AppBarContent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 1300px) {
    justify-content: flex-end;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 20px;
  border: 2px solid #FFFF00;
  padding: 5px 10px;
  width: 50%; 
  max-width: 800px;
  box-sizing: border-box;
  margin: auto; 

  @media (max-width: 1300px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px;
  border: none;
  background-color: transparent;
  color: #00FFFF;
  font-size: 20px;
  outline: none;
  font-family: 'Press Start 2P', cursive;
  transition: border-color 0.2s;
  position: relative;

  &::placeholder {
    color: #FFFF00;
    font-size: 20px;
  }

  &:focus {
    border-bottom-color: #e1b91e;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    height: 1em;
    width: 2px;
    background-color: #00FFFF;
    transform: translateY(-50%);
    transition: opacity 0.1s;
  }

  &:focus::before {
    opacity: 1;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  color: #00FFFF;
  font-size: 24px;
  margin-right: 10px;
`;

const UserButton = styled(Link)`
  background: transparent;
  border: none;
  color: #FFFF00;
  font-size: 25px;
  font-family: 'Courier New', Courier, monospace;
  text-decoration: none;
  border-bottom: 2.3px solid #FFFF00;
  padding: 5px 15px;
  margin-left: 30px;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    color: #00c7b6;
    border-bottom-color: #00ffbf;
  }
`;

const RetroKey = styled(Link)`
  background: #FFFF00;
  border: 4px solid #e1b91e;
  border-radius: 6px;
  color: #ffffff;
  padding: 12px 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  box-shadow: 0 6px 0 #5e5e5e, inset 0 1px 2px rgba(63, 63, 63, 0.3);
  margin-left: auto;

  &:active {
    background: #e1b91e;
    border-color: #d0a10d;
    box-shadow: 0 2px 0 #d0a10d, inset 0 1px 2px rgba(66, 66, 66, 0.5);
    transform: translateY(2px);
  }
`;

const SearchBarSmall = styled.div`
  display: none;
  align-items: center;
  background-color: black;
  border: 2px solid #FFFF00;
  border-radius: 20px;
  padding: 5px 10px;
  position: absolute;
  top: 100%;
  right: 0;
  width: calc(100% - 40px);
  max-width: 500px;

  &.show {
    display: flex;
  }
`;

const BurgerMenu = styled(FontAwesomeIcon)`
  display: none;
  cursor: pointer;
  color: #FFFF00;
  font-size: 30px;

  @media (max-width: 1300px) {
    display: block;
  }
`;

const BurgerMenuContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: black;
  border: 1px solid #FFFF00;
  z-index: 1001;

  &.show {
    display: block;
  }

  a {
    color: #FFFF00;
    padding: 10px;
    display: block;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      background-color: #333333;
    }
  }
`;
const ProfileButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ProfileIcon = styled(FontAwesomeIcon)`
  color: #FFFF00;
  font-size: 24px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;
`;

const ModalContent = styled.div`
  position: relative;
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffee00;
  border: none;
  color: #ffffff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.2s;

  &:hover {
    background: #c0b406;
  }
`;

const ModalTitle = styled.h2`
  margin: 0 0 25px;
  font-size: 24px;
  color: #333;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const ModalLabel = styled.label`
  margin-bottom: 10px;
  color: #555;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;

const ModalInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 15px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00b4d8;
  }
`;


const RetroButton = styled.button`
  background: #FFFF00;
  border: 4px solid #e1b91e;
  border-radius: 6px;
  color: #000000;
  padding: 12px 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  box-shadow: 0 6px 0 #5e5e5e, inset 0 1px 2px rgba(63, 63, 63, 0.3);

  &:active {
    background: #e1b91e;
    border-color: #d0a10d;
    box-shadow: 0 2px 0 #d0a10d, inset 0 1px 2px rgba(66, 66, 66, 0.5);
    transform: translateY(2px);
  }
`;

const UploadedImage = styled.img`
  margin: 20px 0;
  max-width: 100%;
  border-radius: 6px;
`;

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
    <AppBarContainer>
      <Link to="/" className="logo-link">
        <Logo src={logo} alt="Logo" />
      </Link>
      <AppBarContent>
        {location.pathname === '/community' ? (
          <>
            {isSmallScreen ? (
              <>
                <SearchIcon icon={faSearch} onClick={toggleSearch} />
                <BurgerMenu icon={faBars} onClick={toggleMenu} />
                <SearchBarSmall className={showSearch ? 'show' : ''} ref={searchBarRef}>
                  <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </SearchBarSmall>
                <BurgerMenuContent className={showMenu ? 'show' : ''}>
                  <Link to="/community" onClick={() => setShowMenu(false)}>Community</Link>
                  <Link to="/user" onClick={() => setShowMenu(false)}>Users</Link>
                </BurgerMenuContent>
              </>
            ) : (
              <SearchBarContainer>
                <SearchIcon icon={faSearch} />
                <SearchInput
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </SearchBarContainer>
            )}
          </>
        ) : (
          <>
            {!isSmallScreen && window.innerWidth >= 1300 && location.pathname !== '/' && (
              <SearchBarContainer>
                <SearchIcon icon={faSearch} />
                <SearchInput
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </SearchBarContainer>
            )}
            {!isSmallScreen && window.innerWidth >= 1300 && location.pathname === '/community' && (
              <UserButton to="/user">Users</UserButton>
            )}
            {!isSmallScreen && window.innerWidth >= 1300 && location.pathname !== '/community' && (
              <RetroKey to="/community">Community</RetroKey>
            )}
            {isSmallScreen && (
              <>
                {location.pathname !== '/' && (
                  <SearchIcon icon={faSearch} onClick={toggleSearch} />
                )}
                <BurgerMenu icon={faBars} onClick={toggleMenu} />
                <SearchBarSmall className={showSearch ? 'show' : ''} ref={searchBarRef}>
                  <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </SearchBarSmall>
                <BurgerMenuContent className={showMenu ? 'show' : ''}>
                  <Link to="/community" onClick={() => setShowMenu(false)}>Community</Link>
                  <Link to="/user" onClick={() => setShowMenu(false)}>Users</Link>
                </BurgerMenuContent>
              </>
            )}
          </>
        )}
        <ProfileButton onClick={toggleModal}>
          {profilePicture ? (
            <ProfilePicture src={profilePicture} alt="Profile" />
          ) : (
            <ProfileIcon icon={faUserCircle} />
          )}
        </ProfileButton>
      </AppBarContent>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={toggleModal}>&times;</CloseButton>
            <ModalTitle>Profile Options</ModalTitle>
            <ModalForm onSubmit={handleEnterDID}>
              <ModalLabel>
                Enter DID:
                <ModalInput type="text" name="dlDID" defaultValue={did} />
              </ModalLabel>
              <RetroButton type="submit">Save DID</RetroButton>
            </ModalForm>
            <div className="button-group">
              <RetroButton onClick={handleGenerateDID}>Generate DID</RetroButton>
              <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </AppBarContainer>
  );
};

export default AppBar;
