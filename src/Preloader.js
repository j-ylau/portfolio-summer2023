import React from "react";
import "./App.css";
import "./Preloader.css";
function Preloader() {

  return (
    <div className="App">
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </div>
  );
}

export default Preloader;
