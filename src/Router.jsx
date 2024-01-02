import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          {/* <Route index path="/:id" element={<EventPage />} />   */}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;