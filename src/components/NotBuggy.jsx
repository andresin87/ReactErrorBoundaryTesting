import React from 'react';
import { withErrorBoundary } from './ErrorBoundary';

class NotBuggy extends React.Component {
  state = { greeting: "Welcome"};
  render() {
    return (
      <>
        <h4>{this.state.greeting}</h4>
      </>
    );
  }
};

export default withErrorBoundary(NotBuggy);