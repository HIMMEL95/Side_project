import "./App.css";
import React from "react";
import MainHeader from "./common/layout/MainHeader";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
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
