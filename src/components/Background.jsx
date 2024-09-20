import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the grid animation
const gridAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

// Keyframes for continuous upward particle animation
const particleAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100vh); /* Move up by the full viewport height */
    opacity: 0.5;
  }
`;

// Styled-component for the background
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  position: fixed; // Use fixed positioning
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1; // Ensure the background is behind everything

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 255, 0, 0.2) 1px,
      transparent 1px,
      transparent 2px
    ),
    linear-gradient(
      90deg,
      rgba(0, 255, 0, 0.2) 1px,
      transparent 1px,
      transparent 2px
    );
    background-size: 40px 40px;
    animation: ${gridAnimation} 10s linear infinite;
    z-index: 2; // Ensure the grid is above the particles
  }
`;

// Styled-component for particles
const Particle = styled.div`
  position: absolute;
  width: 6px;  // Smaller size
  height: 6px; // Smaller size
  background-color: rgba(0, 128, 0, 0.8); /* Darker green color */
  border-radius: 50%;
  animation: ${particleAnimation} 10s linear infinite;
  top: ${props => `${props.top}vh`};
  left: ${props => `${props.left}vw`};
  z-index: 1; // Ensure particles are below the grid
`;

const generateRandomPosition = () => ({
  top: Math.random() * 100,
  left: Math.random() * 100
});

const BackgroundComponent = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prevParticles => [
        ...prevParticles,
        generateRandomPosition()
      ]);
    }, 100); // Add new particles every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      {particles.map((particle, index) => (
        <Particle 
          key={index}
          top={particle.top}
          left={particle.left}
        />
      ))}
    </Background>
  );
};

export default BackgroundComponent;
