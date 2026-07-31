import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Home from './containers/Home.js';
import About from './containers/About.js';

const h = React.createElement;

function getTabFromHash() {
  const hash = window.location.hash.toLowerCase();
  if (hash.includes('about')) {
    return 'about';
  }
  return 'home';
}

export default function App() {
  const [currentTab, setCurrentTab] = useState(getTabFromHash);

  // Sync state with hash changes and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentTab(getTabFromHash());
    };

    // Ensure default hash is present if empty
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSelectTab = (tabId) => {
    const newHash = tabId === 'about' ? '#/about' : '#/';
    window.location.hash = newHash;
    setCurrentTab(tabId);
  };

  return h('div', { className: 'app-wrapper' },
    h(Header),
    h(Nav, { currentTab, onSelectTab: handleSelectTab }),
    h('main', { className: 'main-content' },
      currentTab === 'home' && h(Home),
      currentTab === 'about' && h(About)
    ),
    h(Footer)
  );
}
