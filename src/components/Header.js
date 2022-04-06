import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <section>
        <div>
          <img
            src="https://www.gravatar.com/avatar/c19ad9dbaf91c5533605fbf985177ccc"
            alt="foto"
            data-testid="header-profile-picture"
          />
        </div>
        <div>
          <p
            data-testid="header-player-name"
          >
            {name}

          </p>
          <p
            data-testid="header-score"
          >
            {0}

          </p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,

};
export default connect(mapStateToProps)(Header);
