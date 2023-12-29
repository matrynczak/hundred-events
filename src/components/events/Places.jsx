import './Places.scss';
import Tooltip from '../tooltip/Tooltip';
import Preview from '../preview/Preview';
import { useEffect, useState } from 'react';
import { getArrayWithoutDuplicates } from '../../utils/helpers';

const Places = ({places, selectedPlace, handleSelectedPlace}) => {

    const [selectedPointOnMap, setSelectedPointOnMap] = useState(null); 
    const [tooltipList, setTooltipList] = useState(false);
    const [selectedTooltipToPreview, setSelectedTooltipToPreview] = useState(null);

    const handleTooltipSelection = (index) => setSelectedPointOnMap(index);
        
    const handleSingleTooltipSelection = () =>  setTooltipList(!tooltipList);

    const handleTooltipPreview = (event) => setSelectedTooltipToPreview(event);

    useEffect(() => {
        const tooltipNum = document.querySelectorAll('.tooltip-wrapper');
        if(tooltipNum.length<1) { 
            setSelectedPointOnMap(null);
            handleSelectedPlace(null);
        }
    }, [tooltipList])

    useEffect(() => {
        if(selectedPlace !== null && selectedPointOnMap !== null) {handleSelectedPlace(null)}
    }, [selectedPointOnMap])

    useEffect(() => {
        if(selectedPointOnMap !== null && selectedPlace !== null) {setSelectedPointOnMap(null)}
    }, [selectedPlace])

    const renderTooltips = (list, name) => {
        const newList = [];
        list.forEach(i => {
            newList.push(i)
        })
        return (
            <ul className='tooltips-list'>
                <span className='tooltip-place'>{name}</span>
                {
                    list.map((el)=> (
                        name === el.name && 
                            <li className='tooltip-container'>
                                <Tooltip place={el}tooltipList={tooltipList} handleSingleTooltipSelection={handleSingleTooltipSelection} handleSelectedPlace={handleSelectedPlace} handleTooltipPreview={handleTooltipPreview}/>
                            </li>                
                        )                    
                    )
                }
            </ul>
        )
    }
    
    const getPlacesList = () => {
        const placesOnly = places.map(p => p.name);
        const placesWithoutDuplicates = getArrayWithoutDuplicates(placesOnly);

        let reducedPlacesArray = [];
        for(let i=0; i<places.length; i++) {
             if(places[i].name === placesWithoutDuplicates[i]) {
                reducedPlacesArray.push(places[i]);
             }
        }

        return (
            <ul className={`places-list-map ${selectedTooltipToPreview !== null ? 'preview-open' : ''}`}>
                {
                reducedPlacesArray.map((p, index) => (
                    <li key={index} className="single-place" style={{top: `${p.top}vw`, left: `${p.left}vw`}}>
                        <img className='point' src={require('../images/point.png')} onClick={()=> handleTooltipSelection(index)}></img>
                        { (selectedPlace === p.name || selectedPointOnMap === index) && renderTooltips(places, p.name) }
                    </li>
                ))
                }
            </ul>
        )
    }

    return (
        <div className="places-list-wrapper">
            {getPlacesList()}
            { selectedTooltipToPreview && <Preview selectedTooltipToPreview={selectedTooltipToPreview} handleTooltipPreview={handleTooltipPreview}/> }
        </div>

    )   
}

export default Places;