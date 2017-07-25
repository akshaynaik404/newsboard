import React from 'react';
import {
  MuiThemeProvider,
  createMuiTheme
} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import Header from './components/Header';
import Footer from './components/Footer';
import NewsItems from './components/NewsItems';

import themeObject from './config/themeObject';

const theme = createMuiTheme({
  palette: createPalette(themeObject),
});

const AppWrapper = props => props.children;
const App = () =>
  <MuiThemeProvider theme={theme}>
    <AppWrapper>
      <div>
        <Header />
        <NewsItems />
        <Footer />
      </div>

    </AppWrapper>
  </MuiThemeProvider>;
export default App;
