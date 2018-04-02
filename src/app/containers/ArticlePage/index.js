import React from 'react';
import App from '../App';

const ArticlePage = ({ url: { query: { id } } }) => (
  <div>
    {id}
  </div>
);

export default (props) => <App noHide><ArticlePage {...props} /></App>;
