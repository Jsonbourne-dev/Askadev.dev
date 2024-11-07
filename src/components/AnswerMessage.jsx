import React, { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlinedHeart } from '@fortawesome/free-regular-svg-icons';
import VoteChanger from './votechanger';
import { SpacerLine } from '../styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    padding: 20px;
    padding-left: 50px;
    box-sizing: border-box;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding-left: 20px; 
    padding-right: 30px; 
    justify-content: center; 
    flex-grow: 1;
`;

const Message = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.whiteText};
    margin: ${({ theme }) => theme.gaps.desktop.medium} 0;
    font-weight: ${({ theme }) => theme.fontWeights.small};
    font-size: ${({ theme }) => theme.fontSizes.desktop.medium}; 
    text-align: left;
`;

const AskedText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.desktop.small}; 
    color: ${({ theme }) => theme.colors.whiteText}; 
`;

const TimeText = styled.span`
    font-family: ${({ theme }) => theme.fonts.thin};
    margin-left: ${({ theme }) => theme.gaps.desktop.small};
    font-weight: ${({ theme }) => theme.fontWeights.normal}; 
    color: ${({ theme }) => theme.colors.whiteText}; 
`;

const UserBox = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    margin-top: ${({ theme }) => theme.gaps.desktop.small};
    padding: ${({ theme }) => theme.gaps.desktop.small} 0; 
    width: 100%;
    gap: 10px;
`;

const Box = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 8px 15px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => theme.fontSizes.desktop.small};
    font-weight: 800;
    text-align: left; 
`;

const ReactionStats = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.whiteText};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

const ReactionText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.desktop.small};
`;

const ReactionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.heartRed};
    
    & > svg {
        font-size: 1.5em;
    }

    & > span {
        margin-left: 5px;
        font-family: ${({ theme }) => theme.fonts.regular};
    }
`;

const AnsweredMessage = ({ 
    message = "This is a long default message that is displayed below the spacer line.", 
    answer, // Pass the answer object
    user = "User", 
    votes, 
    setVotes 
}) => {
    const [likeCount, setLikeCount] = useState(0);
    const [isHearted, setIsHearted] = useState(false);
    const [timeAgo, setTimeAgo] = useState('');
    const theme = useContext(ThemeContext); // Get the theme from context

    const toggleHeart = () => {
        setIsHearted(!isHearted);
        setLikeCount(isHearted ? likeCount - 1 : likeCount + 1);
    };

    useEffect(() => {
        if (!answer || !answer.createdAt) {
            setTimeAgo("Error: Answer data is missing.");
            return; // Early exit if answer is missing
        }

        const messageDate = new Date(answer.createdAt); 
        const currentTime = new Date(); 
        const timeDifference = currentTime - messageDate; 

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); 

        if (days > 0) {
            setTimeAgo(`${days} day${days > 1 ? 's' : ''} ${hours} hour${hours > 1 ? 's' : ''} ago`);
        } else if (hours > 0) {
            setTimeAgo(`${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''} ago`);
        } else {
            setTimeAgo(`${minutes} minute${minutes > 1 ? 's' : ''} ago`);
        }
    }, [answer]);

    return (
        <>
            <Container>
                <VoteChanger initialVotes={votes} setVotes={setVotes} voteId={answer.uuid} /> 

                <InnerContainer>
                    <Message>{message}</Message>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AskedText>Answered:</AskedText>
                        <TimeText>{timeAgo}</TimeText>
                    </div>

                    <UserBox>
                        <Box>{user}</Box>
                        <ReactionStats>
                            <ReactionText>Votes: {votes}</ReactionText>
                            <ReactionText>Likes: {likeCount}</ReactionText>
                        </ReactionStats>
                    </UserBox>

                    <ReactionContainer>
                        <IconContainer onClick={toggleHeart} isActive={isHearted}>
                            <FontAwesomeIcon icon={isHearted ? filledHeart : outlinedHeart} />
                        </IconContainer>
                    </ReactionContainer>
                </InnerContainer>
            </Container>

            <SpacerLine />
        </>
    );
};

AnsweredMessage.propTypes = {
    message: PropTypes.string,
    answer: PropTypes.shape({
        createdAt: PropTypes.string.isRequired,
        answerMessage: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
        uuid: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.string,
    votes: PropTypes.number.isRequired,
    setVotes: PropTypes.func.isRequired,
};

export default AnsweredMessage;
