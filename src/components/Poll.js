import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPercentage } from '../utils/helpers';
import { handleAddAnswer } from '../actions/answers';

const getVotesKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

class Poll extends Component {
  handleAnswer = (answer) => {
    const { poll, authed, dispatch } = this.props;
    this.answered = true;

    dispatch(handleAddAnswer({ authed, id: poll.id, answer }));
  };

  render() {
    const { poll, vote, authorAvatarURL } = this.props;
    const { question } = poll;
    const total = getVotesKeys().reduce((count, current) => {
      return count + poll[current].length;
    }, 0);
    return (
      <div className='poll-container'>
        <h1 className='question'>{question}</h1>
        <div className='poll-author'>
          BY{' '}
          <img
            className='avatar'
            src={authorAvatarURL}
            alt={`Avatar of the poll author`}
          />
        </div>
        <ul>
          {['aText', 'bText', 'cText', 'dText'].map((key) => {
            const count = poll[`${key[0]}Votes`].length;
            const percent = getPercentage(count, total);
            return (
              <li
                onClick={() => {
                  !vote && !this.answered && this.handleAnswer(key[0]);
                }}
                key={key[0]}
                className={`option ${key[0] === vote && 'chosen'}`}
              >
                <div className='result'>
                  <span>{poll[key]}</span>
                  {!vote ? null : (
                    <span>
                      {percent}% ({count})
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authed, polls, users }, { match }) {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) return { poll: null };

  const vote = getVotesKeys().reduce((vote, current) => {
    if (vote) return vote;
    return poll[current].includes(authed) ? current[0] : vote;
  }, null);

  return {
    authed,
    poll,
    vote,
    authorAvatarURL: users[poll.author].avatarURL,
  };
}

export default connect(mapStateToProps)(Poll);
