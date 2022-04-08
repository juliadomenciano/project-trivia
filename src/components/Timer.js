import React from 'react';
import PropTypes from 'prop-types';

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

Timer.propTypes = {
  handleTimer: PropTypes.func,
  HandleInterval: PropTypes.func,
  seconds: PropTypes.number,
}.isRequired;

export default Timer;
