import React from 'react'
import Router from 'react-router'
import Icon from '../components/icon.es6'
import messages from './messages.es6';

var {Link} = Router
 
class Header extends React.Component {
  static defaultProps = {
    repo: "https://github.com/chaozhang/lightbox",
    issues: "https://github.com/chaozhang/lightbox/issues/new"
  }

  render() {
    return <header>
      <div className="container">
        <Link id="logo" to="/">
          <Icon iconName="home" alt="Home"/>
        </Link>
        <div className="links">
          <a href={this.props.repo} target="_blank">Github</a>
          <a href={this.props.issues} target="_blank">Submit Feedback</a>
        </div>
      </div>
    </header>
  }
}
 
export default Header