import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server.js";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Vans from "./pages/Vans/Vans";
import Vandetail from "./pages/Vans/Vandetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard/Dashboard.jsx";
import Income from "./pages/Host/Income/Income.jsx";
import Reviews from "./pages/Host/Reviews/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./pages/Host/HostVan/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVan/HostVanDetail.jsx";
import HostVanInfo from "./pages/Host/HostVan/HostVanInfo.jsx";
import HostVanPhoto from "./pages/Host/HostVan/HostVanPhoto.jsx";
import HostVanPricing from "./pages/Host/HostVan/HostVanPricing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Vandetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans/>} />
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo/>} />
              <Route path="pricing" element={<HostVanPricing/>} />
              <Route path="photos" element={<HostVanPhoto/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
