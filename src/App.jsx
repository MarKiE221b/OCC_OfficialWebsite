import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Errorpage from "./pages/Errorpage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
