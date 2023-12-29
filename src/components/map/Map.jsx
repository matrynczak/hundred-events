import Mapa from '../images/mapa.svg';
import Places from '../events/Places';
import './Map.scss';

const Map = ({places, selectedPlace, handleSelectedPlace}) => {

    return (
        <div className='map-container'>
            <img className='map-image' src={Mapa}></img>
            <Places places={places} selectedPlace={selectedPlace} handleSelectedPlace={handleSelectedPlace}/>
        </div>
    )
}

export default Map;