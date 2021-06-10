import React from 'react';
import ReactDOM from 'react-dom';
import ItemUser from './components/ItemUser';
import Title from './components/Title';

const element = <h1>Hola mundo</h1>;

const container = document.getElementById('root');

ReactDOM.render(<>
  <Title/>
  <ItemUser/>
</>, container);
