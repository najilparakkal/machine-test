import { Routes, Route } from "react-router-dom";
import Routers from "./routers/Routers";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Routers />} />
      </Routes>
    </>
  );
}

export default App;
