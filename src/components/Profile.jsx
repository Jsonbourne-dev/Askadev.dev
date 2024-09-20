import React, { useState } from 'react';
import { Button, Text, Wrapper } from '../styled-components'; 

const Profile = ({ DID, handleGenerateDID, handleEnterDID, handleProfilePictureUpload, onClose }) => {
    const [localDID, setLocalDID] = useState(DID);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleEnterDID) {
            handleEnterDID(localDID);
        }
    };

    return (
        <Wrapper
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgColor="rgba(0, 0, 0, 0.9)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex="1002"
        >
            <Wrapper
                bgColor="#1b1b1b"
                padding="40px"
                borderRadius="20px"
                width="600px"
                boxShadow="0 8px 30px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems="center"
                color="#fff"
            >
                <Button onClick={onClose} style={{ alignSelf: 'flex-end', padding: '10px', fontSize: '24px' }}>
                    X
                </Button>
                <Text variant="title" color="#00b4d8" margin="0 0 30px">
                    Profile Options
                </Text>
                <form onSubmit={handleSubmit} style={{ width: '100%', marginBottom: '30px' }}>
                    <label style={{ marginBottom: '12px', color: '#f1c40f', fontSize: '18px', fontWeight: 600, width: '100%' }}>
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
                                transition: 'border-color 0.3s',
                                outline: 'none',
                                borderColor: localDID ? '#00b4d8' : '#333'
                            }}
                        />
                    </label>
                    <Button type="submit">Save DID</Button>
                </form>
                <Wrapper
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    gap="15px"
                    marginTop="20px"
                >
                    <Button onClick={handleGenerateDID}>Generate DID</Button>
                    <Button as="label" style={{ cursor: 'pointer' }}>
                        Upload Profile Picture
                        <input type="file" accept="image/*" onChange={handleProfilePictureUpload} style={{ display: 'none' }} />
                    </Button>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};

export default Profile;
