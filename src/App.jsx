import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Services from "./pages/Services";
// import WhyChooseUs from "./pages/WhyChooseUs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/why-choose-us" element={<WhyChooseUs />} /> */}
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;
