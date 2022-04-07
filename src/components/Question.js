import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from './timer';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      isButtonDisabled: false,
    };
  }

  componentDidMount() {
    const thirtySec = 30000;
    setTimeout(() => {
      this.handleAnswers(); this.disableButton();
    }, thirtySec);
  }

  componentDidUpdate() {
    this.disableButton();
  }

disableButton = () => {
  const { isButtonDisabled } = this.state;
  if (!isButtonDisabled) {
    this.setState(
      { isButtonDisabled: true },
    );
  }
}

handleAnswers = () => {
  const { showNextButton } = this.props;
  showNextButton();
  document.querySelectorAll('.wrong').forEach((item) => {
    item.style.border = '3px solid rgb(255, 0, 0)';
  });
  document.querySelector('.correct').style.border = '3px solid rgb(6, 240, 15)';
}

render() {
  const { askQuestion } = this.props;
  const { isButtonDisabled } = this.state;
  console.log(askQuestion);
  const half = 0.5;
  const one = 1;

  const respostas = [...askQuestion.incorrect_answers, askQuestion.correct_answer]
    .sort(() => ((Math.random() > half) ? 1 : -one));
  return (
    <section>
      <Timer />
      <h1 data-testid="question-category">{ askQuestion.category }</h1>
      <h3 data-testid="question-text">{ askQuestion.question }</h3>
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
                  disabled={ isButtonDisabled }
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
                disabled={ isButtonDisabled }
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

const mapStateToProps = () => ({
// endOfQuestion: state.player.answers,
});

Question.propTypes = {
  showNextButton: PropTypes.func,
  askQuestion: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps)(Question);
