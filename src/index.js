import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);