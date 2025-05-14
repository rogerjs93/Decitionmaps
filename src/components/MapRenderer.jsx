import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import './MapRenderer.css';

// Initialize mermaid once with default configuration
if (typeof window !== 'undefined') {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
    },
    fontFamily: 'system-ui, -apple-system, sans-serif',
  });
}

const MapRenderer = ({ diagram }) => {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!diagram || !containerRef.current) return;

      try {
        const uniqueId = `mermaid-${Math.random().toString(36).slice(2)}`;
        containerRef.current.innerHTML = '';
        containerRef.current.id = uniqueId;

        const element = document.createElement('div');
        element.innerHTML = diagram;
        containerRef.current.appendChild(element);

        await mermaid.parse(diagram);
        const { svg } = await mermaid.render(uniqueId, diagram);
        
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
        setError(null);
      } catch (err) {
        console.error('Error rendering diagram:', err);
        setError(err.message || 'Failed to render diagram');
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="error-message">
              <p>Failed to render diagram</p>
              <pre>${err.message || 'Unknown error'}</pre>
              <p>Diagram source:</p>
              <pre>${diagram}</pre>
            </div>
          `;
        }
      }
    };

    renderDiagram();
  }, [diagram]);

  return (
    <div className="map-renderer-container">
      <div ref={containerRef} className="map-renderer" />
      {error && (
        <div className="error-overlay">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default MapRenderer;
