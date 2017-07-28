import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogTitle } from 'material-ui/Dialog';

import ListWithDividers from './ListWithDividers';
import Loader from './Loader';

class NewsItems extends Component {
  static renderLoading() {
    return <Loader />;
  }
  static renderListWithDividers(listItems) {
    return <ListWithDividers listItems={listItems} />;
  }
  constructor(props) {
    super(props);

    this.handleRequestRetry = this.handleRequestRetry.bind(this);
    this.handleRequestCancel = this.handleRequestCancel.bind(this);
  }
  handleRequestCancel() {
    this.props.setError();
  }
  handleRequestRetry() {
    this.props.reload();
  }
  renderError() {
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
    );
  }
  render() {
    const { newsItems, error, isLoading } = this.props;
    if (error) {
      return this.renderError();
    }
    return (
      isLoading
        ? this.constructor.renderLoading()
        : this.constructor.renderListWithDividers(newsItems)
    );
  }
}

NewsItems.propTypes = {
  reload: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  error: PropTypes.object,
  newsItems: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

NewsItems.defaultProps = {
  error: null,
};

export default NewsItems;
