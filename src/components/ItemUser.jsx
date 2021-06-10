import React from 'react';
import './styles/ItemUser.css'

const user = {
  name: 'Juan C. Guana',
  country: 'Ecuador',
  email: 'juan@email.com',
}

class ItemUser extends React.Component {
  state= {}

  render() {
    return (
      <div className="details">
        <p>
          <strong>Nombre: </strong> {user.name}
        </p>
        <p>
          <strong>Pais: </strong> {user.country}
        </p>
        <p>
          <strong>Correo: </strong> {user.email}
        </p>
      </div>
    );
  }
}

export default ItemUser;
