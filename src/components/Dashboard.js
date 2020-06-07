import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    showAnswered: false,
  };

  setAnswered = () => {
    this.setState(() => ({
      showAnswered: true,
    }));
  };
  setUnanswered = () => {
    this.setState(() => ({
      showAnswered: false,
    }));
  };

  render() {
    const { showAnswered } = this.state;
    const { answered, unanswered } = this.props;
    const list = showAnswered ? answered : unanswered;
    return (
      <div>
        <div className='dashboard-toggle'>
          <button
            style={{ textDecoration: !showAnswered ? 'underline' : 'none' }}
            onClick={this.setUnanswered}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={{ textDecoration: showAnswered ? 'underline' : 'none' }}
            onClick={this.setAnswered}
          >
            Answered
          </button>
        </div>
        <ul className='dashboard-list'>
          {list.map(({ id, question }) => (
            <li key={id}>{question}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authed, polls, users }) {
  const user = users[authed];
  // const answers = users[authed].answers;

  // const userPolls = user.polls
  //   .map((id) => polls[id])
  //   .sort((a, b) => b.timestamp - a.timestamp);

  const answered = user.answers
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.values(polls)
    .filter((id) => !answered.includes(id))
    .sort((a, b) => b.timestamp - a.timestamp);

  // Using answers & object.keys
  // const unanswered = Object.keys(polls)
  //   .filter((id) => !answers.includes(id))
  //   .map((id) => polls[id])
  //   .sort((a, b) => b.timestamp - a.timestamp);

  return {
    unanswered,
    answered,
  };
}

export default connect(mapStateToProps)(Dashboard);
