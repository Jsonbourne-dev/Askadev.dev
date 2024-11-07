import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SpacerLine from '../styled-components/SpacerLine'; // Adjust the import path as necessary

// Theme definition
const theme = {
    fontSizes: {
        desktop: {
            xlarge: '36px',
            large: '20px',
            medium: '24px',
            small: '20px',
            xsmall: '14px',
            xxsmall: '7px',
        },
    },
    gaps: {
        desktop: {
            large: '20px',
            medium: '15px',
            small: '10px',
            xxsmall: '5px',
        },
    },
    fontWeights: {
        bold: '700',
        normal: '400',
        thick: '800',
        small: '200',  // Small weight defined here
    },
    fonts: {
        thin: "'Roboto Thin', sans-serif",
        regular: "'Roboto', sans-serif",
        bold: "'Roboto Bold', sans-serif",
        extraBold: "'Roboto ExtraBold', sans-serif",
    },
    colors: {
        primary: '#BEE239',
        text: 'black',
        whiteText: 'white',
        spacerLine: '#b2b3b3',
        bottomSpacerLine: '#BEE239',
    },
};

// Styled components for the message and time
const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    width: 100%;  // Set container to full width
`;

const InnerContainer = styled.div`
    padding: 0 50px;  // Set padding of 50px on left and right
    display: flex;
    flex-direction: column;
    align-items: flex-start; // Align items to the left
`;

const Message = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.whiteText}; // Set text color to white
    margin: ${({ theme }) => theme.gaps.desktop.medium} 0;
    font-weight: ${({ theme }) => theme.fontWeights.small}; // Set font weight to small
`;

const AskedText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const TimeText = styled.span`
    font-family: ${({ theme }) => theme.fonts.thin};
    margin-left: ${({ theme }) => theme.gaps.desktop.small};
    font-weight: ${({ theme }) => theme.fontWeights.small}; // Set font weight to small
`;

const UserBox = styled.div`
    display: flex;
    justify-content: flex-start; // Align items to the left
    align-items: center;
    margin-top: ${({ theme }) => theme.gaps.desktop.small}; // Add margin for spacing from the above text
    padding: ${({ theme }) => theme.gaps.desktop.small};
    width: 100%; // Ensure it takes the full width
    margin-left: -11px; // Shift the UserBox slightly to the left by 10px
`;

const Box = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 8px 15px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => theme.fontSizes.desktop.small};
    font-weight: 800;
`;

const Test = ({ message = "This is a long default message that is displayed below the spacer line.", time = 10, user = "User" }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <SpacerLine fullWidth={false} />

                <InnerContainer>
                    <Message>{message}</Message>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AskedText>Answered:</AskedText>
                        <TimeText>{time} minutes ago</TimeText>
                    </div>

                    {/* UserBox aligned directly beneath the text */}
                    <UserBox>
                        <Box>{user}</Box>
                    </UserBox>
                </InnerContainer>
            </Container>
        </ThemeProvider>
    );
};

export default Test;
