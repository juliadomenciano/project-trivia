import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Question from '../components/Question';
import { getToken, getAPIdata } from '../redux/actions';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
    };
  }

  async componentDidMount() {
    const { myToken, fetchToken, get_Api_Response } = this.props;
    const three = 3;
    const times = 5;
    await get_Api_Response(myToken, times);
    const { datatest } = this.props;
    // if (datatest.response_code === three) {
    //   await fetchToken();
    //   await get_Api_Response(myToken, times);
    // }
  }

  render() {
    const { datatest } = this.props;
    const { questionIndex } = this.state;

    return (
      <section>
        <Header />
        { datatest.length && <Question askQuestion={ datatest[questionIndex] } /> }
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
  get_Api_Response: (myToken, times) => dispatch(getAPIdata(myToken, times)),
});

Play.propTypes = {
  datatest: PropTypes.arrayOf(PropTypes.string).isRequired,
  myToken: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchToken: PropTypes.arrayOf(PropTypes.string).isRequired,
  get_Api_Response: PropTypes.arrayOf(PropTypes.string).isRequired,
};

}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
