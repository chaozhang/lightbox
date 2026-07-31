import React, { useState } from 'react';
import LightboxModal from './LightboxModal.js';

const h = React.createElement;

export default function ImagesGrid({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images || images.length === 0) {
    return h('div', { className: 'loading-state' },
      h('p', null, 'No images found. Try searching for a different keyword!')
    );
  }

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  return h('div', { className: 'images-grid-section' },
    h('div', { className: 'images-grid-container' },
      images.map((item, index) =>
        h('div', {
          key: index,
          className: 'image-card',
          onClick: () => handleOpenLightbox(index),
          title: item.title
        },
          h('img', {
            src: item.link,
            alt: item.title || 'Search image',
            loading: 'lazy',
            onError: (e) => {
              e.target.src = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80';
            }
          }),
          h('div', { className: 'image-overlay' },
            h('span', { className: 'image-title' }, item.title)
          )
        )
      )
    ),
    selectedIndex !== null && h(LightboxModal, {
      images,
      selectedIndex,
      onClose: handleCloseLightbox,
      onNavigate: (newIndex) => setSelectedIndex(newIndex)
    })
  );
}
