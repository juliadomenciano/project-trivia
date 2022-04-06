import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { askQuestion } = this.props;
    console.log(askQuestion);
    // const respostas = [...askQuestion.incorrect_answer, askQuestion.correct_answer];
    return (
      <section>
        <h1 data-testid="question-category">{ askQuestion.category }</h1>
        <h3 data-testid="question-text">{ askQuestion.question }</h3>
        <div data-testid="answer-options">
          {
            askQuestion.incorrect_answers.map((item, index) => (
              <button
                data-testid={ `wrong-answer-${index}` }
                type="button"
                key={ index }
              >
                { item }
              </button>
            ))
          }
        </div>
        <button
          data-testid="correct-answer"
          type="button"
        >
          { askQuestion.correct_answer }
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  datatest: state.player.data,
});

Question.propTypes = {
  askQuestion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Question);
