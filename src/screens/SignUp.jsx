import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setUser } from '../redux/actions/userActions';
import { InputField } from "../styled-components";
import StyledButton from '../styled-components/button';
import SignInLeftSection from '../components/SignInLeftSection';
import Logo from '../assets/logo-green.svg';
import { auth, googleProvider, githubProvider } from '../firebase/firebase'; 
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogo from '../assets/googlelogo.png';
import GitHubLogo from '../assets/githublogo.png';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique IDs

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

const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isGitHub }) => (isGitHub ? '#333' : '#f4f4f4')};
  color: ${({ isGitHub }) => (isGitHub ? 'white' : 'black')};
  border: none;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  margin-top: 10px; 
  margin-right: ${({ isSignUp }) => (isSignUp ? '-20px' : '0')}; 
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isGitHub }) => (isGitHub ? '#444' : '#e0e0e0')};
  }
`;

const LogoImageWrapper = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const GitHubErrorText = styled.p`
  color: yellow; 
  font-size: 14px;
  text-align: center;
`;

const ForgotPasswordContainer = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center; 
  margin-top: 10px; // Adjust the spacing as needed
`;

const SignUp = () => {
  const dispatch = useDispatch(); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false); 
  const [githubErrorMessage, setGithubErrorMessage] = useState("");

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

    if (password.length < 10) {
      setErrorMessage("Password must be at least 10 characters long.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Generate a unique user ID (UUID) for the new user
      const userId = uuidv4();

      // Dispatch the action with the UUID
      dispatch(setUser(username, user.email, password, user.uid, userId)); // passing the UUID to setUser

      setIsAccountCreated(true);
      console.log("Account created:", username, user.email, userId); // Log the UUID as well
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const username = user.displayName.split(' ')[0];
      const userId = uuidv4();  // Generate UUID for Google user
      dispatch(setUser(username, user.email, "", user.uid, userId)); 
      console.log("Account created with Google:", username, user.email, userId);

      window.location.href = '/#/community'; 
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGitHubSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;

      const username = user.displayName.split(' ')[0];
      const userId = uuidv4();  // Generate UUID for GitHub user
      dispatch(setUser(username, user.email, "", user.uid, userId)); 
      console.log("Account created with GitHub:", username, user.email, userId);

      window.location.href = '/#/community'; 
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userId = uuidv4();  // Generate UUID for email login user
      dispatch(setUser(user.displayName, user.email, "", user.uid, userId)); 
      console.log("Signed in with email:", user.email, userId);

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
                <InputField
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                <StyledButton variant="desktop-filled" onClick={handleEmailSignIn}>
                  Sign In
                </StyledButton>
                <Spacer />
                <ForgotPasswordContainer>
                  <Link to="/#/forgotpassword" style={{ color: '#fff', textDecoration: 'underline' }}>
                    Forgot Password?
                  </Link>
                </ForgotPasswordContainer>
                <Spacer />
                <SwitchLink onClick={() => setIsSignIn(false)}>
                  Don't have an account? Sign up.
                </SwitchLink>
                <ContinueButtonContainer>
                  <SignInButton onClick={handleGoogleSignUp}>
                    <LogoImageWrapper src={GoogleLogo} alt="Google logo" />
                    Sign up with Google
                  </SignInButton>
                  <SignInButton isGitHub onClick={handleGitHubSignUp}>
                    <LogoImageWrapper src={GitHubLogo} alt="GitHub logo" />
                    Sign up with GitHub
                  </SignInButton>
                </ContinueButtonContainer>
              </InputContainer>
            </>
          ) : (
            <>
              <FormTitle>Create Account</FormTitle>
              <InputContainer>
                <InputField
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                <StyledButton variant="desktop-filled" onClick={handleCreateAccount}>
                  Create Account
                </StyledButton>
                <Spacer />
                <SwitchLink onClick={() => setIsSignIn(true)}>
                  Already have an account? Sign in.
                </SwitchLink>
                <ContinueButtonContainer>
                  <SignInButton onClick={handleGoogleSignUp}>
                    <LogoImageWrapper src={GoogleLogo} alt="Google logo" />
                    Sign up with Google
                  </SignInButton>
                  <SignInButton isGitHub onClick={handleGitHubSignUp}>
                    <LogoImageWrapper src={GitHubLogo} alt="GitHub logo" />
                    Sign up with GitHub
                  </SignInButton>
                </ContinueButtonContainer>
              </InputContainer>
            </>
          )}
        </RightContent>
      </RightHalf>
    </Body>
  );
};

export default SignUp;
