
import React from 'react';
import Map from '@/components/Map';

const MapPlaceholder = () => {
  return (
    <section id="map" className="py-20 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-eco-light-green text-eco-green text-sm font-medium mb-4">
            Carte Interactive
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trouvez facilement les options écologiques</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Localisez en temps réel les stations Vélib', les bornes de recharge électrique et planifiez vos trajets écologiques.
          </p>
        </div>
        
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-10">
            <Map />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Notre carte interactive utilise les données des transports en commun pour vous offrir l'expérience la plus complète possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapPlaceholder;
