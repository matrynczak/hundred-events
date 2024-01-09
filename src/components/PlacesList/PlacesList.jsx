import './PlacesList.scss';
import { getArrayWithoutDuplicates } from '../../utils/helpers';

const PlacesList = ({places, selectedPlace, handleSelectedPlace}) => {
    const placesOnly = places.map(p => p.name);
    const placesWithoutDuplicates = getArrayWithoutDuplicates(placesOnly)

    const getPlacesList = () => {
        return (
            <ul className='places-side-list'>
                {
                placesWithoutDuplicates.map((p, index) => (
                    <li key={index} className={`single-place-side ${selectedPlace === p ? 'active-place' : ''}`} onClick={()=>handleSelectedPlace(p)}>
                        <span className='side-place-name'>{p}</span>
                    </li>
                ))
                }
            </ul>
        )
    }

    return (
        <div className="places-side-list-wrapper">
            {getPlacesList()}
        </div>

    )   
}

export default PlacesList;