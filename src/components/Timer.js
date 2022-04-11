import React from 'react';
import PropTypes from 'prop-types';
import './timer.css';

class Timer extends React.Component {
  componentDidMount() {
    const { handleTimer } = this.props;
    handleTimer();
  }

  componentDidUpdate() {
    const { HandleInterval } = this.props;
    HandleInterval();
  }

  render() {
    const { seconds } = this.props;
    return (
      <section className="timer">
        <div>
          <h2>
            TEMPO:
            {' '}
            {seconds}
          </h2>
        </div>
      </section>
    );
  }
}

Timer.propTypes = {
  handleTimer: PropTypes.func,
  HandleInterval: PropTypes.func,
  seconds: PropTypes.number,
}.isRequired;

export default Timer;
