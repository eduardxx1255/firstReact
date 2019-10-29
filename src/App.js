import React from "react";
import "./App.css";
import Header from "./components/header";
import Allpost from "./components/allpost";
import Single from "./components/singlePost";
import TextEditor from "./components/text-editor";
import Pokemon from "./components/pokemon";
import Animation from "./components/animation";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={TextEditor} />
      <Route path="/Allpost" component={Allpost} />
      <Route exact path="/Single" component={Single} />
      <Route exact path="/Pokemon" component={Pokemon} />
      <Route exact path="/Animation" component={Animation} />
    </Router>
  );
}

export default App;
