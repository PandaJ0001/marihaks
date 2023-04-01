import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Results from "./pages/Results";
import Admin from "./pages/Admin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
