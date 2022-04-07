import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  // branch

  render() {
  // const { } = this.state;
    return (
      <Link to="/settings">
        <button
          type="button"
          data-testid="btn-settings"
        >
          Configurações
        </button>
      </Link>
    );
  }
}

export default Button;
