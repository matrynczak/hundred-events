import { useState } from 'react';
import './Preview.scss';

const Preview = ({selectedTooltipToPreview, handleTooltipPreview}) => {

    const [closeClicked, setCloseClicked] = useState(false);

    const handlePreviewCloseWithAnimation = () => {
        if(closeClicked) handleTooltipPreview(null);
    }

    const handleCloseClick = () => {
        setCloseClicked(!closeClicked)
    }

    return (
        <div className={`preview-container ${closeClicked ? 'animation-out' : 'animation-in'}`} onAnimationEnd={handlePreviewCloseWithAnimation}>
            <span className='preview-back'>
                <img src={require('../images/right-arrow.png')} onClick={handleCloseClick}></img>
            </span>
            <div className='preview-content'>
                <span className='preview-title'>
                    {selectedTooltipToPreview.title}
                </span>
                <span className='preview-more-link'>
                    Dowiedz się więcej...
                </span>
                <span className='preview-place'>
                    <span>Miejsce</span>
                    <span>{selectedTooltipToPreview.name}</span>
                </span>
                <span className='preview-year'>
                    <span>Rok</span>
                    <span>{selectedTooltipToPreview.year}</span>
                </span>
                <span className='preview-desc'>
                    {selectedTooltipToPreview.description}
                </span>
            </div>
            
            
        </div>
    )
}

export default Preview;