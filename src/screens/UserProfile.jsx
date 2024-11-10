import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import AppBar from '../components/Topappbar';
import { FaEdit } from 'react-icons/fa';
import { setProfilePicture, updateUsername } from '../redux/actions/userActions';
import defaultProfilePic1 from '../assets/greenlogo.png';
import defaultProfilePic2 from '../assets/plantpfp.webp';
import { InputField } from "../styled-components"; 
import { updateProfile } from "firebase/auth"; 
import { auth } from "../firebase/firebase"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; 

function UserProfile() {
    const user = useSelector((state) => state.user);
    const questions = useSelector((state) => state.questions.questions);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsernameState] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userQuestions, setUserQuestions] = useState([]);
    const [currentProfilePic, setCurrentProfilePic] = useState('');
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [isEditingUsername, setIsEditingUsername] = useState(false); 

    const fileInputRef = useRef(null);
    const modalRef = useRef(null);

    const defaultProfilePics = [defaultProfilePic1, defaultProfilePic2]; 

    const getRandomProfilePic = () => {
        const randomIndex = Math.floor(Math.random() * defaultProfilePics.length);
        return defaultProfilePics[randomIndex];
    };

    useEffect(() => {
        if (user) {
            setUsernameState(user.username);
            setEmail(user.email);
            setToken(user.token);
            setIsSignedIn(user.isSignedIn);
            
            const filteredQuestions = questions.filter(q => q.userUuid === user.userUuid);
            setUserQuestions(filteredQuestions);

            if (!user.profilePic) {
                setCurrentProfilePic(getRandomProfilePic());
            } else {
                setCurrentProfilePic(user.profilePic);
            }
        }
    }, [user, questions]);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const storage = getStorage();
            const userId = auth.currentUser?.uid;
            if (userId) {
                const storageRef = ref(storage, `profile_pics/${userId}.jpg`);

                uploadBytes(storageRef, file).then(async (snapshot) => {
                    const downloadURL = await getDownloadURL(storageRef);
                    
                    await updateProfile(auth.currentUser, { photoURL: downloadURL });

                    setCurrentProfilePic(downloadURL);
                    dispatch(setProfilePicture(downloadURL));
                }).catch((error) => {
                    console.error('Error uploading profile picture:', error);
                });
            }
        }
    };

    const handleProfilePicClick = () => {
        fileInputRef.current.click(); 
    };

    const handleSignOut = () => {
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
        navigate("/signup");
    };

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
        if (!isOverlayVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const handleUsernameChange = (e) => {
        setUsernameState(e.target.value);
    };

    const handleUsernameSave = async () => {
        try {
            dispatch(updateUsername(username));
            setIsEditingUsername(false);

            const currentUser = auth.currentUser;
            if (currentUser) {
                await updateProfile(currentUser, { displayName: username });
                console.log("Firebase username updated successfully:", username);
            }

            userQuestions.forEach(async (question) => {
                const updatedQuestion = { ...question, username };
                try {
                    console.log(updatedQuestion);
                    await fetch('http://localhost:5000/api/questions', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedQuestion),
                    });
                } catch (error) {
                    console.error('Error updating question username:', error);
                }
            });
        } catch (error) {
            console.error("Error updating username in Firebase:", error);
        }
    };
    
    const handleUsernameEditClick = () => {
        setIsEditingUsername(true); 
    };

    const handleUsernameEnter = (e) => {
        if (e.key === 'Enter') {
            handleUsernameSave(); 
        }
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsEditingUsername(false); 
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div style={styles.container}>
            <AppBar />
            {isOverlayVisible && <div style={styles.overlay} onClick={toggleOverlay}></div>}

            <div style={styles.profileContainer}>
                <div style={styles.userInfo}>
                    <h2 style={styles.title}>User Profile</h2>
                    
                    <div style={styles.profilePicContainer} onClick={handleProfilePicClick}>
                        <img src={currentProfilePic} alt="Profile" style={styles.profilePic} />
                        <FaEdit style={styles.editIcon} />
                    </div>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleProfilePicChange} 
                        ref={fileInputRef} 
                        hidden
                    />
                    
                    <div style={styles.usernameContainer}>
                        <p style={styles.info}><strong>Username:</strong></p>
                        <div style={styles.usernameDisplayContainer}>
                            <span style={styles.usernameText}>{username}</span>
                            <FaEdit 
                                style={styles.usernameEditIcon} 
                                onClick={handleUsernameEditClick}
                            />
                        </div>
                        
                        {isEditingUsername && (
                            <div ref={modalRef} style={styles.modal}>
                                <InputField 
                                    type="text" 
                                    value={username} 
                                    onChange={handleUsernameChange} 
                                    placeholder="Enter new username"
                                    onKeyPress={handleUsernameEnter} 
                                    height="40px"
                                    hintFontSize="14px"
                                />
                                <button style={styles.saveButton} onClick={handleUsernameSave}>Save</button>
                            </div>
                        )}
                    </div>

                    <p style={styles.info}><strong>Email:</strong> {email}</p>
                    <p style={styles.info}><strong>Signed In:</strong> {isSignedIn ? "Yes" : "No"}</p>
                    
                    <button onClick={handleSignOut} style={styles.signOutButton}>Sign Out</button>
                </div>

                <div style={styles.questionsSection}>
                    <h3 style={styles.subtitle}>My Questions</h3>
                    {userQuestions.length > 0 ? (
                        <ul style={styles.questionsList}>
                            {userQuestions.map((question) => (
                                <li key={question.uuid} style={styles.questionItem}>
                                    <h4 style={styles.questionTitle}>{question.title}</h4>
                                    <p><strong>Subtitle:</strong> {question.subtitle}</p>
                                    <p><strong>Flags:</strong> {question.flags.join(', ')}</p>
                                    <p><strong>Views:</strong> {question.views}</p>
                                    <p><strong>Votes:</strong> {question.votes}</p>
                                    <p><strong>Created At:</strong> {new Date(question.createdAt).toLocaleString()}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={styles.noQuestionsText}>No questions created by this user.</p>
                    )}
                </div>
            </div>
            <div style={styles.footerSpacer} />
            <Footer />
        </div>
    );
}


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    },
    profileContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 40px",
        maxWidth: "1200px",
        margin: "40px auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#1e1e1e",
    },
    userInfo: {
        borderBottom: "1px solid rgba(190, 226, 57, 0.7)",
        paddingBottom: "20px",
        marginBottom: "20px",
        textAlign: "center",
        width: '100%',
    },
    title: {
        fontSize: "2em",
        marginBottom: "10px",
        color: "#bee239",
    },
    profilePicContainer: {
        position: 'relative',
        cursor: 'pointer',
        margin: "20px 0",
    },
    profilePic: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "3px solid #bee239",
    },
    editIcon: {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        fontSize: "20px",
        color: "#bee239",
        cursor: "pointer",
    },
    usernameContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0",
    },
    usernameDisplayContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "10px",
    },
    usernameText: {
        fontSize: "1.2em",
        color: "#fff",
        marginRight: "10px",
    },
    usernameEditIcon: {
        fontSize: "1.5em",
        color: "#bee239",
        cursor: "pointer",
    },
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        zIndex: 2000,
        width: "300px",
        textAlign: "center",
    },
    saveButton: {
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#bee239",
        color: "#1e1e1e",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1em",
    },
    info: {
        fontSize: "1.2em",
        color: "#fff",
    },
    footerSpacer: {
        flexGrow: 1,
    },
    signOutButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#bee239",
        color: "#1e1e1e",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1em",
    },
};

export default UserProfile;
