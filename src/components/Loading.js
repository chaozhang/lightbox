import React from 'react';

const h = React.createElement;

export default function Loading({ message = "Fetching images from Google Image API..." }) {
  return h('div', { className: 'loading-state' },
    h('div', { className: 'spinner' }),
    h('p', null, message)
  );
}
