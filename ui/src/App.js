import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContextHome from "./pages/ContextHome";
import ReduxHome from "./pages/ReduxHome";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/context/" element={<ContextHome />} />
          <Route exact path="/redux/" element={<ReduxHome />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
