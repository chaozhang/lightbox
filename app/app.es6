import React, {Component} from 'react';
import Router from 'react-router'
import Home from './containers/home.es6'
import About from './containers/about.es6'
import Footer from './components/footer.es6'
import Header from './components/header.es6'
import Nav from './components/nav.es6'
import Page from './enums/page.es6'


var { Route, DefaultRoute, RouteHandler } = Router
 
class App extends Component {

  render() {
    return <div className='bodywrap'>
      <Header/>
      <Nav/>
      <div id='main'>
        <RouteHandler/>
      </div>
      <Footer/>
    </div>
  }
}

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name={Page.ABOUT.getValue()} handler={About}/>
  </Route>
)

Router.run(routes, (Handler) => 
  React.render(<Handler/>, document.getElementById('app'))
)