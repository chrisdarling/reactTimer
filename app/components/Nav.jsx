var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink to="/" activeClassName="active" activeClassName="active-link">Timer</IndexLink></li>
          <li><Link to="/countdown" activeClassName="active" activeClassName="active-link">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/chrisdarling" target="_blank">Chris Darling</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
