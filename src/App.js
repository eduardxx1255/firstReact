import React from "react";
import "./App.css";
import Header from "./components/header";
import Allpost from "./components/allpost";
import Single from "./components/singlePost";
import TextEditor from "./components/text-editor";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={TextEditor} />
      <Route path="/Allpost" component={Allpost} />
      <Route exact path="/Single" component={Single} />
    </Router>
  );
}

export default App;
