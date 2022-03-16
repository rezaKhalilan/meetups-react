import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import MainNavigation from "./layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetUps />} />
        <Route path="/new-meetups" element={<NewMeetUps />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
