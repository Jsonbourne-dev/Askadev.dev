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


export const UserPipeProfileBox = styled.div`
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