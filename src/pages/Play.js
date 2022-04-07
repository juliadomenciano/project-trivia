import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Question from '../components/Question';
import { getToken, getAPIdata } from '../redux/actions';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      isHiddenButton: true,
    };
  }

  componentDidMount() {
    const { myToken, getApiResponse } = this.props;
    const times = 5;
    getApiResponse(myToken, times);
  }

  handleNextQuestion = () => {
    this.setState((prev) => ({
      questionIndex: prev.questionIndex + 1,
      isHiddenButton: true,
    }));
  };

  showNextButton = () => {
    this.setState({ isHiddenButton: false });
  }

  render() {
    const { datatest } = this.props;
    const { questionIndex, isHiddenButton } = this.state;

    return (
      <section>
        <Header />
        {datatest.length ? (
          <Question
            askQuestion={ datatest[questionIndex] }
            showNextButton={ this.showNextButton }
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
