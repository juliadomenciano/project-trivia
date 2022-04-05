import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <section>
        <div>
          <img
            src=""
            alt=""
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

Login.propTypes = {
  name: PropTypes.string.isRequired,

};
export default connect(mapStateToProps)(Header);
