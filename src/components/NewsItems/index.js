import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog';

import api from 'api';
import ListWithDividers from './ListWithDividers';
import Loader from './Loader';

class NewsItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsItems: [],
			loading: true,
			error: null
		};
    this.handleRequestRetry = this.handleRequestRetry.bind(this);
    this.handleRequestCancel = this.handleRequestCancel.bind(this);
	}
  componentDidMount() {
    api.getNewsItems().then(res => {
      let resData = res.data;
      this.setState({
        newsItems: resData.articles,
				loading: false,
				error: null
      });
    })
		.catch(err => {
			this.setState({
          loading: false,
          error: err
      });
		});
  }
	renderLoading() {
		return <Loader />
	}
  handleRequestCancel() {
    this.setState({ error: null });
  }
  handleRequestRetry() {
    this.componentDidMount();
    this.setState({loading: true});
  }
	renderError() {
		return (
			<Dialog open={true} onRequestClose={this.handleRequestClose}>
				<DialogTitle>
					{"Network Error"}
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
	renderListWithDividers(listItems){
		return <ListWithDividers listItems={listItems}/>
	}
	render() {
		const { newsItems, error, loading } = this.state;
		if(error) {
      return this.renderError();
    }
		return (
			loading ?
				this.renderLoading():
				this.renderListWithDividers(newsItems)
		);

	}
}

export default NewsItems;
