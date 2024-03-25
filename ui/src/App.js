import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TeamsProvider } from "src/contexts/TeamsContext";
import Home from "src/pages/Home";
import ContextHome from "src/pages/ContextHome";
import ReduxHome from "src/pages/ReduxHome";

import "src/App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/redux/" element={<ReduxHome />} />
        </Routes>

        <TeamsProvider>
          <Routes>
            <Route exact path="/context/" element={<ContextHome />} />
          </Routes>
        </TeamsProvider>
      </Router>
    </div>
  );
};

export default App;
