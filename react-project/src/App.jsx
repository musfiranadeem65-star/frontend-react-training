
import {  Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import HomePage from "./pages/homepage";
import DashboardPage from "./pages/Dashboardpage";
import AboutPage from "./pages/Aboutpage";
import NotFoundPage from "./pages/NotFoundpage";
import ApiDataPage from "./pages/ApiDataPage";

function App() {
  return (
    
      <Routes>

        <Route element={<AppLayout />}>

          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/api-data" element={<ApiDataPage />} />
          <Route path="/about" element={<AboutPage />} />

        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    
  );
}

export default App;