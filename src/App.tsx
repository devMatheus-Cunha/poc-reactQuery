import React from "react";
import { BrowserRouter } from "react-router-dom";

// Routes
import { RoutesProject } from "routes";

function App() {
  return (
    <BrowserRouter basename="/">
      <RoutesProject />
    </BrowserRouter>
  );
}

export default App;
