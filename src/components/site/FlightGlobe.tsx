import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

export function FlightGlobe() {
  const globeRef = useRef<any>();
  const [arcsData, setArcsData] = useState<any[]>([]);

  useEffect(() => {
    // Generate flight paths starting from Islamabad (ISB)
    const ISB_LAT = 33.5489;
    const ISB_LNG = 73.1544;
    
    const N = 15;
    const arcs = [...Array(N).keys()].map((i) => {
      const isLanding = i % 2 === 0;
      return {
        startLat: isLanding ? (Math.random() - 0.5) * 160 : ISB_LAT,
        startLng: isLanding ? (Math.random() - 0.5) * 360 : ISB_LNG,
        endLat: isLanding ? ISB_LAT : (Math.random() - 0.5) * 160,
        endLng: isLanding ? ISB_LNG : (Math.random() - 0.5) * 360,
        color: isLanding ? '#00B4D8' : '#FF7F11'
      };
    });
    setArcsData(arcs);

    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = false;
      // Point the initial view towards Pakistan
      globeRef.current.pointOfView({ lat: 20, lng: 73, altitude: 2.5 }, 1000);
    }
  }, []);

  return (
    <div className="w-full h-full opacity-80 pointer-events-none select-none flex items-center justify-center scale-125 md:scale-150">
      <Globe
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#00B4D8"
        atmosphereDaylightOpacity={0.3}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={arcsData.map(d => ({ lat: d.startLat, lng: d.startLng }))}
        pointColor={() => '#00B4D8'}
        pointAltitude={0.01}
        pointRadius={0.5}
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={4}
        arcDashAnimateTime={2000}
        arcStroke={0.5}
        width={600}
        height={600}
      />
    </div>
  );
}
