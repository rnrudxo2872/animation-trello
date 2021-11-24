import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { DefaultStyle } from './defaultStyle';
import { BaseTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={BaseTheme}>
        <RecoilRoot>
          <DefaultStyle />
          <App />
        </RecoilRoot>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);