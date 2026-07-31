import React from 'react';
import { Camera, Github, MessageSquarePlus } from 'lucide-react';

const h = React.createElement;

export default function Header({ 
  repo = "https://github.com/chaozhang/lightbox", 
  issues = "https://github.com/chaozhang/lightbox/issues/new" 
}) {
  return h('header', { className: 'header' },
    h('div', { className: 'container header-container' },
      h('a', { href: '#/', className: 'brand-logo', title: 'Lightbox Home' },
        h('div', { className: 'brand-icon' }, h(Camera, { size: 20 })),
        h('span', null, 'Lightbox')
      ),
      h('div', { className: 'header-links' },
        h('a', { href: repo, target: '_blank', rel: 'noopener noreferrer', className: 'header-link' },
          h(Github, { size: 16 }),
          h('span', null, 'GitHub')
        ),
        h('a', { href: issues, target: '_blank', rel: 'noopener noreferrer', className: 'header-link' },
          h(MessageSquarePlus, { size: 16 }),
          h('span', null, 'Submit Feedback')
        )
      )
    )
  );
}
