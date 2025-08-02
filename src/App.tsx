import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import './i18n/i18n';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
