import React from 'react';
import { Linkedin, Briefcase, Code2, MapPin } from 'lucide-react';

const h = React.createElement;

export default function About() {
  return h('div', { className: 'content about' },
    h('div', { className: 'container' },
      h('div', { className: 'about-card' },
        h('div', { className: 'about-header' },
          h('div', { className: 'avatar-placeholder' }, 'CZ'),
          h('div', null,
            h('h2', { style: { fontFamily: 'var(--font-heading)', fontSize: '1.6rem' } }, 'Chao Zhang'),
            h('p', {
              style: {
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '0.2rem'
              }
            },
              h(Briefcase, { size: 16 }),
              h('span', null, 'Principal Software Engineer at Workday')
            )
          )
        ),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-main)' } },
          h('p', null, 'Passionate about building highly responsive, scalable web applications and intuitive visual user interfaces.'),
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' } },
            h(Code2, { size: 18, color: 'var(--accent-secondary)' }),
            h('span', null, 'Tech Stack: React 18, JavaScript / ES Modules, Modern Web APIs, CSS Design Systems')
          ),
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' } },
            h(MapPin, { size: 18, color: 'var(--accent-secondary)' }),
            h('span', null, 'San Francisco Bay Area, CA')
          ),
          h('div', { style: { marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' } },
            h('a', {
              href: 'https://www.linkedin.com/in/chao-zhang-29532710',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'header-link',
              style: { display: 'inline-flex', background: 'rgba(99, 102, 241, 0.15)', borderColor: 'var(--glass-border)' }
            },
              h(Linkedin, { size: 18, color: '#0a66c2' }),
              h('span', null, 'Connect on LinkedIn')
            )
          )
        )
      )
    )
  );
}
