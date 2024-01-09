import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import EventPage from "./components/eventPage/EventPage";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route index path="/:eventId" element={<EventPage />} />  
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;