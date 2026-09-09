import { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import {ThemeProvider} from "./context/ThemeContext.jsx";
import "./index.css";   

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);


  
