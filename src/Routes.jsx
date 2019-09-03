import React from 'react';
import { Route } from 'react-router-dom';

import Page from './components/Page';
import Buggy from './components/Buggy';
import NotBuggy from './components/NotBuggy';

export default () => (
  <section className="page">
    <Route
      exact
      path="/"
      render={() => (
        <Page title={'home'}>
          <Buggy/>
          <NotBuggy/>
        </Page>
      )}
    />
    <Route
      exact
      path="/buggy"
      render={() => (
        <Page title={'buggy'}>
          <Buggy/>
        </Page>
      )}
    />
      <Route
        exact
        path="/not-buggy"
        render={() => (
          <Page title={'not-buggy'}>
            <NotBuggy/>
          </Page>
        )}
      />
    <Route
      exact
      path="/page1"
      render={() => (
        <>
          <Buggy/>
          <NotBuggy/>
        </>
      )}
    />
  </section>
);
