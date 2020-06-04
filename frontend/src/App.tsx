import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Content from "./components/Content";
import Slide from "./components/Slide";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <Content />
          <Slide />
        </div>
      </div>
    </Provider>
  );
}

export default App;
