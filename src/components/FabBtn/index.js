import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import Autorenew from 'material-ui-icons/Autorenew';

const styleSheet = createStyleSheet('CircularFab', {
  wrapper: {
    position: 'fixed',
    right: '10vw',
    bottom: '10vw'
  },
  progress: {
    color: green[500],
    position: 'absolute',
    top: -2,
    left: -2,
  },
});

class CircularFab extends Component {

  handleButtonClick = () => {
    this.props.reload();
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.wrapper}>
        <Button fab color="accent" onClick={this.handleButtonClick}>
          <Autorenew />
        </Button>
      </div>
    );
  }
}

CircularFab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CircularFab);
