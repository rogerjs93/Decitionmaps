import React, { useState } from 'react';
import './MapPreview.css';
import MapRenderer from './MapRenderer';

const MapPreview = ({ map, onDownload, onShare }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="map-preview">
      <h3>{map.title}</h3>
      <div className="map-container">
        {isLoading && <div className="loading">Loading diagram...</div>}
        <div style={{ opacity: isLoading ? 0 : 1 }}>
          {map.diagram ? (
            <MapRenderer
              diagram={map.diagram}
              onRender={() => setIsLoading(false)}
            />
          ) : (
            <img
              src={map.image}
              alt={map.title}
              className="map-image"
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </div>
      <div className="map-actions">
        <button onClick={() => onDownload(map)}>Download</button>
        <button onClick={() => onShare(map)}>Share</button>
      </div>
    </div>
  );
};

export default MapPreview;
