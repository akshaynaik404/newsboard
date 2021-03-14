import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import Header from './components/Header';
import NewsItems from './components/NewsItems';
import themeObject from './config/themeObject';
import api from './api';
import FabBtn from './components/FabBtn';

const theme = createMuiTheme({ palette: createPalette(themeObject) });

const AppWrapper = props => props.children;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      newsItems: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.setError = this.setError.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData () {
    this.setState({
      isLoading: true,
      error: null,
    }, () => {
      api
      .getNewsItems()
      .then((res = {}) => {
        const result = (res.data && res.data.results) || [];
        this.setState({ newsItems: result, isLoading: false, error: null });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false, error: {
          message: "Unable to fetch the latest news, Please try again later!"
        }});
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  setError(err) {
    this.setState({ error: err });
  }
  
  render() {
    const { newsItems, isLoading, error } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <AppWrapper>
          <div>
            <Header />
            <NewsItems
              newsItems={newsItems}
              error={error}
              reload={this.componentDidMount}
              isLoading={isLoading}
              setError={this.setError}
            />
            <FabBtn reload={this.componentDidMount} />
          </div>
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
