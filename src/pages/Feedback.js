import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { assertions } = this.props;
    const three = 3;
    return (
      <section>
        <Header />
        <h1 data-testid="feedback-text">
          {assertions >= three ? 'Well Done!' : 'Could be better...'}
        </h1>
      </section>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
