import React from 'react';
import './styles/ItemUser.css'
import PropTypes from 'prop-types';

class ItemUser extends React.Component {
  render() {
    const { name, country, email } = this.props.user;
    return (
      <div className="details">
        <p>
          <strong>Nombre: </strong> {name}
        </p>
        <p>
          <strong>Pais: </strong> {country}
        </p>
        <p>
          <strong>Correo: </strong> {email}
        </p>
      </div>
    );
  }
}

ItemUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string
  })
  
}

export default ItemUser;
