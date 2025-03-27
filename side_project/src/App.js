import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MainHeader from "./common/layout/MainHeader";
import MainContent from "./common/layout/MainContent";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
