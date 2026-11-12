
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/home/Hero";
import FeatureCards from "./sections/home/FeatureCards";
import Statistics from "./sections/home/Statistics";
import BrandStatement from "./sections/home/BrandStatement";
import CoursewareDevelopment from "./pages/CoursewareDevelopment";
import PerformanceSolutions from "./pages/PerformanceSolutions";

import AssistanceTrainingManagement from "./pages/AssistanceTrainingManagement";
import CustomizedSolutions from "./pages/CustomizedSolutions";
import CompanyLeadership from "./pages/CompanyLeadership";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import OurExperience from "./pages/OurExperience";



import "./styles/global.css";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeatureCards />
        <Statistics />
        <BrandStatement />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/performance-solutions"
          element={<PerformanceSolutions />}
        />

        <Route
          path="/courseware-development"
          element={<CoursewareDevelopment />}
        />

        <Route
          path="/assistance-training-management"
          element={<AssistanceTrainingManagement />}
        />

        <Route
          path="/learning-solutions"
          element={<CustomizedSolutions />}
        />

        <Route path="/careers" element={<Careers />} />

        <Route
          path="/leadership"
          element={<CompanyLeadership />}
        />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/experience" element={<OurExperience />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
