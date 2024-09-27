import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../components/AppBar.jsx';
import { Theme, Container, Text, Button } from '../styled-components';
import Footer from '../components/Footer.jsx';

const Profile = ({ DID, handleGenerateDID, handleEnterDID }) => {
    const [localDID, setLocalDID] = useState(DID);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleEnterDID) {
            handleEnterDID(localDID);
        }
    };

    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            </Helmet>
            <Theme>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <div style={{ width: '100%', paddingBottom: '20px', position: 'relative', zIndex: 10 }}>
                        <AppBar width="100%" />
                    </div>

                    <Container
                        width="100%"
                        height="calc(100vh - 100px)" // Adjust height for AppBar and Footer
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        padding="40px"
                        hasBorder={false} // Disable all borders, including the top border
                        borderTop="none" // Ensure no top border
                    >
                        <Text variant="title" color="#00b4d8" margin="0 0 30px" fontSize="28px">
                            Profile Options
                        </Text>
                        <form onSubmit={handleSubmit} style={{ width: '300px', marginBottom: '30px' }}>
                            <label style={{ 
                                marginBottom: '12px', 
                                color: '#f1c40f', 
                                fontSize: '18px', 
                                fontWeight: 600, 
                                display: 'block' 
                            }}>
                                <Text variant="small" color="#f1c40f">
                                    Enter DID:
                                </Text>
                                <input
                                    type="text"
                                    value={localDID}
                                    onChange={(e) => setLocalDID(e.target.value)}
                                    style={{
                                        padding: '15px',
                                        border: '2px solid #333',
                                        borderRadius: '10px',
                                        fontSize: '18px',
                                        width: '100%',
                                        marginBottom: '20px',
                                        background: '#2e2e2e',
                                        color: '#fff',
                                        outline: 'none',
                                        borderColor: localDID ? '#00b4d8' : '#333',
                                    }}
                                />
                            </label>
                            <Button type="submit">Save DID</Button>
                        </form>
                        <Container
                            display="flex"
                            flexDirection="column"
                            width="300px"
                            gap="15px"
                            marginTop="20px"
                            hasBorder={false} // Disable borders for this container as well
                        >
                            <Button onClick={handleGenerateDID}>Generate DID</Button>
                        </Container>
                    </Container>

                    <Footer style={{ marginTop: 'auto' }} />
                </div>
            </Theme>
        </>
    );
};

export default Profile;
