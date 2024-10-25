import React, { useState } from "react";
import { useDispatch } from "react-redux"; 
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { setUser } from '../redux/actions/userActions'; 
import { InputField } from "../styled-components"; 
import StyledButton from '../styled-components/button'; 
import SignInLeftSection from '../components/SignInLeftSection';
import Logo from '../assets/logo-green.svg'; 
import { auth, provider } from '../firebase/firebase'; 
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import GoogleLogo from '../assets/googlelogo.png'; 

const Body = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  position: relative;
  width: 100vw;
  font-family: 'Space Grotesk', sans-serif; 
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

const UserAuthSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const GoogleSignInButton = styled.button`
  background-color: #f4f4f4; /* Whitish-grey background */
  color: black; /* Black text */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 15px; /* Padding for button */
  display: flex; /* Flex display to align items */
  align-items: center; /* Center align items vertically */
  cursor: pointer; /* Pointer cursor on hover */
  width: 100%; /* Full width of the container */
  margin-top: 10px; /* Spacing above the button */
  font-size: 16px; /* Adjust font size as needed */

  &:hover {
    background-color: #e0e0e0; /* Slightly darker on hover */
  }
`;

const GoogleLogoImage = styled.img`
  width: 20px; /* Logo width */
  margin-right: 10px; /* Space between logo and text */
`;

const SignUp = () => {
  const dispatch = useDispatch(); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false); 

  const handleCreateAccount = async () => {
    if (username.length > 10) {
      setErrorMessage("Username must not exceed 10 characters.");
      return;
    }
    if (/\s/.test(username)) {
      setErrorMessage("Username must not contain spaces.");
      return;
    }

    if (!username || !email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Check for password length
    if (password.length < 10) {
      setErrorMessage("Password must be at least 10 characters long.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Dispatch user creation action
      dispatch(setUser(username, user.email, password, user.uid)); 
      setIsAccountCreated(true);
      console.log("Account created:", username, user.email);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const username = user.displayName.split(' ')[0]; // Get first name as username

      // Dispatch user creation action
      dispatch(setUser(username, user.email, "", user.uid)); 
      console.log("Signed in with Google:", username, user.email);

      window.location.href = '/#/community'; 
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Dispatch user login action
      dispatch(setUser(user.displayName, user.email, "", user.uid)); 
      console.log("Signed in with email:", user.email);

      window.location.href = '/#/community'; 
    } catch (error) {
      setErrorMessage(error.message);
    }
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
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                <StyledButton variant="desktop-filled" onClick={handleEmailSignIn}>
                  Sign In
                </StyledButton>
                <Spacer />
                <GoogleSignInButton onClick={handleGoogleSignIn}>
                  <GoogleLogoImage src={GoogleLogo} alt="Google logo" />
                  Sign In with Google
                </GoogleSignInButton>
                <Spacer />
                <SwitchLink onClick={() => setIsSignIn(false)}>Create an account</SwitchLink>
              </InputContainer>
            </>
          ) : (
            <>
              {isAccountCreated ? (
                <>
                  <p style={{ color: "#ff0000", textAlign: "center" }}>
                    Account created successfully! You can now log in.
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
                  <UserAuthSection>
                    <InputContainer>
                      <InputField
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                      <StyledButton variant="desktop-filled" onClick={handleCreateAccount}>
                        Create Account
                      </StyledButton>
                      <Spacer />
                      <GoogleSignInButton onClick={handleGoogleSignIn}>
                        <GoogleLogoImage src={GoogleLogo} alt="Google logo" />
                        Sign In with Google
                      </GoogleSignInButton>
                      <Spacer />
                      <SwitchLink onClick={() => setIsSignIn(true)}>Log in</SwitchLink>
                    </InputContainer>
                  </UserAuthSection>
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
