import React from 'react';
import { Search, X } from 'lucide-react';

const h = React.createElement;
const PRESET_TAGS = ['goal', 'leadership', 'direction', 'nature', 'technology'];

export default function SearchBar({ searchTerm, onSearchChange, onSearchSubmit, activePreset, onSelectPreset }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchTerm);
    }
  };

  return h('div', { className: 'search-section' },
    h('form', { onSubmit: handleSubmit, className: 'search-bar-wrapper' },
      h(Search, { className: 'search-icon-left', size: 20 }),
      h('input', {
        type: 'text',
        className: 'search-input',
        placeholder: 'Search high-res images (e.g. goal, leadership, direction)...',
        value: searchTerm,
        onChange: (e) => onSearchChange(e.target.value)
      }),
      searchTerm && h('button', {
        type: 'button',
        className: 'search-clear-btn',
        onClick: () => {
          onSearchChange('');
          if (onSearchSubmit) onSearchSubmit('');
        },
        title: 'Clear search'
      }, h(X, { size: 16 }))
    ),
    h('div', { className: 'preset-tags' },
      h('span', { className: 'preset-tag-label' }, 'Popular topics:'),
      PRESET_TAGS.map((tag) =>
        h('button', {
          key: tag,
          type: 'button',
          className: `preset-tag ${activePreset === tag ? 'active' : ''}`,
          onClick: () => onSelectPreset(tag)
        }, `#${tag}`)
      )
    )
  );
}
