import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogTitle } from 'material-ui/Dialog';

import ListWithDividers from './ListWithDividers';
import Loader from './Loader';

class NewsItems extends Component {
	constructor( props ) {
		super( props );

		this.handleRequestRetry = this
			.handleRequestRetry
			.bind( this );
		this.handleRequestCancel = this
			.handleRequestCancel
			.bind( this );
	}
	renderLoading() {
		return <Loader/>
	}
	handleRequestCancel() {
		this
			.props
			.setError();
	}
	handleRequestRetry( ) {
		this
			.props
			.reload();
	}
	renderError( ) {
		const error = this.props.error;
		return (
			<Dialog open={error !== null} onRequestClose={this.handleRequestClose}>
				<DialogTitle>
					{error.message}
				</DialogTitle>
				<DialogActions>
					<Button onClick={this.handleRequestCancel} color="primary">
						Cancel
					</Button>
					<Button onClick={this.handleRequestRetry} color="primary">
						Retry
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
	renderListWithDividers( listItems ) {
		return <ListWithDividers listItems={listItems}/>
	}
	render() {
		const { newsItems, error, isLoading } = this.props;
		if ( error ) {
			return this.renderError( );
		}
		return (
      isLoading
			? this.renderLoading( )
			: this.renderListWithDividers( newsItems )
    );

	}
}

export default NewsItems;
