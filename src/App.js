import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserMain from "./pages/UserMain";
import Auth from "./pages/Auth";

const App = () => {
  // 1. if not logined, go to Auth Page
  // 2. if logined, go to userMain page
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserMain />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
