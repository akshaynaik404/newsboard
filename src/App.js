import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import Header from 'components/Header';
import NewsItems from 'components/NewsItems';
import themeObject from './config/themeObject';
import api from 'api';
import FabBtn from 'components/FabBtn';

const theme = createMuiTheme({palette: createPalette( themeObject )});

const AppWrapper = props => props.children;
class App extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			isLoading: true,
			error: null,
			newsItems: [ ]
		};
		this.componentDidMount = this.componentDidMount.bind( this );
		this.setError = this.setError.bind( this );
	}
	componentDidMount() {
		this.setState({
			isLoading: true
		});
		api
			.getNewsItems()
			.then(res => {
				this.setState({ newsItems: res.data.articles, isLoading: false, error: null });
			})
			.catch(err => {
				this.setState({ isLoading: false, error: err });
			});
	}

	setError( err ) {
		this.setState({ error: err })
	}
	render() {
		const { newsItems, isLoading, error } = this.state;
		return (
			<MuiThemeProvider theme={theme}>
				<AppWrapper>
					<div>
						<Header/>
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
		)
	}
}

export default App;
