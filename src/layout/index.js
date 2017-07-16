import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './styles.css';

const App = ({ children }) =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-heading">React tests!</h2>

      <nav className="App-navigation">
        <NavLink
          exact
          activeClassName="App-link--selected"
          to="/"
          replace
          className="App-link"
        >
          Home
        </NavLink>

        <NavLink
          exact
          activeClassName="App-link--selected"
          to="/yoda-state-example"
          replace
          className="App-link"
        >
          Yoda State Example
        </NavLink>

        <NavLink
          exact
          activeClassName="App-link--selected"
          to="/redux-list-example"
          replace
          className="App-link"
        >
          Redux List Example
        </NavLink>
      </nav>
    </div>
    <div className="App-content">
      {React.Children.only(children)}
    </div>
  </div>;

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
