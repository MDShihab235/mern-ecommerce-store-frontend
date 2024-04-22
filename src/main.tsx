// import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM, { createRoot } from "react-dom/client";
// import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/app.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// const app = document.getElementById("root")!;
// const root = createRoot(app);
// root.render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>
//   // </React.StrictMode>
// );
