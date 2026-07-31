import React, { useState } from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Home from './containers/Home.js';
import About from './containers/About.js';

const h = React.createElement;

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  return h('div', { className: 'app-wrapper' },
    h(Header),
    h(Nav, { currentTab, onSelectTab: setCurrentTab }),
    h('main', { className: 'main-content' },
      currentTab === 'home' && h(Home),
      currentTab === 'about' && h(About)
    ),
    h(Footer)
  );
}
