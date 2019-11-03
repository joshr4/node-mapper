import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

const PMSI_LAYER =
  'https://egis.hntb-tsc.com/arcgis/rest/services/PMSI_PCV/PMSI_SEGMENTS/FeatureServer/0';

export const WebMapView = () => {
  const mapRef = useRef();

  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(
      ['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'],
      { css: true }
    ).then(([ArcGISMap, MapView, FeatureLayer]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector',
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-118, 34],
        zoom: 8,
      });

      const PMSILayer = new FeatureLayer({
        url: PMSI_LAYER,
      });

      map.add(PMSILayer);

      return () => {
        if (view) {
          // destroy the map view
          view.container = null;
        }
      };
    });
  });

  return <div className="webmap" ref={mapRef} />;
};
