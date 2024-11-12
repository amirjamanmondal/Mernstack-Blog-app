import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>hello world</>} />
      </Routes>
    </>
  );
}

export default App;
