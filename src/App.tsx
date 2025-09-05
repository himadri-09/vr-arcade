import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExperiencesPage from "./pages/ExperiencesPage";
import BookingPage from "./pages/BookingPage";
import EquipmentPage from "./pages/EquipmentPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="equipment" element={<EquipmentPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;