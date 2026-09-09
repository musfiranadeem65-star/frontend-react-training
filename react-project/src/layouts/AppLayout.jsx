import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useTheme} from "../context/ThemeContext";

function AppLayout() {
  const {theme}= useTheme();
  return (
    <div className={`app-container ${theme}`}>
      <Header title="Task Manager" />
       
       <Navigation/>

      <main className ="main-content">
        <Outlet />
      </main>

      <Footer /> 
    </div>
  );
}

export default AppLayout;