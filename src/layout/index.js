import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './styles.css';

class App extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React tests!</h2>
        </div>
        <p className="App-intro">
          {React.Children.only(children)}
        </p>
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.element.isRequired
};

export default App;
