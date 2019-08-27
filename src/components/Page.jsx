import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default class Page extends React.Component {
  state = { greeting: "Welcome"};
  render() {
    const { title, children } = this.props;
    return (
      <ErrorBoundary>
        <h2>{title}</h2>
        {children}
      </ErrorBoundary>
    );
  }
};