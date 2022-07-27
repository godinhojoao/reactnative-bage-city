import React, { createContext } from 'react';

const DEFAULT_VALUE = {
  setLocations: () => { },
  locations: []
};
const LocationsContext = createContext(DEFAULT_VALUE);

function LocationsProvider(props) {
  const { children, locations,  setLocations} = props;

  return (
    <LocationsContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationsContext.Provider>
  );
}

export { LocationsContext, LocationsProvider };