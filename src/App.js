import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BaseButton from "./components/BaseButton";
import SelectFile from "./components/SelectFile";

function App() {
  return (
    <>
      <div>
        <h2>uploading image</h2>
        <div className="btn">
          {/* {} */}
          <div className="fetch-btn">
            <div>
              <SelectFile>
                <BaseButton
                  name="POST"
                  icon="UploadFileSharpIcon"
                  color="info"
                  valient="contained"
                  hidden
                />
              </SelectFile>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
