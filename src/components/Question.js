import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './question.css';
import he from 'he';

class Question extends React.Component {
  render() {
    const {
      askQuestion,
      isButtonDisabled,
      handleAnswers,
      handleCorrectAnswers } = this.props;
    const half = 0.5;
    const one = 1;

    const respostas = [...askQuestion.incorrect_answers, askQuestion.correct_answer]
      .sort(() => ((Math.random() > half) ? 1 : -one));
    return (
      <section className="questions-container">
        <h1 data-testid="question-category">{ askQuestion.category }</h1>
        <h3 data-testid="question-text">{ he.decode(askQuestion.question) }</h3>
        <div className="answers-container" data-testid="answer-options">
          {
            respostas.map((item, index) => {
              if (item === askQuestion.correct_answer) {
                return (
                  <button
                    data-testid="correct-answer"
                    type="button"
                    key={ index }
                    onClick={ handleCorrectAnswers }
                    disabled={ isButtonDisabled }
                    className="button"
                    id="correct"
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
                  onClick={ handleAnswers }
                  disabled={ isButtonDisabled }
                  className="button"
                  id="wrong"
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

const mapStateToProps = () => ({
// endOfQuestion: state.player.answers,
});

Question.propTypes = {
  showNextButton: PropTypes.func,
  askQuestion: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps)(Question);
