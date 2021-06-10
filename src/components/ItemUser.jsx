import React from 'react';

const user = {
  name: 'Juan C. Guana',
  country: 'Ecuador',
  email: 'juan@email.com',
}

// Los componentes de clase se les conoce como class components o Statefull Components porque tienen un estado o state, opcionalmente puede llamar al metodo constructor ya que se trata de clases y siempre llevan un método render(), y algo muy importante es que estos componentes tienen ciclo de vida que lo revisaremos en una siguiente clase
class ItemUser extends React.Component {
  state= {}

  render() {
    return (
      <>
        <p>
          <strong>Nombre: </strong> {user.name}
        </p>
        <p>
          <strong>Pais: </strong> {user.country}
        </p>
        <p>
          <strong>Correo: </strong> {user.email}
        </p>
      </>
    );
  }
}

export default ItemUser;
