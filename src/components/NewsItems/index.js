import React, {Component} from 'react';

import api from '../../config/api';
import ListWithDividers from './ListWithDividers';
import Loader from './Loader';

class NewsItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsItems: [],
			loading: true
		};
	}
  componentDidMount() {
    api.getNewsItems().then(res => {
      let resData = res.data;
      this.setState({
        newsItems: resData.articles,
				loading: false
      });
    });
  }
	render() {
		const newsItems = this.state.newsItems;

		return (
			this.state.loading ?
				<Loader />:
				<ListWithDividers newsItems={newsItems}/>
		);

	}
}

export default NewsItems;
