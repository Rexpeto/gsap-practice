import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen py-8 w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
