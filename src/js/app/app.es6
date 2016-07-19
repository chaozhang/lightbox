import React from 'react'
import Router from 'react-router'
import Home from './pages/home.es6'
import About from './pages/about.es6'
import Footer from './components/footer.es6'
import Header from './components/header.es6'
import Nav from './components/nav.es6'
import Pages from './enums/pages.es6'


var { Route, DefaultRoute, RouteHandler } = Router
 
class App extends React.Component {

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
    <Route name={Pages.ABOUT.getValue()} handler={About}/>
  </Route>
)

Router.run(routes, (Handler) => 
  React.render(<Handler/>, document.body)
)