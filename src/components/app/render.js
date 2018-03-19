import React from 'react';

import Sidebar from 'components/sidebar';

import './styles.css';

export default props => {
  const { children } = props;

  return (
    <div className="app">
      <Sidebar {...props} />
      <section className="content">{children}</section>
    </div>
  );
};
