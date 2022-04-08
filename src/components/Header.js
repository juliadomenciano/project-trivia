import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { name, score } = this.props;
    return (
      <header>
        <div>
          <img
            src="https://www.gravatar.com/avatar/c19ad9dbaf91c5533605fbf985177ccc"
            alt="foto"
            data-testid="header-profile-picture"
          />
        </div>
        <div>
          <p data-testid="header-player-name">{name}</p>
          <p data-testid="header-score">{score}</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default connect(mapStateToProps)(Header);
