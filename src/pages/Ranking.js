import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    const players = JSON.parse(localStorage.getItem('ranking')).sort(
      (a, b) => b.score - a.score,
    );

    return (
      <section>
        <div>
          <h1 data-testid="ranking-title">ranking-title</h1>
          <Link to="/">
            <button type="button" data-testid="btn-go-home">
              Home
            </button>
          </Link>
        </div>
        <section>
          {players.map((item, index) => (
            <div key={ index }>
              <img src={ item.picture } alt="Imagem não carregada" />
              <h2 data-testid={ `player-name-${index}` }>{item.name}</h2>
              <h2 data-testid={ `player-score-${index}` }>{item.score}</h2>
            </div>
          ))}
        </section>
      </section>
    );
  }
}
export default Ranking;
