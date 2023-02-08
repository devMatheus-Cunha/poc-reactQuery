import React from "react";

import { Route, Routes } from "react-router-dom";

// Pages
import { Home, Company, Number } from "pages";

export const RoutesProject = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/:companyId" element={<Company />} />
      <Route path="/number/:numberId" element={<Number />} />
    </Routes>
  );
};
