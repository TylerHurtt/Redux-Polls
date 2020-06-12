import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
import Poll from './Poll';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading ? null : (
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/add' component={AddPoll} />
                <Route path='/polls/:id' component={Poll} />
                <Route
                  path='*'
                  children={() => (
                    <h1 className='center'>404 Page Not found</h1>
                  )}
                />
              </Switch>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authed }) {
  return { loading: authed ? false : true };
}

export default connect(mapStateToProps)(App);
