import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FiClipboard } from 'react-icons/fi'; 
import { useNavigate } from "react-router-dom"; // Import useNavigate
import InputField from "../styled-components/InputField"; 
import AppBar from "../components/Topappbar";
import Footer from "../components/Footer";
import { Button } from "../styled-components"; 

const theme = {
    colors: {
        primary: '#bee239',
        text: '#333',
        clipboardBorder: '#ccc',
        copyMessage: '#bee239',
    },
    spacing: {
        small: '10px',
        medium: '20px',
    },
    borderRadius: '8px',
};

const Spacer = ({ height = '10px' }) => {
    return <div style={{ height }} />;
};

function MultiplayerConnect() {
    const [generatedUUID, setGeneratedUUID] = useState("");
    const [copyMessage, setCopyMessage] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const uuid = uuidv4();
        setGeneratedUUID(uuid);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedUUID);
        setCopyMessage("Copied!");
        setTimeout(() => {
            setCopyMessage("");
        }, 2000); 
    };

    const handleContinue = () => {
        navigate(`/multiplayer/${generatedUUID}`);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        }}>
            <AppBar /> 
            <div style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    border: `2px solid ${theme.colors.primary}`,
                    borderRadius: theme.borderRadius,
                    padding: theme.spacing.medium,
                    width: '400px', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}>
                    <h3>MultiplayerConnect Setup</h3>
                    <InputField 
                        placeholder="Enter Code..."
                        onEnter={(value) => console.log('Enter pressed:', value)} 
                        style={{ marginBottom: theme.spacing.medium }}
                    />
                    <Spacer height="10px" /> 
                    <div 
                        style={{
                            border: `1px solid ${theme.colors.clipboardBorder}`,
                            borderRadius: theme.borderRadius,
                            padding: '10px',
                            textAlign: 'center',
                            cursor: 'pointer', 
                            position: 'relative',
                            marginTop: theme.spacing.small,
                        }}
                        onClick={handleCopy}
                    >
                        <FiClipboard style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }} />
                        {generatedUUID}
                    </div>
                    {copyMessage && (
                        <div style={{ color: theme.colors.copyMessage, marginTop: '10px' }}>
                            {copyMessage}
                        </div>
                    )}
                    <Spacer height="30px" />
                    <Button 
                        variant="desktop-filled" 
                        width="100%" 
                        onClick={handleContinue}
                        style={{ marginTop: theme.spacing.medium }}
                    >
                        Continue
                    </Button>
                </div>
            </div>
            <Footer /> 
        </div>
    );
}

export default MultiplayerConnect;
