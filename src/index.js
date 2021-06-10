import React from 'react';
import ReactDOM from 'react-dom';
import ItemUser from './components/ItemUser';
import Title from './components/Title';
import './global.css';

const container = document.getElementById('root');

ReactDOM.render(
  <>
    <Title />
    <ItemUser />
  </>,
  container
);
