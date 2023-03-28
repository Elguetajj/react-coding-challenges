import CoreLayout from 'common/layouts/CoreLayout';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <Routes />
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
