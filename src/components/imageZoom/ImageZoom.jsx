import './ImageZoom.scss';
import { useEffect, useState } from 'react';

const ImageZoom = ({image, handleImageZoom}) => {

    const [zoomImageDisplay, setZoomImageDisplay] = useState(true);

    const handleZoomClose = () => {
        setZoomImageDisplay(false);
    }

    useEffect(()=>{
        if(!zoomImageDisplay) handleImageZoom(null);
    }, [zoomImageDisplay])

    return (
        zoomImageDisplay && <div className='zoom-container'>
            <div className='zoom-image-wrapper'>
                <div className='zoom-close-section'>
                    <span className='zoom-close-icon' onClick={handleZoomClose}>X</span>
                </div>
                <div className='image-data'>
                    <img className='image-zoom' src={image.original}></img>
                    <h5 className='zoom-image-title'>{image.title}</h5>
                </div>     
                <h6 className='zoom-image-source'>Źródło: {image.original}</h6>
            </div>
            
        </div>

    )
}

export default ImageZoom;