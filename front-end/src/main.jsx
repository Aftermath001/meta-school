import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this path is correct
import "./index.css"; // Import Tailwind CSS
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
