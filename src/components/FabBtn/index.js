import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Autorenew from 'material-ui-icons/Autorenew';

const styleSheet = createStyleSheet('CircularFab', {
  wrapper: {
    position: 'fixed',
    width: '100%',
    bottom: 16,
    textAlign: 'center',
  },
});

class CircularFab extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.reload();
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.wrapper}>
        <Button fab color="primary" onClick={this.handleButtonClick}>
          <Autorenew />
        </Button>
      </div>
    );
  }
}

CircularFab.propTypes = {
  classes: PropTypes.object.isRequired,
  reload: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(CircularFab);
