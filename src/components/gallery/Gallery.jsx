import './Gallery.scss';
import ImageZoom from '../imageZoom/ImageZoom';
import { useState } from 'react';

const Gallery = ({images}) => {

    const [selectedImageToZoom, setSelectedImageToZoom] = useState(null); 

    const handleImageZoom = (index) => {
        setSelectedImageToZoom(index)
    }

  const renderImages = () => {
    return (
            <ul className='gallery-container'>
                {
                    images.map((i, index) => (
                        <li className='single-image' onClick={()=>handleImageZoom(index)}>
                            <img className='single-image-picture' src={i.original}/>
                            <h5>{i.title}</h5>
                            { selectedImageToZoom === index && <ImageZoom image={i} handleImageZoom={handleImageZoom}/> }
                        </li>
                    ))
                }
            </ul> 
    )
  }

  return (
    <div>
        {renderImages()}
    </div>

  );
}

export default Gallery;