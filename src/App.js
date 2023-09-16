import React from 'react';
import FarmStandList from './FarmStandList';
import Map from './Map';
import Filters from './Filters';

function App() {
  return (
    <div className="App">
      <Filters />
      <div className="content">
        <FarmStandList />
        <Map />
      </div>
    </div>
  );
}

export default App;
