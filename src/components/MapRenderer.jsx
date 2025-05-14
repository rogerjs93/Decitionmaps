import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import './MapRenderer.css';

const MapRenderer = ({ diagram }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!diagram) {
      console.warn('No diagram data provided to MapRenderer.');
      return;
    }

    const renderDiagram = async () => {
      try {
        // Configure mermaid with safe defaults
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          theme: 'default'
        });

        // Generate unique ID for this diagram
        const uniqueId = `mermaid-${Math.random().toString(36).substring(2)}`;

        // Create a temporary container for mermaid parsing
        const tempContainer = document.createElement('div');
        tempContainer.style.display = 'none';
        document.body.appendChild(tempContainer);

        // Generate SVG
        const { svg } = await mermaid.render(uniqueId, diagram);

        // Clean up temp container
        document.body.removeChild(tempContainer);

        // Update the visible container with SVG
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="color: red; padding: 20px; text-align: left;">
              <p>Failed to render diagram. Error details:</p>
              <pre style="background: #f8f8f8; padding: 10px; border-radius: 4px;">
                ${error.message || 'Unknown error'}
              </pre>
            </div>`;
        }
      }
    };

    renderDiagram();
  }, [diagram]);

  return <div ref={containerRef} className="map-renderer"></div>;
};

export default MapRenderer;
