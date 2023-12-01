import React from 'react';
import Plot from 'react-plotly.js';

function MapComponent(){
  const data = [{
    type: 'scattergeo',
    locationmode: 'ISO-3',
    lon: [10, -20, 30, -40],
    lat: [30, -10, 20, -30],
    marker: {
      size: 10,
      color: 'rgb(255,0,0)',
      line: {
        width: 2,
        color: 'rgba(68, 68, 68, 0)'
      }
    }
  }];

  const layout = { geo: { projection: { type: 'mercator' } } };

  return (
    <div>
      <h2>MAP</h2>
      <Plot
        data = {data}
        layout = {layout}
        />
    </div>
  );
};

export default MapComponent;