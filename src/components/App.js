import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    return <div>{this.props.loading ? null : <Dashboard />}</div>;
  }
}

function mapStateToProps({ authed }) {
  return { loading: authed ? false : true };
}

export default connect(mapStateToProps)(App);
