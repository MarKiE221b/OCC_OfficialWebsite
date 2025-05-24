import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Individual from "./components/Individual.jsx";
import NewsUpload from "./pages/NewsUpload.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/marc" element={<Individual />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
        <Route path="/upload" element={<NewsUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
