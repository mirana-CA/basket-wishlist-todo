import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";

const NoPage = () => {
  return (
    <div>
      <Helmet>
        <title>NoPage</title>
      </Helmet>
      NoPage
    </div>
  );
};

export default NoPage;
