import React from 'react';

import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleAnswers = () => {
    document.querySelectorAll('.wrong').forEach((item) => {
      item.style.border = '3px solid rgb(255, 0, 0)';
    });
    document.querySelector('.correct').style.border = '3px solid rgb(6, 240, 15)';
  }

  render() {
    const { askQuestion } = this.props;
    const respostas = [...askQuestion.incorrect_answers, askQuestion.correct_answer]
      .sort(() => ((Math.random() > 0.5) ? 1 : -1));
    return (
      <section>
        <h1 data-testid="question-category">{askQuestion.category}</h1>
        <h3 data-testid="question-text">{askQuestion.question}</h3>
        <div data-testid="answer-options">
          {
            respostas.map((item, index) => {
              if (item === askQuestion.correct_answer) {
                return (
                  <button
                    data-testid="correct-answer"
                    type="button"
                    key={ index }
                    onClick={ this.handleAnswers }
                    className="correct"
                  >
                    { askQuestion.correct_answer }
                  </button>
                );
              }
              return (
                <button
                  data-testid={ `wrong-answer-${index}` }
                  type="button"
                  key={ index }
                  onClick={ this.handleAnswers }
                  className="wrong"
                >
                  { item }
                </button>
              );
            })

          }
        </div>

      </section>
    );
  }
}

Question.propTypes = {
  askQuestion: PropTypes.objectOf(PropTypes.any).isRequired,

};

export default Question;
