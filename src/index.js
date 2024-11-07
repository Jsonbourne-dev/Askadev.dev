import React from 'react';
import ReactDOM from 'react-dom';
import RouterPage from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const baseTheme = {
  colors: {
      primary: '#BEE239',
      text: 'black',
      clipboardBorder: '#ccc',
      copyMessage: '#bee239',
      whiteText: 'white',
      error: 'red',
      background: '#11141A',
      overlay: 'rgba(17, 20, 26, 0.7)',
      sidebar: '#1F2328',
      terminal: '#1E2126',
      spacerLine: '#b2b3b3',
      bottomSpacerLine: '#BEE239',
  },
  spacing: {
      small: '10px',
      medium: '20px',
      gaps: {
          desktop: {
              large: '20px',
              medium: '15px',
              small: '10px',
          },
          phone: {
              large: '15px',
              medium: '10px',
              small: '5px',
          },
      },
  },
  borderRadius: '8px',
  fontSizes: {
      desktop: {
          xlarge: '36px',
          large: '30px',
          medium: '24px',
          small: '20px',
          xsmall: '14px',
      },
      phone: {
          xlarge: '28px',
          large: '24px',
          medium: '20px',
          small: '16px',
          xsmall: '14px',
      },
  },
  fontWeights: {
      thin: '300',
      normal: '400',
      bold: '700',
      extraBold: '900',
  },
  fonts: {
      thin: "'Roboto Thin', sans-serif",
      regular: "'Roboto', sans-serif",
      bold: "'Roboto Bold', sans-serif",
      extraBold: "'Roboto ExtraBold', sans-serif",
  },
  screenSizes: {
      desktop: '800px',
      phone: '600px',
  },
};


const GlobalStyle = createGlobalStyle`
  body {
      background-color: #11131a; 
      color: #FFFFFF; 
      overflow-x: hidden; 
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif; 
      font-weight: 700; 
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <RouterPage />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
