import './App.css';
import Map from './components/map/Map';
import PlacesList from './components/PlacesList/PlacesList';
import { placesMock } from '../src/components/placesListMock';
import { useState } from 'react';
import Header from './components/header/Header';

function App() {

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = (place) => setSelectedPlace(place);

  return (
    <div className="App">
      <Header />
      <div className='page-content'>
        <PlacesList places={placesMock} selectedPlace={selectedPlace} handleSelectedPlace={handleSelectedPlace}/>
        <Map places={placesMock} selectedPlace={selectedPlace} handleSelectedPlace={handleSelectedPlace}/>
      </div>
      
    </div>
  );
}

export default App;
