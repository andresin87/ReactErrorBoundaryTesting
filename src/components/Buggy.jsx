import React from 'react';

import { withErrorBoundary } from './ErrorBoundary';

class Buggy extends React.Component {
  state = { greeting: "Welcome"};
  componentDidMount() {
    throw new Error("An error has occured in Buggy component!");
  }
  render() {
    return <h4>{this.state.greeting}</h4>;
  }
}

export default withErrorBoundary(Buggy);