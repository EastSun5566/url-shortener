import React from "react";

import "./Header.scss";

import Form from "../Form/Form";

export default () => (
  <header className="jumbotron container">
    <h1 className="display-3">
      This is CHILLEST URL SHORTENER that you have ever seen 🔥
    </h1>
    <p className="lead">Try it now 👇</p>

    <hr className="my-4" />

    <Form />
  </header>
);
