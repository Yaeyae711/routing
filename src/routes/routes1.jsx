import React from "react";
import Navbar from "../components/navbar";
import { Routes, Route } from "react-router-dom";
import Mounting from "../components/mounting";
import Unmouting from "../components/unmouting";
import Updating from "../components/updating";

const Routes1 = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/mounting" element={<Mounting />} />
        <Route path="/unmouting" element={<Unmouting />} />
        <Route path="/updating" element={<Updating />} />
      </Routes>
    </div>
  );
};

export default Routes1;
