import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
