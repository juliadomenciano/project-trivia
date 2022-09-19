import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Link to="/settings">
        <button
          type="button"
          data-testid="btn-settings"
          className="config"
        >
          Settings
        </button>
      </Link>
    );
  }
}

export default Button;
