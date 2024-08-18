import React from 'react';
import styled, { keyframes } from 'styled-components';

const shootThrough = keyframes`
  0% {
    transform: translateX(-1000px) translateY(0);
    opacity: 0;
  }
  20% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  80% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) translateY(0);
    opacity: 0;
  }
`;

const UserPipContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 1300px;
  height: 40vh;
  max-height: 430px;
  background-color: #000000;
  border-top: 10px solid #fffb00;
  border-bottom: 10px solid #fffb00;
  border-left: 0;
  border-right: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-sizing: border-box;
  transition: width 0.3s, height 0.3s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: #000000;
    z-index: 2;
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    height: 30vh;
    max-height: 300px;
    border-top: 8px solid #fffb00;
    border-bottom: 8px solid #fffb00;

    &::before,
    &::after {
      width: 8px;
    }
  }

  @media (max-width: 600px) {
    width: 95vw;
    height: 20vh;
    max-height: 200px;
    border-top: 6px solid #fffb00;
    border-bottom: 6px solid #fffb00;

    &::before,
    &::after {
      width: 6px;
    }
  }
`;

const UserPipTitle = styled.h2`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  font-size: 2rem;
  text-align: center;
  z-index: 2;
  background-color: #000000;
  padding: 10px 0;
  top: -300px;

  @media (max-width: 1500px) {
    font-size: 2rem;
    top: -300px;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
    top: -250px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    top: -150px;
  }
`;

const UserProfileBox = styled.div`
  font-family: 'Press Start 2P', cursive;
  border: 4px solid #FFFF00;
  border-radius: 8px;
  padding: 1.5vw;
  margin: 1.5vw;
  box-shadow: 0 0 0 4px #333333;
  background-color: #000000;
  color: #00FFFF;
  position: relative;
  width: 300px;
  max-width: 250px;
  height: 300px;
  animation: ${shootThrough} 4s ease-in-out infinite;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: width 0.3s, height 0.3s;

  .profile-picture {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url('https://www.w3schools.com/w3images/avatar2.png');
    background-size: cover;
    background-position: center;
    margin-bottom: 15px;
  }

  .profile-name {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .profile-details {
    font-size: 0.9em;
    margin-bottom: 15px;
  }

  .profile-did {
    font-size: 0.8em;
    margin-bottom: 10px;
    border-top: 1px dashed #00FFFF;
    padding-top: 10px;
    width: 100%;
    text-align: center;
  }

  .profile-stats {
    font-size: 0.8em;

    .stats-item {
      color: #FFFF00;
    }
  }

  @media (max-width: 1000px) {
    width: 70vw;
    max-width: 180px;
    height: 70vw;
    max-height: 180px;
    padding: 1vw;
    margin: 1vw;

    .profile-picture {
      width: 40px;
      height: 40px;
      margin-bottom: 8px;
    }

    .profile-name {
      font-size: 0.8em;
      margin-bottom: 5px;
    }

    .profile-details {
      font-size: 0.6em;
      margin-bottom: 8px;
    }

    .profile-did {
      font-size: 0.5em;
      padding-top: 5px;
    }

    .profile-stats {
      font-size: 0.5em;

      .stats-item {
        color: #FFFF00;
      }
    }
  }

  @media (max-width: 600px) {
    width: 60vw;
    max-width: 150px;
    height: 60vw;
    max-height: 150px;
    padding: 0.8vw;
    margin: 0.8vw;

    .profile-picture {
      width: 30px;
      height: 30px;
      margin-bottom: 6px;
    }

    .profile-name {
      font-size: 0.6em;
      margin-bottom: 4px;
    }

    .profile-details {
      font-size: 0.5em;
      margin-bottom: 6px;
    }

    .profile-did {
      font-size: 0.4em;
      padding-top: 4px;
    }

    .profile-stats {
      font-size: 0.4em;

      .stats-item {
        color: #FFFF00;
      }
    }
  }
`;

const hardcodedUsers = [
  {
    name: "Alice",
    did: "did:example:123",
    questionsAnswered: 45,
    zaps: 10
  },
  {
    name: "Bob",
    did: "did:example:456",
    questionsAnswered: 78,
    zaps: 20
  },
  {
    name: "Charlie",
    did: "did:example:789",
    questionsAnswered: 12,
    zaps: 5
  }
];

const UserPip = () => (
  <div style={{ position: 'relative' }}>
    <UserPipTitle>New Users</UserPipTitle>
    <UserPipContainer>
      {hardcodedUsers.map((user, index) => (
        <UserProfileBox key={index}>
          <div className="profile-picture"></div>
          <div className="profile-name">{user.name}</div>
          <div className="profile-details">New User</div>
          <div className="profile-did">DID: {user.did}</div>
          <div className="profile-stats">
            <div className="stats-item">Questions Answered: <span className="stats-item">{user.questionsAnswered}</span></div>
            <div className="stats-item">Zaps: <span className="stats-item">{user.zaps}</span></div>
          </div>
        </UserProfileBox>
      ))}
    </UserPipContainer>
  </div>
);

export default UserPip;
