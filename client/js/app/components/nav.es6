import React from 'react'
import Router from 'react-router'

var {Link} = Router
 
class Header extends React.Component {
  static defaultProps = {
    navItems: [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'About',
        url: '/about'
      }
    ]
  }

  getNavItems() {
    var naveItems = [], item;

    this.props.navItems.forEach((itemData, index) => {
      item = <li>
        <Link to={itemData.url}>{itemData.name}</Link>
      </li>;

      naveItems.push(item);
    });

    return naveItems;
  }

  render() {
    return <nav>
      <ul>
        {this.getNavItems()}
      </ul>
    </nav>
  }
}
 
export default Header