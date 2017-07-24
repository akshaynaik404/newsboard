import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import api from '../../config/api';

const styleSheet = createStyleSheet('ListDividers', theme => ({
	root: {
		width: '100%',
		background: theme.palette.background.paper,
		marginTop: '56px'
	}
}));
class ListDividers extends Component {
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
		const classes = this.props.classes;
		return (
			<List className={classes.root} component="div">
				{
					this.state.loading ?
						<div>
							<ListItem style={{textAlign: 'center'}}>
								<ListItemText primary='LOADING...'/>
							</ListItem>
							<Divider light/>
						</div>:
						this.state.newsItems.map(function (news) {
	            return (
	    					<div key={news.title}>
	    						<ListItem button>
	    							<ListItemText primary={news.title}/>
	    						</ListItem>
	    						<Divider light/>
	    					</div>
	            );
	          })
        }
			</List>
		);
	}
}

ListDividers.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(ListDividers);
