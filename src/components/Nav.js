import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav container'>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            Add A Poll
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
