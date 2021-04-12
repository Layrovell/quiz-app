import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function App() {
  return (
    <section className="container">
      <Helmet>
        <title>Quiz App</title>
      </Helmet>

      <div className="button-container">
        <Link to="/quiz/play/guide" className="btn btn-play">
          Play
        </Link>
      </div>
      <div className="buttons-container">
        <Link to="/quiz/register/" className="btn btn-register">
          Register
        </Link>
      </div>
    </section>
  );
}

export default App;
