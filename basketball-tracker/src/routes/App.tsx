import React from "react";
import { Route, Routes } from "react-router";
import { Results } from "./Results";
import { Home } from "./Home";

export const App: React.FC = () => (
  <Routes>
    <Route path="/results/:teamId" element={<Results />} />
    <Route path="/" element={<Home />} />
  </Routes>
);
