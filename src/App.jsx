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
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Booking from "./components/Booking";
import ServiceArea from "./components/ServicesComponent/ServiceArea";
import TermsAndConditions from "./components/TermsAndConditions";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/serviceArea" element={<ServiceArea />} />
        </Route>

        <Route>
          <Route path="/booking" element={<Booking />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Route>
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
