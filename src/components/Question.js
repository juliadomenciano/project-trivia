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
    console.log(askQuestion.question);
    const respostas = [...askQuestion.incorrect_answer, askQuestion.correct_answer];
    return (
      // corretc_answer
      // incorret_answer
      <section>
        <h1 data-testid="question-category">{ askQuestion.category }</h1>
        <h3 data-testid="question-text">{ askQuestion.question }</h3>
        <div data-testid="answer-options">
          {
            respostas.map((item, index) => {
              item === askQuestion.correct_answer ? (
              <button data-testid="correct-answer">{ item }</button>
              ) : <button data-testid={`wrong-answer-${index}`}>{ item }</button>
            })
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  datatest: state.player.data,
});

Question.propTypes = {
  datatest: PropTypes.arrayOf(PropTypes.string).isRequired,
  question: PropTypes.arrayOf(PropTypes.number).isRequired,
  askQuestion: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Question);
