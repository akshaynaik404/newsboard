import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styleSheet = createStyleSheet('NewsItems', theme => ({
  root: {
    width: '100%',
    maxWidth: '640px',
    background: theme.palette.background.paper,
    margin: '56px auto',
  },
}));


function ListWithDividers(props) {
  return (
    <List className={props.classes.root}>
      {
        props.listItems.map(news => (
          <a style={{ textDecoration: 'none' }} href={news.url} target="_blank" key={news.publishedAt}>
            <ListItem button>
              <ListItemText
                primary={news.title}
              />
            </ListItem>
            <Divider light />
          </a>
          ))
      }
    </List>
  );
}

ListWithDividers.propTypes = {
  listItems: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styleSheet)(ListWithDividers);
