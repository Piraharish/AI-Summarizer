import { render } from "react";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./services/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
