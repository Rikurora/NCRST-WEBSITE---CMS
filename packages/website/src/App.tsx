import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Science from "./pages/Science";
import Technology from "./pages/Technology";
import Innovation from "./pages/Innovation";
import InnovationHub from "./pages/InnovationHub";
import Resources from "./pages/Resources";
import Councils from "./pages/Councils";
import BiosafetyCoun from "./pages/BiosafetyCoun";
import SpaceScienceCoun from "./pages/SpaceScienceCoun";
import IKS from "./pages/IKS";
import Procurement from "./pages/Procurement";
import Vacancies from "./pages/Vacancies";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/science" element={<Science />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/technology" element={<Technology />} />
          <Route
            path="/innovation/innovators-hub"
            element={<InnovationHub />}
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/councils" element={<Councils />} />
          <Route path="/councils/biosafety" element={<BiosafetyCoun />} />
          <Route
            path="/councils/space-science"
            element={<SpaceScienceCoun />}
          />
          <Route path="/councils/iks" element={<IKS />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
