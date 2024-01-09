import Router from "./Router";
import { EventsContext } from '../src/components/EventsContext';
import { useState, useEffect } from "react";
import { placesMock } from "./components/placesListMock";

function App() {

  const [eventsList, setEventsList] = useState([])

  useEffect(() => {
    setEventsList(placesMock)
  }, [])

  return (
    <EventsContext.Provider value={eventsList}>
      <div className="App">
        <Router />
      </div>
    </EventsContext.Provider>
    
  );
}

export default App;
