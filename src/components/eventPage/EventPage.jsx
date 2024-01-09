import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { EventsContext } from '../EventsContext';
import Gallery from '../gallery/Gallery';
import Header from '../header/Header';
import './EventPage.scss';

const EventPage = () => {
    const { eventId } = useParams();

    const eventsList = useContext(EventsContext);
    const [event, setEvent] = useState(null);

    useEffect(() => {
      const selectedEvent = eventsList.find(e => e.urlId === eventId);
      setEvent(selectedEvent)
    }, [eventId])

    const renderArticleContent = () => {
        return (
            <div className='article-content'>
                {
                event.descLong.map((p) => (
                    <section className='article-section'>
                        <h2 className='section-title'>
                            {p.title}
                        </h2>
                        <p>
                            {p.text}
                        </p>
                        <hr></hr>
                    </section>
                    
                ))
                }
                
            </div>
            
        )
    }

    const renderArticleSources = () => {
        return (
            <ul className='article-sources'>
                <hr></hr>
                <h3>Zródła:</h3>
                {
                event.source.map((p) => (
                    <li className='article-source-single'>
                        <p>
                            {p}
                        </p>
                    </li>
                ))
                }
            </ul>
        )
    }

    const renderImages = () => {
        return <Gallery images={event.images} />
    }

    return (
        <div className='article'>
            <Header />
            <div className='article-body'>
                { event && <h1 className='article-title'>{event.title}</h1> }
                { event && renderArticleContent() }
                { event && renderImages() }
                { event && renderArticleSources() }
            </div>
        </div>
        
       
    )
}

export default EventPage;