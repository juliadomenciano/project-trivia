import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchAPI from '../services/fetchAPI';

class Play extends Component {
  componentDidMount() {
    const { myToken, fetchToken } = this.props;
    const result = fetchAPI(myToken);

    if (result.response_code === 3) {
      fetchToken();
    }
  }

  render() {
    return (
      <div>
        Play
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myToken: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(getToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
