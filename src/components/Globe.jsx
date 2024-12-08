import React from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = ({ 
  height = 326, 
  width = 326, 
  backgroundColor = 'rgba(0, 0, 0, 0)', 
  backgroundImageOpacity = 0.5,
  showAtmosphere = true,
  showGraticules = true,
  globeImageUrl = '//unpkg.com/three-globe/example/img/earth-night.jpg',
  bumpImageUrl = '//unpkg.com/three-globe/example/img/earth-topology.png',
  labelsData = [{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]
}) => {
  return (
    <Globe
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      backgroundImageOpacity={backgroundImageOpacity}
      showAtmosphere={showAtmosphere}
      showGraticules={showGraticules}
      globeImageUrl={globeImageUrl}
      bumpImageUrl={bumpImageUrl}
      labelsData={labelsData}
    />
  );
};

export default GlobeComponent;
