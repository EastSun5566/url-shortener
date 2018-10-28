import React, { Component } from "react";

import "./App.scss";

import Nav from "../../components/Nav/Nav";
import Header from "../../components/App/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
