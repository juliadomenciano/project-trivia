import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ranking.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetScoreAction } from '../redux/actions';

class Ranking extends Component {
  componentDidMount() {
    const { resetScore } = this.props;
    resetScore();
  }

  render() {
    const players = JSON.parse(localStorage.getItem('ranking')).sort(
      (a, b) => b.score - a.score,
    );

    return (
      <section className="ranking-container">
        <div className="ranking">
          <h1 data-testid="ranking-title">RANKING</h1>
          <Link to="/">
            <button className="button" type="button" data-testid="btn-go-home">
              Home
            </button>
          </Link>
        </div>
        <section className="userInfo">
          {players.map((item, index) => (
            <div className="user" key={ index }>
              <img src={ item.picture } alt="Imagem não carregada" />
              <h2 data-testid={ `player-name-${index}` }>{`Nome: ${item.name}`}</h2>
              <h2
                data-testid={ `player-score-${index}` }
              >
                {`Pontuação: ${item.score}`}

              </h2>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

Ranking.propTypes = {
  resetScore: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  resetScore: () => dispatch(resetScoreAction()),
});

export default connect(null, mapDispatchToProps)(Ranking);
