import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends Component {
  componentDidMount() {
    const { score, name } = this.props;
    localStorage.setItem('ranking', [
      JSON.stringify({ name, score, picture: 'https://www.gravatar.com/avatar/c19ad9dbaf91c5533605fbf985177ccc' }),
    ]);
  }

  render() {
    const { assertions, score } = this.props;
    const three = 3;
    console.log('assertions:', typeof assertions);
    console.log('score:', typeof score);
    return (
      <section>
        <Header />
        <h1 data-testid="feedback-text">
          {assertions >= three ? 'Well Done!' : 'Could be better...'}
        </h1>
        <h2 data-testid="feedback-total-score">{score}</h2>
        <h3 data-testid="feedback-total-question">{parseInt(assertions, 10)}</h3>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">Play Again</button>
        </Link>
      </section>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
  score: PropTypes.number,
  name: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.name,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
