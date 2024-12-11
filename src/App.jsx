import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:photoPageID" element={<PhotoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
