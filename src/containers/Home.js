import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.js';
import ImagesGrid from '../components/ImagesGrid.js';
import Loading from '../components/Loading.js';
import { fetchImages, fetchDefaultPresetImages } from '../services/api.js';

const h = React.createElement;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePreset, setActivePreset] = useState('');
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchDefaultPresetImages(['goal', 'leadership', 'direction']).then((data) => {
      if (isMounted) {
        setImages(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearchSubmit = async (query) => {
    if (!query || query.trim() === '') {
      setActivePreset('');
      setLoading(true);
      const data = await fetchDefaultPresetImages(['goal', 'leadership', 'direction']);
      setImages(data);
      setLoading(false);
      return;
    }

    setLoading(true);
    const data = await fetchImages(query);
    setImages(data);
    setLoading(false);
  };

  const handleSelectPreset = async (tag) => {
    setActivePreset(tag);
    setSearchTerm(tag);
    setLoading(true);
    const data = await fetchImages(tag);
    setImages(data);
    setLoading(false);
  };

  return h('div', { className: 'content home' },
    h('div', { className: 'container' },
      h(SearchBar, {
        searchTerm,
        onSearchChange: setSearchTerm,
        onSearchSubmit: handleSearchSubmit,
        activePreset,
        onSelectPreset: handleSelectPreset
      }),
      loading ? h(Loading) : h(ImagesGrid, { images })
    )
  );
}
