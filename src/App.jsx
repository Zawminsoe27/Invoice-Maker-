import React from "react";
import AppContent from "./component/AppContent";
import { Provider } from "react-redux";
import {store} from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
