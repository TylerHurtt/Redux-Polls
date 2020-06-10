import React, { Component } from 'react';
import { connect } from 'react-redux';

class Poll extends Component {
  render() {
    const { poll, vote, authorAvatarURL } = this.props;
    const {
      question,
      aText,
      aVotes,
      bText,
      bVotes,
      cText,
      cVotes,
      dText,
      dVotes,
    } = poll;

    const display = () => {
      display: !vote && 'none';
    };
    return (
      <div className='poll-container'>
        <h1>{question}</h1>
        <div>
          <h3>by: </h3>
          <img className='avatar' src={authorAvatarURL} alt='' />
        </div>
        <div className='option'>
          <span>{aText}</span>
          <span style={{ display: !vote && 'none' }}>{aVotes.length}</span>
        </div>
        <div className='option'>
          <span>{bText}</span>
          <span style={{ display: !vote && 'none' }}>{bVotes.length}</span>
        </div>
        <div className='option'>
          <span>{cText}</span>
          <span style={{ display: !vote && 'none' }}>{cVotes.length}</span>
        </div>
        <div className='option'>
          <span>{dText}</span>
          <span style={{ display: !vote && 'none' }}>{dVotes.length}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authed, polls, users }, { match }) {
  console.log(match);
  const { id } = match.params;
  const poll = polls[id];
  console.log(poll);

  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce(
    (vote, current) => {
      if (vote) return vote[0];
      console.log(poll[current]);
      return poll[current].includes[authed] ? current : vote;
    },
    null
  );

  return {
    poll,
    vote,
    authorAvatarURL: users[poll.author].avatarURL,
  };
}

export default connect(mapStateToProps)(Poll);
