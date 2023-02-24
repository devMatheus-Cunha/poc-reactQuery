import React from "react";

import { Route, Routes } from "react-router-dom";

// Pages
import { Home } from "pages";

export const RoutesProject = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
