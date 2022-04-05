import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getToken } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      isDisabled: true,
      redirect: false,
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

  handleButton = async () => {
    const { fetchToken } = this.props;
    this.setState({
      redirect: true,
    });
    await fetchToken();
  }

  render() {
    const { isDisabled, name, email, redirect } = this.state;
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

          <button
            data-testid="btn-play"
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleButton }
          >
            Play
          </button>
        </form>
        { redirect && <Redirect to="/play" /> }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  myToken: state.token.token,
});
const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(getToken()),
});

Login.propTypes = {
  fetchToken: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
