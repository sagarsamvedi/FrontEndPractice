import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MoneyState from "./Context/MoneyState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoneyState>
    <App />
  </MoneyState>
);
