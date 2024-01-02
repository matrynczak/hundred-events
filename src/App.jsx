import Router from "./Router";
import { EventsContext } from '../src/components/EventsContext';
import { useState } from "react";

function App() {

  const [eventsList, setEventsList] = useState([])

  return (
    <EventsContext.Provider value={[eventsList, setEventsList]}>
      <div className="App">
        <Router />
      </div>
    </EventsContext.Provider>
    
  );
}

export default App;
