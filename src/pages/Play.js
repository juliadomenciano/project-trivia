import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Question from '../components/Question';
import { getToken, getAPIdata } from '../redux/actions';
import Timer from '../components/Timer';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      isHiddenButton: true,
      seconds: 30,
      isButtonDisabled: false,

    };
  }

  componentDidMount() {
    const { myToken, getApiResponse } = this.props;
    const times = 5;
    getApiResponse(myToken, times);
  }

  handleNextQuestion = () => {
    clearTimeout(this.intervalID);
    this.setState((prev) => ({
      questionIndex: prev.questionIndex + 1,
      isHiddenButton: true,
      isButtonDisabled: false,
    }));
    document.querySelectorAll('.wrong').forEach((item) => {
      item.style.border = '1px solid black';
    });
    document.querySelector('.correct').style.border = '1px solid black';
  };

  aTimer = () => {
    const thirtySec = 30000;
    setTimeout(() => {
      this.handleAnswers(); this.disableButton();
    }, thirtySec);
  }

  handleTimer = () => {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState((prevstate) => (
        { seconds: prevstate.seconds - 1 }));
    }, oneSecond);
  }

  HandleInterval = () => {
    const zero = 0;
    if (this.state.seconds === zero) {
      this.setState({
        seconds: '0',
        isButtonDisabled: true,
      }, () => {
        clearInterval(this.intervalID);
        this.handleAnswers();
      });
    }
  }

  handleAnswers = () => {
    this.showNextButton();
    document.querySelectorAll('.wrong').forEach((item) => {
      item.style.border = '3px solid rgb(255, 0, 0)';
    });
    document.querySelector('.correct').style.border = '3px solid rgb(6, 240, 15)';
  }

  showNextButton = () => {
    this.setState({ isHiddenButton: false });
  }

  render() {
    const { datatest } = this.props;
    const { questionIndex, isHiddenButton, seconds, isButtonDisabled } = this.state;

    return (
      <section>
        <Header />
        <Timer
          seconds={ seconds }
          handleTimer={ this.handleTimer }
          HandleInterval={ this.HandleInterval }
        />
        {datatest.length ? (
          <Question
            askQuestion={ datatest[questionIndex] }
            showNextButton={ this.showNextButton }
            isButtonDisabled={ isButtonDisabled }
            handleAnswers={ this.handleAnswers }
          />
        ) : (
          ''
        )}
        <button
          type="button"
          onClick={ () => this.handleNextQuestion() }
          hidden={ isHiddenButton }
          data-testid="btn-next"
        >
          Next
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  myToken: state.token,
  datatest: state.player.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(getToken()),
  getApiResponse: (myToken, times) => dispatch(getAPIdata(myToken, times)),
});

Play.propTypes = {
  datatest: PropTypes.arrayOf(PropTypes.any).isRequired,
  myToken: PropTypes.string.isRequired,
  getApiResponse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
