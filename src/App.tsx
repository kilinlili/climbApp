import React, { useState, useEffect } from "react";
import "./App.css";
import SelectFile from "./components/modules/SelectFile";
import { SlideHeader } from "./components/modules/header";

function App() {
  return (
    <>
      <SlideHeader/>
      <div>
        <h2>uploading image</h2>
        <div className="btn">
          {/* {} */}
          <div className="fetch-btn">
            <div>
              <SelectFile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
