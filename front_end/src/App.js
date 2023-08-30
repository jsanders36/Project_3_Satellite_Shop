import './App.css';
import Home from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetList from "./AssetList";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asset_list" element={<AssetList />} />
      </Routes>
    </Router>
  );
}

export default App;
