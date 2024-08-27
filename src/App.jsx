import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddCaption from "./component/AddCaption";
import Home from "./component/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caption" element={<AddCaption />} />
      </Routes>
    </>
  );
}

export default App;
