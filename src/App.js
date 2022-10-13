import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MyStory from "./components/MyStory";
import Sponsors from "./components/Sponsors";
import Privacy from "./components/Privacy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home showAbout={showAbout} toggleAbout={toggleAbout} />}
          />
          {!showAbout && <Route path="/about" element={<About />} />}
          <Route path="/contact" element={<Contact />} />
          <Route path="/mystory" element={<MyStory />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        {showAbout && <About toggleAbout={toggleAbout} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
