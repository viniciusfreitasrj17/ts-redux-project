import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Content from "./components/Content";
import Form from "./components/Form";
import Slide from "./components/Slide";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ flexDirection: "column", padding: "0" }}
          >
            <Content />
            <Form />
          </div>
          <Slide />
        </div>
      </div>
    </Provider>
  );
}

export default App;
