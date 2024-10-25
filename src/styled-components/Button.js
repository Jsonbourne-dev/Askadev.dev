import styled from 'styled-components';

const buttonStyles = {
  padding: {
    desktop: '8px 30px',
    phone: '4px 12px',
  },
  colors: {
    filled: {
      desktop: '#BEE239',
      phone: '#BEE239',
      text: {
        desktop: 'black',
        phone: 'black',
      },
    },
    ghost: {
      desktop: 'transparent',
      phone: 'transparent',
      text: 'white',
    },
    outlined: {
      border: '#D3D3D3',
      text: 'white',
    },
  },
  fontSize: {
    desktop: '20px',
    phone: '16px',
  },
};

const Line = styled.div`
  width: 100%; 
  height: 2px;
  background-color: white; 
  margin-top: 4px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  padding: ${({ variant }) => (variant.startsWith('phone') ? buttonStyles.padding.phone : buttonStyles.padding.desktop)};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: 'Outfit', sans-serif;
  font-weight: bold;
  font-size: ${({ variant }) => (variant.startsWith('phone') ? buttonStyles.fontSize.phone : buttonStyles.fontSize.desktop)};
  color: ${({ variant }) => (variant.includes('filled') ? buttonStyles.colors.filled.text[variant.startsWith('phone') ? 'phone' : 'desktop'] : buttonStyles.colors.outlined.text)};
  background-color: ${({ variant }) => {
    if (variant.includes('filled')) {
      return buttonStyles.colors.filled[variant.startsWith('phone') ? 'phone' : 'desktop'];
    }
    return variant.includes('outlined') ? 'transparent' : buttonStyles.colors.ghost[variant.startsWith('phone') ? 'phone' : 'desktop'];
  }};
  width: ${({ width }) => width || 'auto'};
  border: ${({ variant }) => (variant.includes('outlined') ? `2px solid ${buttonStyles.colors.outlined.border}` : 'none')};

  &:hover {
    background-color: ${({ variant }) => {
      if (variant === 'desktop-filled') return '#A1C92F';
      if (variant === 'desktop-outlined' || variant === 'phone-outlined') return 'rgba(211, 211, 211, 0.3)';
      if (variant === 'phone-filled') return 'rgba(190, 226, 57, 0.8)';
      return 'transparent';
    }};
  }

  &:active {
    background-color: ${({ variant }) => {
      if (variant === 'desktop-filled') return '#91B529';
      if (variant === 'desktop-outlined' || variant === 'phone-outlined') return 'rgba(211, 211, 211, 0.5)';
      if (variant === 'phone-filled') return 'rgba(190, 226, 57, 0.6)';
      return 'transparent';
    }};
  }
`;

const StyledButton = ({ variant, width, lineBelowText, children, onClick }) => {
  return (
    <Button variant={variant} width={width} onClick={onClick}>
      {children}
      {lineBelowText && <Line />} {/* Render line if prop is true */}
    </Button>
  );
};

export default StyledButton;
