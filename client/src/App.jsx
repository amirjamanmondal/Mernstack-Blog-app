import { Route, Routes } from "react-router-dom";
import Home from "./pages/User/Home";

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/signup" element={<h1>signup</h1>} />
      </Routes>
    </div>
  );
}

export default App;
