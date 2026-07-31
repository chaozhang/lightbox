import React from 'react';

const h = React.createElement;

export default function Footer({
  git = {
    userName: 'chaozhang',
    repoName: 'lightbox',
    btnTypes: [
      { name: 'follow', size: '170px' },
      { name: 'star', size: '90px' },
      { name: 'fork', size: '90px' },
      { name: 'watch', size: '100px' }
    ]
  }
}) {
  const currentYear = new Date().getFullYear();

  return h('footer', { className: 'footer' },
    h('div', { className: 'container' },
      h('div', { className: 'footer-social' },
        git.btnTypes.map((type) => {
          const src = `https://ghbtns.com/github-btn.html?user=${git.userName}&repo=${git.repoName}&type=${type.name}&count=true&v=2`;
          return h('iframe', {
            key: type.name,
            src,
            frameBorder: '0',
            scrolling: '0',
            width: type.size,
            height: '20px',
            title: `GitHub ${type.name} button`
          });
        })
      ),
      h('p', null, `Copyright © ${currentYear}, All rights reserved.`),
      h('p', null,
        'Created and maintained by ',
        h('a', {
          href: 'https://github.com/chaozhang/',
          target: '_blank',
          rel: 'noopener noreferrer',
          style: { color: 'var(--accent-secondary)' }
        }, 'Chao Zhang'),
        ' (Principal Software Engineer at Workday).'
      )
    )
  );
}
