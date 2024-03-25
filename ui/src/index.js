import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "src/index.css";
import App from "src/App";
import { setupStore } from "src/store";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
