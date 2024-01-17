import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import StudentsTable from "./Components/StudentsTable/StudentsTable";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <NavBar />
      <HeroSection />
      <StudentsTable />
      <Footer />
    </div>
  );
};

export default App;
