import React from 'react';
import MapPreview from './MapPreview';
import './MapGallery.css';

const MapGallery = ({ maps, onDownload, onShare }) => {
  return (
    <div className="map-gallery">
      {maps.map((map) => (
        <MapPreview
          key={map.id}
          map={map}
          onDownload={onDownload}
          onShare={onShare}
        />
      ))}
    </div>
  );
};

export default MapGallery;
