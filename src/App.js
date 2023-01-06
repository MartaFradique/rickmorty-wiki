import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListCharacters from "./pages/ListCharacters";
import About from "./pages/About";
import CharactersDetails from "./pages/CharactersDetails";
import bgImage from "./data/bg-image2.jpg";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "auto",
              width: "100vw",
              height: "100vh",
            }}
          >
            <div className="pb-24">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* dashboard */}
                <Route path="/" element={<ListCharacters />} />
                <Route path="/aboutUs" element={<About />} />
                <Route path="/details/:id" element={<CharactersDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
