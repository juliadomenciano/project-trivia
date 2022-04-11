import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { resetScoreAction } from '../redux/actions';
import './feedback.css';

class Feedback extends Component {
  componentDidMount() {
    const { resetScore } = this.props;
    resetScore();
    this.getUserData();
  }

  getUserData = () => {
    const { score, name } = this.props;
    const url = 'https://www.gravatar.com/avatar/c19ad9dbaf91c5533605fbf985177ccc';
    const userInfo = [{ name, score, picture: url }];
    const getAllUsers = JSON.parse(localStorage.getItem('ranking'));
    if (getAllUsers !== null) {
      const arr = [...userInfo, ...getAllUsers];
      localStorage.setItem('ranking', JSON.stringify(arr));
    } else {
      localStorage.setItem('ranking', JSON.stringify(userInfo));
    }
  };

  render() {
    const { assertions, score } = this.props;
    const three = 3;
    return (
      <section className="feedback-container">
        <Header />
        <h1 className="feedback" data-testid="feedback-text">
          {assertions >= three ? 'Well Done!' : 'Could be better...'}
        </h1>
        <h2
          className="score"
          data-testid="feedback-total-score"
        >
          {`Pontuação: ${score}`}

        </h2>
        <h3
          className="score"
          data-testid="feedback-total-question"
        >
          {`Acertos: ${parseInt(assertions, 10)}`}
        </h3>
        <Link to="/">
          <button className="button" type="button" data-testid="btn-play-again">
            Play Again
          </button>
        </Link>
        <Link to="/ranking">
          <button className="button" type="button" data-testid="btn-ranking">
            Ranking
          </button>
        </Link>
      </section>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
  score: PropTypes.number,
  name: PropTypes.string,
  resetScore: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.name,
});

const mapDispatchToProps = (dispatch) => ({
  resetScore: () => dispatch(resetScoreAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
