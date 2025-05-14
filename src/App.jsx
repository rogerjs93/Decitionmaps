import React, { useState } from 'react';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import MapGallery from './components/MapGallery';
import conceptualMaps from './data/conceptualMaps.json';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = Object.keys(conceptualMaps);
  const maps =
    selectedCategory === 'All'
      ? Object.values(conceptualMaps).flat()
      : conceptualMaps[selectedCategory];

  const filteredMaps =
    selectedCategory === 'All'
      ? maps
      : maps.filter((map) => map.category === selectedCategory);

  const handleDownload = (map) => {
    console.log(`Downloading ${map.title}`);
  };

  const handleShare = (map) => {
    console.log(`Sharing ${map.title}`);
  };

  return (
    <div className="app">
      <Header />
      <CategoryList
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      <MapGallery
        maps={filteredMaps}
        onDownload={handleDownload}
        onShare={handleShare}
      />
    </div>
  );
};

export default App;
