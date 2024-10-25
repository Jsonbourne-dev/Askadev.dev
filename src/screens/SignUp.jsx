import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid'; 
import { Link } from "react-router-dom"; 
import { setUser, signInWithToken } from '../redux/actions/userActions'; 
import { InputField } from "../styled-components"; 
import StyledButton from '../styled-components/button'; 
import { FiCopy } from 'react-icons/fi'; 
import SignInLeftSection from '../components/SignInLeftSection';
import Logo from '../assets/logo-green.svg'; 

const Body = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  position: relative;
  width: 100vw;
  font-family: 'Space Grotesk', sans-serif; 

  @media (max-width: 1400px) {
    justify-content: center;
  }
`;

const LeftHalf = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  display: flex;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const RightHalf = styled.div`
  background-color: #11141A;
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0;
  display: flex; 
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    width: 100%; 
    position: static; 
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 0 10px; 
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  
  @media (min-width: 1400px) {
    display: none; 
  }
`;

const LogoImage = styled.img`
  width: 120px; 
  cursor: pointer;
`;

const FormTitle = styled.h3`
  color: #fff;
  margin-bottom: 20px;
  font-size: 32px;
`;

const TokenTitle = styled.h3`
  color: #fff;
  margin-bottom: 40px;
  font-size: 40px;
  text-align: center;  
  width: 900px;
`;

const Spacer = styled.div`
  height: 20px;
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 400px; 
  display: flex;
  flex-direction: column;
  padding: 0 10px; 
`;

const TokenContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const TokenInput = styled.input`
  border: none;
  background: transparent;
  color: #000;
  font-size: 16px;
  width: 100%;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

const CopyIcon = styled(FiCopy)`
  cursor: pointer;
  color: #000;
`;

const CopiedMessage = styled.span`
  color: green;
  margin-left: 10px;
  font-size: 14px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

const ContinueButtonContainer = styled.div`
  display: flex;            
  justify-content: center; 
  width: 100%;             
  margin-top: 20px;       
  flex-direction: column; 
  align-items: center;     
`;

const SwitchLink = styled.p`
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline;
  text-align: center; 
`;

const SignUp = () => {
  const dispatch = useDispatch(); 
  const storedUser = useSelector(state => state.user); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [token, setToken] = useState("");
  const [isCopied, setIsCopied] = useState(false); 
  const [isSignIn, setIsSignIn] = useState(false); 

  const handleCreateAccount = () => {
    if (username.length > 10) {
      setErrorMessage("Username must not exceed 10 characters.");
      return;
    }
    if (/\s/.test(username)) {
      setErrorMessage("Username must not contain spaces.");
      return;
    }

    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const newToken = uuidv4();
    setToken(newToken);

    dispatch(setUser(username, email, password, newToken)); 

    console.log("Creating account with:", username, email, password);
    setIsAccountCreated(true);
  };

  const handleCopyToken = () => {
    navigator.clipboard.writeText(token);
    setIsCopied(true); 

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleSignIn = () => {
    if (!storedUser || storedUser.username !== username || storedUser.token !== token) {
      setErrorMessage("Account not found. Please check your username and token.");
      return;
    }

    dispatch(signInWithToken(username, token));

    console.log("Signing in with:", username, token);
    
    window.location.href = '/#/community'; 
  };

  return (
    <Body>
      <LeftHalf>
        <SignInLeftSection />
      </LeftHalf>
      <RightHalf>
        <LogoContainer>
          <a href="/">
            <LogoImage src={Logo} alt="Logo" />
          </a>
        </LogoContainer>
        <RightContent>
          {isSignIn ? (
            <>
              <FormTitle>Sign In</FormTitle>
              <InputContainer>
                <InputField
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Spacer />
                <InputField
                  type="text"
                  placeholder="Access Token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <Spacer />
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                <StyledButton variant="desktop-filled" onClick={handleSignIn}>
                  Sign In
                </StyledButton>
                <SwitchLink onClick={() => setIsSignIn(false)}>Create an account</SwitchLink>
              </InputContainer>
            </>
          ) : (
            <>
              {isAccountCreated ? (
                <>
                  <TokenTitle>Your Token of Authentication.</TokenTitle>
                  <TokenContainer>
                    <TokenInput value={token} readOnly />
                    <CopyIcon onClick={handleCopyToken} />
                    {isCopied && <CopiedMessage>Copied!</CopiedMessage>}
                  </TokenContainer>
                  <p style={{ color: "#ff0000", textAlign: "center" }}>
                    This is your token. Don't lose it, or you'll lose access to your data.
                  </p>
                  <ContinueButtonContainer>
                    <Link to="/#/community" style={{ textDecoration: 'none' }}>
                      <StyledButton variant="desktop-filled">
                        Continue
                      </StyledButton>
                    </Link>
                  </ContinueButtonContainer>
                </>
              ) : (
                <>
                  <FormTitle>Sign Up</FormTitle>
                  <InputContainer>
                    <InputField
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        const newUsername = e.target.value;
                        setUsername(newUsername);

                        
                        if (newUsername.length > 10) {
                          setErrorMessage("Username must not exceed 10 characters.");
                        } else if (/\s/.test(newUsername)) {
                          setErrorMessage("Username must not contain spaces.");
                        } else {
                          setErrorMessage(""); 
                        }
                      }}
                    />
                    <Spacer />
                    <InputField
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Spacer />
                    <InputField
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Spacer />
                    <InputField
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Spacer />
                    {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                    <StyledButton variant="desktop-filled" onClick={handleCreateAccount}>
                      Create Account
                    </StyledButton>
                    <SwitchLink onClick={() => setIsSignIn(true)}>Log in</SwitchLink>
                  </InputContainer>
                </>
              )}
            </>
          )}
        </RightContent>
      </RightHalf>
    </Body>
  );
};

export default SignUp;
