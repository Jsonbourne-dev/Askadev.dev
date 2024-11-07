import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Arrowup from '../assets/arrowup.png';
import Arrowdown from '../assets/arrowdown.png';
import SelectedArrowUp from '../assets/selectedarrowup.png';
import SelectedArrowDown from '../assets/selectedarrowdown.png';

const theme = {
  colors: {
    primary: '#BEE239',
    white: '#FFFFFF',
    darkGrey: '#555555',
  },
};

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  width: 50px;
  height: 230px;
  border-radius: 10px;
`;

const ArrowImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 0;
  cursor: pointer;
`;

const OutlinedBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${({ isActive }) => (isActive ? theme.colors.white : theme.colors.darkGrey)};
  border-radius: 10px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-size: 30px;
`;

function VoteChanger({ initialVotes = 0, setVotes, voteId, isUpArrowSelected = false, isDownArrowSelected = false }) {
  const [votes, setLocalVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState(0);
  
  useEffect(() => {
    if (isUpArrowSelected) {
      setUserVote(1);
    } else if (isDownArrowSelected) {
      setUserVote(-1);
    }
  }, [isUpArrowSelected, isDownArrowSelected]);

  useEffect(() => {
    setVotes(votes);
  }, [votes, setVotes]);

  const handleVote = (voteType) => {
    if (userVote === voteType) {
      return; // Ignore if the user already voted in this direction
    }

    let newVoteCount = votes;

    // Update vote count based on the user's current vote
    if (voteType === 1) {
      newVoteCount = userVote === -1 ? newVoteCount + 2 : newVoteCount + 1;
    } else if (voteType === -1) {
      newVoteCount = userVote === 1 ? newVoteCount - 2 : newVoteCount - 1;
    }

    setLocalVotes(newVoteCount);
    setUserVote(voteType);

    // Dispatch the vote update logic
    const voteSubmission = {
      id: voteId,
      voteType,
      count: newVoteCount,
    };

    // You can handle the submission here or in the parent component
    console.log("Vote submitted:", voteSubmission); // Replace this with actual dispatch logic
  };

  return (
    <VoteContainer>
      <ArrowImage 
        src={userVote === 1 ? SelectedArrowUp : Arrowup} 
        alt="Arrow Up" 
        onClick={() => handleVote(1)} 
      />
      <OutlinedBox isActive={userVote !== 0}>{votes}</OutlinedBox>
      <ArrowImage 
        src={userVote === -1 ? SelectedArrowDown : Arrowdown} 
        alt="Arrow Down" 
        onClick={() => handleVote(-1)} 
      />
    </VoteContainer>
  );
}

export default VoteChanger;
