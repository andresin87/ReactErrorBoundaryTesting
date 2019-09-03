import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Page from './components/Page';
import Buggy from './components/Buggy';
import NotBuggy from './components/NotBuggy';

const Routes = ({ match }) => (
  <section className="page">
    <Route
      exact
      path={`${match.url}/`}
      render={() => (
        <Page title={'home'}>
          <Buggy/>
          <NotBuggy/>
        </Page>
      )}
    />
    <Route
      exact
      path={`${match.url}/buggy`}
      render={() => (
        <Page title={'buggy'}>
          <Buggy/>
        </Page>
      )}
    />
      <Route
        exact
        path={`${match.url}/not-buggy`}
        render={() => (
          <Page title={'not-buggy'}>
            <NotBuggy/>
          </Page>
        )}
      />
    <Route
      exact
      path={`${match.url}/page1`}
      render={() => (
        <>
          <Buggy/>
          <NotBuggy/>
        </>
      )}
    />
  </section>
);

export default withRouter(Routes);