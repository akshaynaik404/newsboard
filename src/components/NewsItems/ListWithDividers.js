import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styleSheet = createStyleSheet('NewsItems', theme => ({
	root: {
		width: '100%',
		background: theme.palette.background.paper,
		marginTop: '56px'
	}
}));

ListWithDividers.propTypes = {
	listItems: PropTypes.array.isRequired
};


function ListWithDividers (props) {
  return (
    <List className={props.classes.root}>
      {
        props.listItems.map(function (news) {
					console.log(news);
          return (
            <a style={{textDecoration: 'none'}} href={news.url} target="_blank" key={news.publishedAt}>
              <ListItem button>
                <ListItemText
                primary={news.title}
                />
                </ListItem>
              <Divider light/>
            </a>
          )
        })
      }
    </List>
  );
}

export default withStyles(styleSheet)(ListWithDividers);
