import './Homepage.scss';
import Map from '../map/Map';
import PlacesList from '../PlacesList/PlacesList';
import { useContext, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { EventsContext } from '../EventsContext';

const Homepage = () => {

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = (place) => setSelectedPlace(place);

  const eventsList = useContext(EventsContext);

  return (
    <div className="homepage">
      <Header />
      <div className='page-content'>
        <PlacesList places={eventsList} selectedPlace={selectedPlace} handleSelectedPlace={handleSelectedPlace}/>
        <Map places={eventsList} selectedPlace={selectedPlace} handleSelectedPlace={handleSelectedPlace}/>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
