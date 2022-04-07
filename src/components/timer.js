import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showAnswers } from '../redux/actions';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      /*       showResults: false, */
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    this.HandleInterval(prevProps, prevState);
  }

  handleTimer = () => {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState((prevstate) => (
        { seconds: prevstate.seconds + 1 }));
    }, oneSecond);
  }

  HandleInterval = (prevProps, prevState) => {
    const { endOfQuestion } = this.props;
    /*     const { showResults } = this.state; */
    const thirty = 30;
    if (prevState.seconds === thirty) {
      this.setState({
        seconds: 0,
        /*         showResults: true, */
      }, () => {
        clearInterval(this.intervalID); endOfQuestion(true);
      });
    }
  }

  render() {
    const { seconds } = this.state;
    return (
      <section>
        <div className="timer">
          <h2>
            tempo:
            {' '}
            {seconds}
          </h2>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  endOfQuestion: (showResults) => dispatch(showAnswers(showResults)),
});

Timer.propTypes = {
  endOfQuestion: PropTypes.func.isRequired,

};

export default connect(null, mapDispatchToProps)(Timer);
