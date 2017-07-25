import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styleSheet = createStyleSheet('Loader', theme => ({
  progress: {
    marginTop: '64px'
  },
  progressContainer: {
    textAlign: 'center'
  }
}));

function Loader(props) {
  const classes = props.classes;
  return (
    <div className={classes.progressContainer}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styleSheet)(Loader);
