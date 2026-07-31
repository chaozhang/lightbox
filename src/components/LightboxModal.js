import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const h = React.createElement;

export default function LightboxModal({ images = [], selectedIndex = 0, onClose, onNavigate }) {
  const currentImg = images[selectedIndex];

  const handlePrev = useCallback(() => {
    if (selectedIndex > 0) {
      onNavigate(selectedIndex - 1);
    }
  }, [selectedIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (selectedIndex < images.length - 1) {
      onNavigate(selectedIndex + 1);
    }
  }, [selectedIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, handlePrev, handleNext]);

  if (!currentImg) return null;

  return h('div', {
    className: 'lightbox-backdrop',
    onClick: onClose,
    role: 'dialog',
    'aria-modal': 'true'
  },
    h('div', {
      className: 'lightbox-modal',
      onClick: (e) => e.stopPropagation()
    },
      // Modal Header
      h('div', { className: 'lightbox-header' },
        h('div', { className: 'lightbox-title-group' },
          h('span', { className: 'lightbox-counter' }, `${selectedIndex + 1} of ${images.length}`)
        ),
        h('button', {
          className: 'lightbox-close-btn',
          onClick: onClose,
          title: 'Close modal (Esc)'
        }, h(X, { size: 20 }))
      ),
      // Modal Body
      h('div', { className: 'lightbox-body' },
        h('button', {
          className: 'lightbox-nav-btn prev',
          onClick: handlePrev,
          disabled: selectedIndex === 0,
          title: 'Previous image (Left Arrow)'
        }, h(ChevronLeft, { size: 28 })),
        h('div', { className: 'lightbox-image-wrapper' },
          h('img', {
            src: currentImg.link,
            alt: currentImg.title || 'Lightbox detail view',
            onError: (e) => {
              e.target.src = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80';
            }
          })
        ),
        h('button', {
          className: 'lightbox-nav-btn next',
          onClick: handleNext,
          disabled: selectedIndex === images.length - 1,
          title: 'Next image (Right Arrow)'
        }, h(ChevronRight, { size: 28 }))
      ),
      // Modal Footer
      h('div', { className: 'lightbox-footer' },
        h('p', { className: 'lightbox-caption' }, currentImg.title || 'Untitled Image'),
        currentImg.link && h('a', {
          href: currentImg.contextLink || currentImg.link,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'lightbox-action-link'
        },
          h('span', null, 'View Source'),
          h(ExternalLink, { size: 14 })
        )
      )
    )
  );
}
