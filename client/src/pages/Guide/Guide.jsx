import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Guide = () => {
  return (
    <section className="container">
      <Helmet>
        <title>Guide</title>
      </Helmet>
      <span className="roll rotating" />
      Hello, i'm a guide
      <div className="button-container">
        <Link to="/quiz/" className="btn btn-prev">
          go back
        </Link>
        <Link to="/quiz/play/game" className="btn btn-next">
          play
        </Link>
      </div>
    </section>
  );
};
