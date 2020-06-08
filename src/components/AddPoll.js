import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // redirect to /
    console.log('new state ===>', this.state);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;

    return question === '' || a === '' || b === '' || c === '' || d === '';
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <div className='add-poll-container'>
        <form className='add-form' onSubmit={this.handleSubmit}>
          <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
          <input
            type='text'
            value={question}
            name='question'
            className='input'
            onChange={this.handleInputChange}
          />
          <h3>What are the options?</h3>
          <label className='label' htmlFor='a'>
            A.
          </label>
          <input
            value={a}
            className='input'
            name='a'
            id='a'
            type='text'
            onChange={this.handleInputChange}
          />
          <label className='label' htmlFor='b'>
            B.
          </label>
          <input
            value={b}
            className='input'
            name='b'
            id='b'
            type='text'
            onChange={this.handleInputChange}
          />
          <label className='label' htmlFor='c'>
            C.
          </label>
          <input
            value={c}
            className='input'
            name='c'
            id='c'
            type='text'
            onChange={this.handleInputChange}
          />
          <label className='label' htmlFor='d'>
            D.
          </label>
          <input
            value={d}
            className='input'
            name='d'
            id='d'
            type='text'
            onChange={this.handleInputChange}
          />
          <button className='btn' type='submit' disabled={this.isDisabled()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect()(AddPoll);
