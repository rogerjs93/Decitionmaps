import React from 'react';
import './MapPreview.css';
import MapRenderer from './MapRenderer';

const MapPreview = ({ map, onDownload, onShare }) => {
  return (
    <div className="map-preview">
      <h3>{map.title}</h3>
      <div className="map-container">
        {map.diagram ? (
          <MapRenderer diagram={map.diagram} />
        ) : (
          <img src={map.image} alt={map.title} className="map-image" />
        )}
      </div>
      <div className="map-actions">
        <button onClick={() => onDownload(map)}>Download</button>
        <button onClick={() => onShare(map)}>Share</button>
      </div>
    </div>
  );
};

export default MapPreview;
