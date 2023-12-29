import './Tooltip.scss';
import { useState } from 'react';

const Tooltip = ({place, tooltipList, handleSingleTooltipSelection, handleTooltipPreview}) => {

    const [tooltipDisplay, setTooltipDisplay] = useState(true);

    const handleTooltipClose = () => {
        setTooltipDisplay(false)
        handleSingleTooltipSelection(!tooltipList)
    }

    return (
        tooltipDisplay && <div className="tooltip-wrapper" data-id={`${place.name}`}>
            <div className='tooltip-close-wrapper'>
                <span className='close-icon' onClick={handleTooltipClose}>X</span>
            </div>
            <span className="tooltip-event-title" onClick={() => handleTooltipPreview(place)}>{place.title}</span>        
        </div>
    )
}

export default Tooltip;