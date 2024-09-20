import React from 'react';
import styled, { css } from 'styled-components';

const RetroButton = styled.button`
  background: transparent;
  border: ${({ border }) => border || '2px solid #FFFF00'};
  color: ${({ color }) => color || '#00FFFF'};
  padding: ${({ padding }) => padding || '8px 16px'};
  font-family: ${({ fontFamily }) => fontFamily || `'Courier New', Courier, monospace`};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  position: relative;
  margin: ${({ margin }) => margin || '10px'};
  z-index: 10;

  box-shadow: 
    2px 2px 0 #FFFF00, 
    4px 4px 0 #FFFF00, 
    6px 6px 0 #FFFF00, 
    inset 0 2px 3px rgba(0, 0, 0, 0.5);

  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    z-index: -1;
    border: 2px solid transparent;
    border-right-color: #FFFF00;
    border-bottom-color: #FFFF00;
  }

  &::before {
    top: 0;
    right: -1px;
    bottom: -1px;
    left: 0;
    box-shadow: 1px 1px 0 #FFFF00;
    z-index: -1;
  }

  &::after {
    top: 0;
    right: -2px;
    bottom: -2px;
    left: 0;
    box-shadow: 1px 1px 0 #FFFF00;
    z-index: -2;
  }

  &:hover::before,
  &:active::before {
    opacity: 0;
  }

  &:hover::after,
  &:active::after {
    opacity: 0;
  }

  &:hover,
  &:active {
    transform: translate(2px, 2px); 
    box-shadow: 
      1px 1px 0 #FFFF00,
      3px 3px 0 #FFFF00,
      5px 5px 0 #FFFF00; 
  }

  ${({ small }) =>
    small &&
    css`
      padding: 5px 10px;
      font-size: 12px;
    `}

  ${({ large }) =>
    large &&
    css`
      padding: 12px 24px;
      font-size: 16px;
    `}
`;

const Button = ({
  border,
  color,
  padding,
  fontFamily,
  fontSize,
  margin,
  small,
  large,
  ...props
}) => {
  return (
    <RetroButton
      border={border}
      color={color}
      padding={padding}
      fontFamily={fontFamily}
      fontSize={fontSize}
      margin={margin}
      small={small}
      large={large}
      {...props}
    />
  );
};

export default Button;
