import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Individual from "./components/Individual.jsx";
import NewsUpload from "./pages/NewsUpload.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import SystemsPage from "./pages/SystemsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/marc" element={<Individual />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/systems" element={<SystemsPage />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
        <Route path="/upload" element={<NewsUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
