import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateButton);
  }

  validateButton = () => {
    const { email, name } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    if (name !== '' && emailRegex.test(email)) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { isDisabled, name, email } = this.state;
    return (
      <section>
        <form>
          <label
            htmlFor="name"
          >
            Nome:
            <input
              type="text"
              name="name"
              data-testid="input-player-name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="name"
          >
            Email:
            <input
              type="email"
              name="email"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <Link to="/play">
            <button
              data-testid="btn-play"
              type="button"
              disabled={ isDisabled }
            >
              Play
            </button>
          </Link>
        </form>
        <Button />
      </section>
    );
  }
}

export default Login;
