import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
