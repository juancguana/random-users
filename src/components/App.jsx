import React from 'react';
import ItemUser from './ItemUser';
import Title from './Title';

const data = {
  name: 'Juan C. Guana',
  country: 'Ecuador',
  email: 'juan@email.com',
}

const App = () => {
  return (
    <>
      <Title />
      <ItemUser user={data}/>
    </>
  );
};

export default App;
