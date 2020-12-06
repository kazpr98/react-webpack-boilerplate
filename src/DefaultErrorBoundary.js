import React from 'react';
import PropTypes from 'prop-types';

class DefaulErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <div>Something went wrong!</div> : children;
  }
}

DefaulErrorBoundary.propTypes = {
  children: PropTypes.element,
};

export default DefaulErrorBoundary;
