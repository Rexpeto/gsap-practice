import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen py-8 w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
