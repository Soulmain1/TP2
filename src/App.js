import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import NosotrosPages from "./pages/NosotrosPages";
import LoginPages from "./pages/LoginPages";
import ViewPages from "./pages/ViewPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/nosotros" element={<NosotrosPages />} />
      <Route path="/login" element={<LoginPages />} />
      <Route path="/view" element={<ViewPages />} />
    </Routes>
  );
}

export default App;
