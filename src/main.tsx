import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/App.scss";
import { StrictMode } from "react";

const root = document.getElementById("root")!; // Non-null assertion operator

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
