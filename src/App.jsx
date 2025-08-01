import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <div className="font-lexend flex flex-col w-full min-h-screen ">
      <Navbar />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
);
};

export default App;
