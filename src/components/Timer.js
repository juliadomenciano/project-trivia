import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { showAnswers } from '../redux/actions';

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

// Timer.propTypes = {

// };

export default Timer;
