import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : <AddPoll />}
      </div>
    );
  }
}

function mapStateToProps({ authed }) {
  return { loading: authed ? false : true };
}

export default connect(mapStateToProps)(App);
