import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="menu">
    <Link to="./">Home</Link>
    {' / '}
    <Link to="./buggy">buggy</Link>
    {' / '}
    <Link to="./not-buggy">not-buggy</Link>
    {' / '}
    <Link to="./page1">page1</Link>
  </section>
);