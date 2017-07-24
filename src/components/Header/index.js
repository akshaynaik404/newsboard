import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            Newsboard
          </Typography>
          <Button color="contrast">Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);
