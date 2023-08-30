import './App.css';
import Home from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetList from "./AssetList";
import MissionStatement from "./MissionStatement";
import Requests from "./Requests";
import Packages from "./Packages";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asset_list" element={<AssetList />} />
        <Route path="/mission_statement" element={<MissionStatement />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Router>
  );
}

export default App;
