import React from 'react';
import App from '../App';

const ProjectsPage = ({ url: { query: { id } } }) => (
  <div>
    {id}
  </div>
);

export default (props) => <App noHide><ProjectsPage {...props} /></App>;
