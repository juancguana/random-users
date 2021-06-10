import React from 'react';

// El componente funcional o stateless component, no tiene un state, tampoco un metodo render, por ende tampoco tienen ciclo de vida por si solos, estos componentes, practicamente son funciones con un return. Dentro de estos componentes podemos crear un subtipo que se llaman componentes presentacionales ya que su unica taera es presentar un html con un return explisito de la siguiente manera

const Title = () => <h1>Usuarios</h1>


export default Title;