import React from 'react';
import { Home as HomeIcon, User as UserIcon } from 'lucide-react';

const h = React.createElement;

export default function Nav({ currentTab, onSelectTab }) {
  const navItems = [
    { id: 'home', name: 'Home', icon: HomeIcon },
    { id: 'about', name: 'About', icon: UserIcon }
  ];

  return h('nav', { className: 'nav-bar' },
    h('div', { className: 'container nav-container' },
      navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = currentTab === item.id;
        return h('button', {
          key: item.id,
          onClick: () => onSelectTab(item.id),
          className: `nav-item ${isActive ? 'active' : ''}`
        },
          h(IconComponent, { size: 16 }),
          h('span', null, item.name)
        );
      })
    )
  );
}
